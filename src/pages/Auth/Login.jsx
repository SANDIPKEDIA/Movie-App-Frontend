import React, { useState } from "react";
import { toast } from "react-toastify";
import MainRoutes from "../../routes/MainRoutes";
import { useNavigate } from "react-router-dom";
import ToasterMessages from "../../utils/toasterMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isSignUp, setisSignUp] = useState(false);

  const handleSignUp = () => {
    setisSignUp(!isSignUp);
    setEmail("");
  };

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


  return (
    <div className="main backdrop">
      <div className="backdrop-overlay main d-flex align-items-center justify-content-center">
        <div className="card w-600p">
          <div className="card-body">
            <h5 className="card-title main-text-primary">
              {!isSignUp ? "Login" : "Create New Account"}
            </h5>
            <form onSubmit={isSignUp?registeredUser:handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  minLength={4}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email address"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-center">
                {!isSignUp ? (
                  <p>
                    Don't have an account?{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={handleSignUp}
                    >
                      Create New Account
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?&nbsp;
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={handleSignUp}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="submit" className="btn main-btn-primary">
                  {!isSignUp ? "Login" : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div className="center-div">
    //   <form className="form" onSubmit={handleLogin}>
    //     <span className="title">Login into Movie App</span>
    //     <p className="description">
    //       Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
    //       velit quis. Duis tempor incididunt dolore.
    //     </p>
    //     <div>
    //       <input
    //         placeholder="Enter your email"
    //         type="email"
    //         required
    //         name="email"
    //         value={email}
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //         id="email-address"
    //       />
    //       <button type="submit">LOGIN</button>
    //     </div>
    //   </form>
    //   <form className="form" onSubmit={registeredUser}>
    //     <span className="title">SINGUP into Movie App</span>
    //     <p className="description">
    //       Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
    //       velit quis. Duis tempor incididunt dolore.
    //     </p>
    //     <div>
    //       <input
    //         placeholder="Enter your email"
    //         type="email"
    //         required
    //         name="email"
    //         value={email}
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }}
    //         id="email-address"
    //       />
    //       <button type="submit">LOGIN</button>
    //     </div>
    //   </form>
    //   <button onClick={handleLogoutUser}>LOGOUT</button>
    // </div>
  );
};

export default Login;
