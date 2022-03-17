import { useEffect, useState } from "react";
import { UserDataType } from "../common/common.types";

const useAuthData = () => {
  const [authData, setAuthData] = useState<
    { accessToken: string; user: UserDataType } | undefined
  >(getAuthData());

  function getAuthData() {
    const authDataStr = localStorage.getItem("auth-data");
    console.log("authDataStr", authDataStr);

    return authDataStr
      ? (JSON.parse(authDataStr) as { accessToken: string; user: UserDataType })
      : undefined;
  }

  const saveAuthData = (data?: { accessToken: string; user: UserDataType }) => {
    if (data) {
      console.log("set1 start");
      setAuthData(data);
      localStorage.setItem("auth-data", JSON.stringify(data));
      console.log("set1");
      console.log("set1 finish");
    } else {
      console.log("set2 start");
      setAuthData(undefined);
      localStorage.removeItem("auth-data");
      console.log("set2");
      console.log("set2 finish");
    }

    // setAuthData(data);
  };

  // useEffect(() => {
  //   setAuthData(getAuthData());
  // }, []);

  console.log("hook authData", authData, getAuthData());

  return {
    authData,
    saveAuthData,
  };
};

export default useAuthData;
