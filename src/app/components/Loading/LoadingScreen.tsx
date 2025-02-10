import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-gray-900 bg-gray-100">
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
