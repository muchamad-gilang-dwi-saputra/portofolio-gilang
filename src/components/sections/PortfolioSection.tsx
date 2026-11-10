"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolio";
import { GithubIcon } from "../ui/Icons";

interface ImageClickData {
  src: string;
  alt: string;
  title?: string;
  desc?: string;
  link?: string;
}

// Sub-komponen Slider Gambar dengan Auto-Slide & Next/Image Optimization
function ProjectImageSlider({
  proj,
  onImageClick,
}: {
  proj: Project & { images?: (string | { src: string; alt?: string })[] };
  onImageClick?: (data: ImageClickData) => void;
}) {
  // Normalisasi array gambar (mendukung string[] maupun object[])
  const imageList =
    Array.isArray(proj.images) && proj.images.length > 0
      ? proj.images.map((img) =>
          typeof img === "string" ? { src: img, alt: proj.title } : img
        )
      : [{ src: proj.coverImage, alt: proj.title }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-Slide setiap 4 detik (pause jika di-hover)
  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageList.length, isHovered]);

  const currentImg = imageList[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div
      className="relative h-60 sm:h-72 overflow-hidden cursor-pointer border-b border-white/10 group/slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        onImageClick?.({
          src: currentImg.src,
          alt: currentImg.alt || proj.title,
          title: proj.title,
          desc: proj.description,
          link: proj.externalLink,
        })
      }
    >
      {/* Penggunaan Next.js Image Component (Memperbaiki ESLint no-img-element) */}
      <Image
        src={currentImg.src}
        alt={currentImg.alt || proj.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
        priority={false}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition duration-300 z-10 pointer-events-none">
        <span className="bg-black/80 text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/20 backdrop-blur-sm shadow-xl flex items-center gap-2">
          Lihat Detail Sistem
        </span>
      </div>

      {/* Slider Navigation & Controls (Muncul jika gambar > 1) */}
      {imageList.length > 1 && (
        <>
          {/* Slide Counter Badge */}
          <span className="absolute top-3 left-3 z-20 bg-black/80 text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
            {currentIndex + 1} / {imageList.length}
          </span>

          {/* Prev / Next Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-[#ef4444] text-white p-2.5 rounded-full border border-white/20 opacity-0 group-hover/slider:opacity-100 transition duration-300"
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-[#ef4444] text-white p-2.5 rounded-full border border-white/20 opacity-0 group-hover/slider:opacity-100 transition duration-300"
            aria-label="Next Slide"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-5 bg-[#ef4444]"
                    : "w-1.5 bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PortfolioSection({
  onImageClick,
}: {
  onImageClick?: (data: ImageClickData) => void;
}) {
  return (
    <section id="projects" className="py-20 border-t border-white/5 bg-white/[.015]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">
            03 — PORTOFOLIO ENTERPRISE
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">
            Sistem & Otomatisasi Infrastruktur
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((proj, i) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#111111]/70 overflow-hidden backdrop-blur-md transition shadow-lg flex flex-col group hover:border-[#8b1c1c]/50"
            >
              {/* Gambar Cover Proyek / Slider */}
              <ProjectImageSlider proj={proj} onImageClick={onImageClick} />

              {/* Konten & Deskripsi */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#ef4444] tracking-wider uppercase">
                      {proj.category} · {proj.role}
                    </span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white leading-snug">
                      {proj.title}
                    </h3>
                  </div>
                  {/* Tombol GitHub Spesifik Proyek */}
                  {proj.externalLink && (
                    <a
                      href={proj.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#ef4444] hover:text-white transition-all text-slate-300"
                      title="Lihat Repository GitHub"
                    >
                      <GithubIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10 mt-auto">
                  {proj.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3 py-1 text-xs font-bold text-[#fca5a5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}