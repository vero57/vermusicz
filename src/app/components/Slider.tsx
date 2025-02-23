"use client";

import React, { useState, useEffect } from "react";
import sliderData from "../scripts/slider.json";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = sliderData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-3xl mb-2">{slide.title}</h1>
            <p className="text-white text-xl">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
