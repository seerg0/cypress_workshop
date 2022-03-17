import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { clearUserData } from "../../store/User/slice";
import { selectUserData } from "../../store/User/selectors";

const Logout = () => {
  const { userData } = useSelector(selectUserData);
  const dispatch = useDispatch();

  console.log("Logout userData", userData);

  useEffect(() => {
    dispatch(clearUserData());
  });

  if (!userData?.accessToken) {
    return <Navigate to="/" />;
  }

  return <></>;
};

export default Logout;
