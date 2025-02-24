"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import items from "../../scripts/items.json";

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");
  const item = items.find((item) => item.id === Number(itemId));

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!item) {
    return <div className="bg-black text-white min-h-screen p-4 flex justify-center items-center">Item not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-4 flex justify-start items-center">
      <div className="w-2/5 bg-gray-800 p-8 border border-gray-700 rounded-lg shadow-md ml-10 mr-20">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
      </div>
      <div className="w-1/4 bg-gray-800 p-8 border border-gray-700 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
        <p className="text-2xl text-gray-400 mb-4">{item.price}</p>
        <p className="text-lg text-gray-500 mb-4">{item.description}</p>
        <div className="flex items-center space-x-4">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
