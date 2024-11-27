import React from "react";
import "./Page.css";

const Page = ({ page, position, handleFlip, flipped = false }) => {
  return (
    <div
      className={`absolute w-full h-full bg-white shadow-lg ${
        position === "left"
          ? "rotate-y-180 origin-left"
          : position === "right"
          ? "origin-right"
          : ""
      } ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="absolute inset-0 p-10 text-gray-700 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">{page.title}</h1>
        <p>{page.content}</p>
      </div>
    </div>
  );
};

export default Page;
