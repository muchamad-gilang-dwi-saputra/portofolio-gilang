"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { GithubIcon } from "../ui/Icons";

export default function PortfolioSection({ 
  onImageClick 
}: { 
  onImageClick?: (data: { src: string; alt: string; title?: string; desc?: string; link?: string }) => void 
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
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">03 — PORTOFOLIO ENTERPRISE</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">Sistem & Otomatisasi Infrastruktur</h2>
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
              {/* Gambar Cover Proyek */}
              <div 
                className="relative h-60 sm:h-72 overflow-hidden cursor-pointer border-b border-white/10"
                onClick={() => onImageClick?.({ 
                  src: proj.coverImage, 
                  alt: proj.title, 
                  title: proj.title, 
                  desc: proj.description, 
                  link: proj.externalLink 
                })}
              >
                <img 
                  src={proj.coverImage} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-70" 
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-black/80 text-white px-5 py-2.5 rounded-full text-sm font-bold border border-white/20 backdrop-blur-sm shadow-xl flex items-center gap-2">
                    Lihat Detail Sistem
                  </span>
                </div>
              </div>

              {/* Konten & Deskripsi */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#ef4444] tracking-wider uppercase">
                      {proj.category} · {proj.role}
                    </span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white leading-snug">{proj.title}</h3>
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
                
                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">{proj.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10 mt-auto">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3 py-1 text-xs font-bold text-[#fca5a5]">
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