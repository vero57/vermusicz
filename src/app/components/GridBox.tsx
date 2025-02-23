import React from "react";
import items from "../scripts/items.json";

const GridBox: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-md">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
          <h2 className="text-lg font-semibold text-white">{item.name}</h2>
          <p className="text-gray-500">{item.description}</p>
          <p className="text-gray-400">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GridBox;
