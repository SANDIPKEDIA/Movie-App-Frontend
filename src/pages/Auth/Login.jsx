import React, { useState } from "react";
import { toast } from "react-toastify";
import MainRoutes from "../../routes/MainRoutes";
import { useNavigate } from "react-router-dom";
import ToasterMessages from "../../utils/toasterMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const existingUserList = JSON.parse(localStorage.getItem("userList")) || [];
    if (!existingUserList.includes(email)) {
      toast.error(ToasterMessages.USERNOTEXISTS);
    } else {
      localStorage.setItem(`LoggedInUser`, email);
      toast.success(ToasterMessages.LOGIN);
      setEmail("");
      navigate(MainRoutes.HOME);
    }
  };

  const registeredUser = (event) => {
    event.preventDefault();
    const existingUserList = JSON.parse(localStorage.getItem("userList")) || [];
    if (existingUserList.includes(email)) {
      toast.error(ToasterMessages.USEREXISTS);
    } else {
      const updatedUserList = [...existingUserList, email];
      localStorage.setItem("userList", JSON.stringify(updatedUserList));
      toast.success(ToasterMessages.REGISTERED);
      setEmail("");
    }
  };

  const handleLogoutUser = () => {
    localStorage.removeItem(`LoggedInUser`);
    toast.success(ToasterMessages.LOGOUT);
    navigate(MainRoutes.HOME);
  };

  return (
    <div className="center-div">
      <form className="form" onSubmit={handleLogin}>
        <span className="title">Login into Movie App</span>
        <p className="description">
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email-address"
          />
          <button type="submit">LOGIN</button>
        </div>
      </form>
      <form className="form" onSubmit={registeredUser}>
        <span className="title">SINGUP into Movie App</span>
        <p className="description">
          Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
          velit quis. Duis tempor incididunt dolore.
        </p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email-address"
          />
          <button type="submit">LOGIN</button>
        </div>
      </form>
      <button onClick={handleLogoutUser}>LOGOUT</button>
    </div>
  );
};

export default Login;
