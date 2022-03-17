import React, { useState } from "react";
import DrugDrop from "../../components/DrugDrop/DrugDrop";
import { Navigate, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, UserData } from "../../store/User/types";
import { setUserData } from "../../store/User/slice";
import { selectUserData } from "../../store/User/selectors";

const Profile = () => {
  const navigate = useNavigate();

  const { userData } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>(userData?.user.name || "");

  const [avatarUrl, setAvatarUrl] = useState<string>(
    userData?.user.avatarUrl || ""
  );

  if (!userData) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`http://localhost:3010/users/${userData.user.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ ...userData.user, name, avatarUrl }),
    })
      .then((response) => {
        console.log(response.body);
        return response.json();
      })
      .then((data) => {
        dispatch(
          setUserData({ accessToken: userData.accessToken, user: data })
        );
      });

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Аватар:
          <img className="Avatar" src={avatarUrl} alt={name} />
          <DrugDrop setAvatarUrl={setAvatarUrl} />
        </label>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Profile;
