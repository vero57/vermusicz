import React from "react";
import Slider from "../components/Slider";

const Header: React.FC = () => {
  return (
    <header className="w-full h-screen flex items-center justify-center backdrop-blur-md">
      <Slider />
    </header>
  );
};

export default Header;
