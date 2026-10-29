"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROFILE, CONTENT } from "@/data/portfolio";
import { LocationIcon, ExternalLinkIcon, GithubIcon } from "../ui/Icons";

export default function HeroSection({ onImageClick }: { onImageClick: (img: { src: string; alt: string }) => void }) {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ubah items-center menjadi lg:items-start agar foto tetap di atas meskipun teks kiri panjang */}
      <div className="mx-auto grid max-w-7xl items-center lg:items-start gap-12 px-5 lg:grid-cols-[1.2fr_.8fr]">
        
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8b1c1c]/40 bg-[#8b1c1c]/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#ef4444] shadow-[0_0_15px_rgba(139,28,28,0.25)]">
            <span className="h-2 w-2 rounded-full bg-[#ef4444] animate-ping"></span>
            {CONTENT.badge}
          </div>
          
          <div className="mb-3 flex flex-wrap items-center gap-4 text-xs font-bold tracking-[.25em] text-slate-400">
            <span>{CONTENT.heroSubtitle}</span>
          </div>
          
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl text-white">
            Muchamad Gilang<br />
            <span className="bg-gradient-to-r from-white via-[#fca5a5] to-[#ef4444] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.3)]">
              Dwi Saputra, S.Kom.
            </span>
          </h1>
          
          <div className="mt-5 flex items-center gap-2 text-slate-300 font-semibold text-sm sm:text-base">
            <LocationIcon className="w-5 h-5 text-[#ef4444]" />
            <span>{PROFILE.location}</span>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {["Network Engineering", "Network Security", "Cybersecurity"].map((tag, i) => (
              <motion.span key={i} whileHover={{ scale: 1.08 }} className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3.5 py-1 text-xs font-bold text-[#fca5a5] shadow-[0_0_10px_rgba(139,28,28,0.15)]">
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* INTEGRASI 4 PARAGRAF ABOUT ME KE HERO SECTION */}
          <div className="mt-8 flex flex-col gap-4 max-w-2xl">
  {CONTENT.aboutDescriptions.map((desc, idx) => (
    <p 
      key={idx} 
      className={`leading-relaxed text-white ${
        idx === 0 
          ? "text-base sm:text-lg font-semibold" 
          : "text-sm sm:text-base"
      }`}
    >
      {desc}
    </p>
  ))}
</div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(139, 28, 28, 0.5)" }} whileTap={{ scale: 0.95 }} href="#experience" className="inline-flex items-center gap-2 rounded-xl bg-[#8b1c1c] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#a52a2a]">
              {CONTENT.ctaExplore} <ExternalLinkIcon className="w-4 h-4" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 hover:border-white/30">
              <GithubIcon className="w-5 h-5" /> {CONTENT.ctaGithub}
            </motion.a>
          </div>
          
          <div className="mt-10 grid max-w-2xl grid-cols-2 sm:grid-cols-3 gap-3">
            {[ [PROFILE.gpa, CONTENT.metrics.gpa], ["SINTA 3", CONTENT.metrics.research] ].map(([val, label], idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + idx * 0.15 }} whileHover={{ y: -5, borderColor: "rgba(139,28,28,0.4)" }} className="rounded-2xl border border-white/10 bg-[#111111]/80 p-4 text-center sm:text-left backdrop-blur-md transition shadow-lg">
                <strong className="block text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{val}</strong>
                <span className="mt-1 block text-xs text-white opacity-80">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FOTO PROFIL DI KANAN (Sticky Top agar tidak hilang saat teks kiri di-scroll) */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} whileHover={{ rotateY: 8, rotateX: -5 }} className="relative mx-auto w-full max-w-md perspective-1000 lg:sticky lg:top-32">
          <div className="absolute -inset-8 rounded-[3rem] bg-[#8b1c1c]/20 blur-3xl animate-pulse"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]/90 p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <img src="/assets/Profile.png" alt={PROFILE.name} onClick={() => onImageClick({ src: "/assets/Profile.png", alt: PROFILE.name })} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover cursor-pointer hover:scale-105 transition duration-500 border border-white/5" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#050505]/95 p-4 backdrop-blur-xl shadow-2xl">
              <p className="text-[11px] font-extrabold tracking-widest text-[#ef4444]">FOKUS PROFESIONAL</p>
              <p className="mt-1 text-xs font-semibold text-white">Infrastruktur · Keamanan · Jaringan</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}