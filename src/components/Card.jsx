import React from "react";

const Card = (props) => {
  return (
    <div className="w-72 border border-gray-400 p-2 rounded-md flex flex-col">
      <span className="text-xl font-semibold capitalize">{props?.title}</span>
      <img src={props?.img} alt="" className=" object-contain mb-3" />
      <span>{props?.des}</span>
    </div>
  );
};

export default Card;
