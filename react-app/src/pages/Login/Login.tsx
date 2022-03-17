import React, { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserDataType } from "../../common/common.types";

import { useSelector, useDispatch } from "react-redux";
import { UserData } from "../../store/User/types";
import { setUserData } from "../../store/User/slice";
import { selectUserData } from "../../store/User/selectors";

async function loginUser(credentials: { email: string; password: string }) {
  return fetch("http://localhost:3010/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(async (data) => {
    const body: { accessToken: string; user: UserDataType } = await data.json();
    return body;
  });
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userData } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const authData = await loginUser({
      email,
      password,
    });

    dispatch(setUserData(authData));
  };

  if (userData?.accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
