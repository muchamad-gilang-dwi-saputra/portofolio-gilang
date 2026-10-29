"use client";
import React from "react";
import { motion } from "framer-motion";
import { TECHNICAL_PROJECTS, CONTENT } from "@/data/portfolio";

export default function PortfolioSection({ onImageClick }: { onImageClick?: (img: { src: string; alt: string }) => void }) {
  return (
    <section id="projects" className="py-20 border-t border-white/5 bg-white/[.015]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">03 — PROYEK TEKNIS & SIMULASI</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.techProjTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {TECHNICAL_PROJECTS.map((proj, i) => (
            <motion.article 
              key={proj.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} 
              className="rounded-3xl border border-white/10 bg-[#111111]/70 p-6 sm:p-8 backdrop-blur-md transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-[#ef4444] tracking-wider">PROYEK TEKNIS #{proj.id}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{proj.title}</h3>
                <p className="mt-4 text-sm text-white leading-relaxed">{proj.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3 py-1 text-xs font-bold text-[#fca5a5]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}