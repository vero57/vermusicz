import React from "react";
import GridBox from "./components/GridBox";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">New Release</h1>
      <GridBox />
    </div>
  );
}
