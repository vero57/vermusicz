import React from "react";
import Link from "next/link";
import items from "./scripts/items.json";

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 mt-10">New Release</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
        {items.map((item) => (
          <Link key={item.id} href={`/detail?id=${item.id}`}>
            <div className="bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-md cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h2 className="text-lg font-semibold text-white">{item.name}</h2>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-gray-400">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
