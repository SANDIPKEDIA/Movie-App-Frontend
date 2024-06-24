import React from "react";

const Login = () => {
  return (
    <div className="center-div">
   <form className="form">
  <span className="title">Subscribe to our newsletter.</span>
  <p className="description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
  <div>
    <input placeholder="Enter your email" type="email" name="email" id="email-address" />
    <button type="submit">Subscribe</button>
  </div>
</form>
    </div>
  );
};

export default Login;
