"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/portfolio";
import { ExternalLinkIcon } from "../ui/Icons";

export default function PublicationSection() {
  return (
    <section id="publication" className="py-20 border-t border-white/5 bg-white/[.015]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">04 — PUBLIKASI ILMIAH</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.pubTitle}</h2>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          whileHover={{ y: -4, borderColor: "rgba(139, 28, 28, 0.4)" }} 
          className="rounded-3xl border border-white/10 bg-[#111111]/70 p-8 sm:p-10 backdrop-blur-md transition shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="rounded-full border border-[#ef4444]/30 bg-[#8b1c1c]/20 px-4 py-1 text-xs font-bold text-[#fca5a5]">
                Jurnal Nasional Terakreditasi SINTA 3
              </span>
              <span className="text-xs font-bold text-slate-400">Penulis Utama</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
              Komparasi Algoritma Kriptografi Password (Bcrypt, Argon2, PBKDF2) Menggunakan Simulasi GPU & Hashcat
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {CONTENT.pubDetails}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <span>DOI: 10.30591/jpit.v11i2.10280</span>
            </div>
            <a 
              href="https://doi.org/10.30591/jpit.v11i2.10280" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#8b1c1c]/30 border border-[#8b1c1c]/50 px-5 py-2.5 rounded-full hover:bg-[#8b1c1c] transition-all"
            >
              <span>Akses Jurnal Resmi</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}