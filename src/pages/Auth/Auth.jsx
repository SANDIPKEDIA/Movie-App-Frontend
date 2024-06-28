import React, { useState } from "react";
import { toast } from "react-toastify";
import MainRoutes from "../../routes/MainRoutes";
import { useNavigate } from "react-router-dom";
import ToasterMessages from "../../utils/toasterMessage";

const Auth = () => {
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
      setisSignUp(false)
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
                  required
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

    );
};

export default Auth;
