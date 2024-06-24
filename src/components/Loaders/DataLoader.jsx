import React from "react";

const DataLoader = ({ title }) => {
  return (
    <div className="customClassForDataLoader">
      <div className="data-loader"></div>
      <p>{title}</p>
    </div>
  );
};

export default DataLoader;
