import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import Logout from "./pages/Logout/Logout";
import Login from "./pages/Login/Login";

// export const UserContext = React.createContext<UserDataType | null>(null);

function App() {
  // const { authData, saveAuthData } = useAuthData();
  // console.log("authData app", authData);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
