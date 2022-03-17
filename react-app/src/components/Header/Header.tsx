import "./Header.css";

import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { UserDataType } from "../../common/common.types";
import { useSelector, useDispatch, DefaultRootState } from "react-redux";
import { UserData } from "../../store/User/types";
import { setUserData, clearUserData } from "../../store/User/slice";
import { selectUserData } from "../../store/User/selectors";

const Header = () => {
  const navigate = useNavigate();

  const { userData } = useSelector(selectUserData);
  const dispatch = useDispatch();

  console.log("userData", userData);

  return (
    <div className="HeaderContainer">
      <div className="Header">
        <div>
          <a href="\">Home</a>
        </div>
        <div className="AccountInfo">
          {userData ? (
            <>
              <a href="\profile">
                {userData.user.name}
                <img src={userData.user.avatarUrl} alt={userData.user.name} />
              </a>
              <Button
                onClick={() => {
                  dispatch(clearUserData());
                }}
                label="logout"
              />
            </>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              label="login"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
