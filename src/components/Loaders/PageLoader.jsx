import React from "react";
// import logo from "../../assets/images/favicon/favicon.png";

const PageLoader = () => {
  return (
    <div className="wrapper">
      <div className="preloader">
        <div className="loading d-flex align-items-center justify-content-center w-100 custom-gap-1">
          {/* <img src={logo} alt="" style={{ width: "75px" }} /> */}
          <svg width="64px" height="48px">
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="back"
            ></polyline>
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="front"
            ></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
