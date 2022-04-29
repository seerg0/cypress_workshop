import React, { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserDataType } from "../../common/common.types";

import { useSelector, useDispatch } from "react-redux";
import { UserData } from "../../store/User/types";
import { setUserData } from "../../store/User/slice";
import { selectUserData } from "../../store/User/selectors";
import "./Login.css";

async function loginUser(credentials: { email: string; password: string }) {
  return fetch("http://localhost:3010/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(async (data) => {
    if (data.status !== 200) {
      throw new Error(await data.json());
    }
    const body: { accessToken: string; user: UserDataType } = await data.json();
    return body;
  });
}

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userData } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const authData = await loginUser({
        email,
        password,
      });

      dispatch(setUserData(authData));
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (userData?.accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {error && (
        <>
          <div className="Error">{error}</div>
        </>
      )}
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
