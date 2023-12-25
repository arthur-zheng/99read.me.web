import React from "react";

const StarsDisplay = ({ count = 0 }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(
      <svg
        width="20"
        height="20"
        className="inline"
        viewBox="0 0 38 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 0L23.2658 13.1287H37.0701L25.9022 21.2426L30.1679 34.3713L19 26.2574L7.83208 34.3713L12.0978 21.2426L0.929926 13.1287H14.7342L19 0Z"
          fill="black"
        />
      </svg>
    );
  }
  return <div className="flex pl-2">{stars}</div>;
};

export default StarsDisplay;
