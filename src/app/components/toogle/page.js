
"use client";
import React, { useState } from "react";

const Toogle = () => {
  const [toogle, setToogle] = useState(false);
  const handleToggle = () => {
    setToogle(!toogle);
  };
  return (
    <div
      className={` flex items-center   border-[0.05rem]  ${toogle ?"bg-[#461F84]":" bg-[#C2C3C8]"}  w-14 rounded-2xl h-6`}
    >
      <input
        type=" checkbox"
         readOnly
        className={`duration-500 w-5 h-5 ${
          toogle && "translate-x-8"
        }   outline-none  cursor-pointer   rounded-full    bg-white  `}
        onClick={handleToggle}
      />
    </div>
  );
};

export default Toogle;