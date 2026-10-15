"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_CATEGORIES, CERTIFICATES, CONTENT } from "@/data/portfolio";

export default function ExpertiseSection({ onImageClick }: { onImageClick: (img: { src: string; alt: string }) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("Semua Kategori");
  const categories = ["Semua Kategori", "Cybersecurity", "Network Engineering", "IT Support", "Kepemimpinan"];
  const filteredCertificates = activeCategory === "Semua Kategori" ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <>
      <section id="skills" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">06 — KEAHLIAN TEKNIS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.skillsTitle}</h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS_CATEGORIES.map((sc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-md transition shadow-lg">
                <h3 className="text-xl font-bold text-white">{sc.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{sc.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="border-y border-white/5 bg-white/[.015] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">07 — KREDENSIAL & SERTIFIKASI</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.credTitle}</h2>
          </motion.div>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-xl px-4 py-2 text-xs font-bold transition duration-300 border ${activeCategory === cat ? "border-[#8b1c1c] bg-[#8b1c1c] text-white shadow-[0_0_15px_rgba(139,28,28,0.4)]" : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10"}`}>
                {cat}
              </button>
            ))}
          </div>
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredCertificates.map((cert) => (
                <motion.article layout key={cert.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} whileHover={{ y: -8 }} className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/90 backdrop-blur-md hover:border-[#8b1c1c]/50 transition duration-300 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="overflow-hidden bg-white/5 p-2">
                      <img src={cert.image} alt={cert.name} onClick={() => onImageClick({ src: cert.image, alt: cert.name })} className="h-52 w-full object-contain cursor-zoom-in hover:scale-105 transition duration-300" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block rounded-md border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-2 py-0.5 text-[10px] font-bold text-[#fca5a5] mb-2">{cert.category}</span>
                      <p className="text-[11px] font-bold tracking-widest text-slate-400">{cert.issuer}</p>
                      <h3 className="mt-1 text-base font-bold text-white">{cert.name}</h3>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}