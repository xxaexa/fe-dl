import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white relative">
      {children}
    </div>
  );
};

export default Wrapper;
