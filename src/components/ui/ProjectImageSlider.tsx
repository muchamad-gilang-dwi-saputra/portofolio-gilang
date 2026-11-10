"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectImageSliderProps {
  images: string[];
  title: string;
}

export const ProjectImageSlider: React.FC<ProjectImageSliderProps> = ({
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fitur Auto-Slide: Berganti otomatis setiap 4 detik (pause saat di-hover)
  useEffect(() => {
    if (!images || images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images, isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative aspect-video w-full bg-slate-950 overflow-hidden rounded-t-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar Aktif */}
      <Image
        src={images[currentIndex]}
        alt={`${title} slide ${currentIndex + 1}`}
        fill
        className="object-contain transition-all duration-500 ease-in-out"
      />

      {/* Label Keterangan Slide */}
      {images.length > 1 && (
        <span className="absolute top-3 left-3 z-10 bg-slate-900/85 backdrop-blur-md text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
          {currentIndex === 0 ? "1. Streamlit Dashboard" : "2. MikroTik CLI SSH"}
        </span>
      )}

      {/* Tombol Slide Manual (Prev / Next) */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-blue-600 text-white p-2 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-900/80 hover:bg-blue-600 text-white p-2 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next Slide"
          >
            ❯
          </button>

          {/* Indicators Dot */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-blue-500" : "w-2 bg-slate-500/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};