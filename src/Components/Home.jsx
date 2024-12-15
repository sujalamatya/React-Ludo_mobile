import React from "react";

export default function ({ ...props }) {
  return (
    <div
      className={`w-full h-full  rounded-2xl  grid grid-cols-2 grid-rows-2 gap-3  bg-white place-items-center`}
    >
      <div
        className={`w-[1.5rem] h-[1.5rem] rounded-full ${props.className}`}
      ></div>
      <div
        className={`w-[1.5rem] h-[1.5rem] rounded-full ${props.className}`}
      ></div>
      <div
        className={`w-[1.5rem] h-[1.5rem] rounded-full ${props.className}`}
      ></div>
      <div
        className={`w-[1.5rem] h-[1.5rem] rounded-full ${props.className}`}
      ></div>
    </div>
  );
}
