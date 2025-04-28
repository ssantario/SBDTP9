import React from "react";

const Card = ({ title, body, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default Card;