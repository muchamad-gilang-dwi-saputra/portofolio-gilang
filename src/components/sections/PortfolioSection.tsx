"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS, TECHNICAL_PROJECTS, CONTENT } from "@/data/portfolio";
import { ExternalLinkIcon } from "../ui/Icons";

export default function PortfolioSection({ onImageClick }: { onImageClick: (img: { src: string; alt: string }) => void }) {
  return (
    <>
      {/* PROYEK UTAMA */}
      <section id="projects" className="border-y border-white/5 bg-white/[.015] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">03 — PROYEK UTAMA</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.projTitle}</h2>
            <p className="mt-3 text-slate-400 max-w-3xl text-sm leading-relaxed">{CONTENT.projDesc}</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {PROJECTS.map((proj, idx) => (
              <motion.article key={proj.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.5 }} whileHover={{ y: -10, transition: { duration: 0.2 } }} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/80 backdrop-blur-md hover:border-[#8b1c1c]/50 hover:shadow-[0_10px_35px_rgba(139,28,28,0.25)]">
                <div className="relative overflow-hidden">
                  <img src={proj.coverImage} alt={proj.title} onClick={() => onImageClick({ src: proj.coverImage, alt: proj.title })} className="h-60 w-full object-cover cursor-pointer transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-4 top-4 rounded-full border border-[#ef4444]/40 bg-[#050505]/80 px-3 py-1 text-xs font-bold text-[#ef4444] backdrop-blur">{proj.role}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">{proj.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.techStack.map((tech, i) => <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">{tech}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* RISET & PUBLIKASI */}
      <section id="publication" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">04 — RISET & PUBLIKASI</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.pubTitle}</h2>
          </motion.div>
          <motion.article initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#120505] to-[#0a0a0a] p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-[#8b1c1c]/40 transition">
            <div className="grid gap-8 lg:grid-cols-[1fr_.4fr]">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#ef4444]">SINTA 3 · RISET TERPUBLIKASI</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl leading-tight text-white">Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG Berbasis Web</h3>
                <p className="mt-3 text-slate-300 font-medium text-sm">Jurnal Informatika: Jurnal Pengembangan IT · Vol. 11, No. 2</p>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">{CONTENT.pubDetails}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Password Hashing", "Authentication Security", "Web Security", "Jurnal SINTA 3"].map((tag, i) => <span key={i} className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-3 py-1 text-xs font-bold text-[#fca5a5]">{tag}</span>)}
                </div>
              </div>
              <div className="rounded-3xl border border-[#8b1c1c]/30 bg-[#8b1c1c]/10 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-extrabold tracking-widest text-slate-400">DETAIL PUBLIKASI</p>
                  <p className="mt-4 text-2xl font-black text-white">TAUTAN DOI</p>
                  <a href="https://doi.org/10.30591/jpit.v11i2.10280" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 break-all text-xs font-semibold text-[#ef4444] underline underline-offset-4 hover:text-[#fca5a5]">
                    10.30591/jpit.v11i2.10280 <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
                <p className="mt-6 text-xs text-slate-400">Penulis: Muchamad Gilang Dwi Saputra</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* PROYEK TEKNIS */}
      <section id="technical-projects" className="border-y border-white/5 bg-white/[.015] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">05 — PROYEK TEKNIS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.techProjTitle}</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TECHNICAL_PROJECTS.map((tp, i) => (
              <motion.article key={tp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6 flex flex-col justify-between backdrop-blur-md transition shadow-lg">
                <div>
                  <p className="text-xs font-bold text-[#ef4444]">{tp.id}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{tp.title}</h3>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">{tp.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tp.tags.map((t, i) => <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}