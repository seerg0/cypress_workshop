import { FileUploader } from "react-drag-drop-files";
import AWS from "aws-sdk";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const fileTypes = ["PNG"];

const prefixBucketUrl =
  "https://cms-screen-contents.s3.us-east-2.amazonaws.com/";

const S3_BUCKET = "cms-screen-contents";
const REGION = "us-east-2";

AWS.config.update({
  accessKeyId: "AKIA34MSIRYZFNAGVUUN",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

function DragDrop({
  setAvatarUrl,
}: {
  setAvatarUrl: (avatarUrl: string) => void;
}) {
  const handleChange = (file: File) => {
    uploadFile(file);
  };
  const [progress, setProgress] = useState(0);

  const uploadFile = async (file: File) => {
    console.log("file.type", file.name);
    const fileExt = file.name.split(".").pop();
    const fileName = uuid() + "." + fileExt;

    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: fileName,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        const progress = Math.round((evt.loaded / evt.total) * 100);
        setProgress(progress >= 100 ? 0 : progress);
      })
      .promise()
      .then((ddd) => {
        console.log("ddd", ddd);
        return setAvatarUrl(prefixBucketUrl + fileName);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <>
      {progress ? (
        <div> Upload Progress is {progress}%</div>
      ) : (
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      )}
    </>
  );
}

export default DragDrop;
