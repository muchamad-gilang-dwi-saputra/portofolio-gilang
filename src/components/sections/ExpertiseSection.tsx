"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS_CATEGORIES, CERTIFICATES, CONTENT } from "@/data/portfolio";

export default function ExpertiseSection({ onImageClick }: { onImageClick?: (img: { src: string; alt: string }) => void }) {
  return (
    <section id="skills" className="py-20 border-t border-white/5 bg-white/[.015]">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* BAGIAN 1: KEAHLIAN TEKNIS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">03 — KEAHLIAN TEKNIS</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.skillsTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {SKILLS_CATEGORIES.map((cat, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} 
              className="rounded-3xl border border-white/10 bg-[#111111]/70 p-6 backdrop-blur-md transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-4 text-sm text-white leading-relaxed font-normal">
                  {cat.skills}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BAGIAN 2: SERTIFIKASI PROFESIONAL & KREDENSIAL */}
        <motion.div 
          id="credentials"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-12 pt-12 border-t border-white/10"
        >
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">04 — SERTIFIKASI & LISENSI</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.credTitle}</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <motion.article 
              key={cert.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.08 }} 
              whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} 
              className="rounded-3xl border border-white/10 bg-[#111111]/70 overflow-hidden backdrop-blur-md transition shadow-lg flex flex-col justify-between"
            >
              {cert.image && (
                <div 
                  className="relative h-48 w-full overflow-hidden bg-black/40 cursor-pointer" 
                  onClick={() => onImageClick && onImageClick({ src: cert.image, alt: cert.name })}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="h-full w-full object-cover hover:scale-105 transition duration-500" 
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#ef4444] tracking-wider uppercase">{cert.category}</span>
                    <span className="text-xs font-semibold text-slate-300">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{cert.name}</h3>
                  <p className="mt-3 text-xs text-white leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}