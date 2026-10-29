"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ImageModal from "@/components/ui/ImageModal";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#8b1c1c] selection:text-[#ffffff] relative overflow-x-hidden">
      <LoadingScreen />

      {/* MOUSE SPOTLIGHT GLOW */}
      {isMounted && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{ background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 28, 28, 0.05), transparent 80%)` }}
        />
      )}

      {/* BACKGROUND NEON ORBS & GRID */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#020202]">
        <div className="absolute w-[40rem] h-[40rem] bg-[#4a0404] rounded-full blur-[160px] opacity-20 -top-44 -right-36 animate-[spin_25s_linear_infinite]" />
        <div className="absolute w-[32rem] h-[32rem] bg-[#8b1c1c] rounded-full blur-[140px] opacity-10 top-[35rem] -left-52 animate-[pulse_18s_linear_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,28,28,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,28,28,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      {/* NAVIGASI */}
      <Navbar />

      {/* KONTEN UTAMA */}
      <main>
        <HeroSection onImageClick={setPreviewImage} />
        <AboutSection />
        <ExperienceSection onImageClick={setPreviewImage} />
        <PortfolioSection onImageClick={setPreviewImage} />
        <ExpertiseSection onImageClick={setPreviewImage} />
        <ContactSection />
      </main>

      {/* MODAL GAMBAR */}
      <ImageModal image={previewImage} onClose={() => setPreviewImage(null)} />
    </div>
  );
}