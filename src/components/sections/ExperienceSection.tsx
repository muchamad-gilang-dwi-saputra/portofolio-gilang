"use client";
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES, CONTENT } from "@/data/portfolio";

export default function ExperienceSection({ onImageClick }: { onImageClick: (img: { src: string; alt: string }) => void }) {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">02 — PENGALAMAN</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.expTitle}</h2>
        </motion.div>
        {EXPERIENCES.map((exp, idx) => (
          <motion.article key={exp.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="mb-12 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#120505] to-[#0a0a0a] p-6 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-[#8b1c1c]/40 transition">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#ef4444]">{exp.period}</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl text-white">{exp.role}</h3>
                <p className="mt-2 text-base text-[#fca5a5] font-semibold">{exp.company}</p>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-extrabold text-slate-500 tracking-wider mb-3">KONTRIBUSI UTAMA</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.contributions.map((c, i) => <li key={i}>— {c}</li>)}
                  </ul>
                </div>
                {exp.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((t, i) => <span key={i} className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3 py-1 text-xs font-bold text-[#fca5a5]">{t}</span>)}
                  </div>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {exp.images.map((img, i) => (
                  <motion.img key={i} whileHover={{ scale: 1.05 }} src={img.src} alt={img.alt} onClick={() => onImageClick(img)} className="h-48 w-full rounded-2xl object-cover cursor-zoom-in transition duration-300 border border-white/10 shadow-lg" />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}