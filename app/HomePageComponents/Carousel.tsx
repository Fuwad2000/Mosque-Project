"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}: Props) => {
  const [curr, setCurr] = useState(0);
  const slides = React.Children.toArray(children);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full">
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-black/50 backdrop-blur-md text-white hover:bg-black/40"
          onClick={prev}
        >
          <ChevronLeft />
        </button>
        <button
          className="p-1 rounded-full shadow bg-black/50 backdrop-blur-md text-white hover:bg-black/40"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
