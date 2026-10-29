"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-white/5 bg-white/[.015] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#ef4444]">01 — RINGKASAN AKADEMIK & KEAHLIAN</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-white">Fondasi Intelektual & Spesialisasi Teknis</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["PENDIDIKAN", "Sarjana Teknik Informatika", "Universitas Muhammadiyah Malang\n2022 — 2026 · IPK 3.83 / 4.00 (Cum Laude)"],
            ["FONDASI TEKNIS", "Infrastruktur & Keamanan", "TCP/IP, LAN, Wi-Fi, VLAN, Routing, MikroTik, Linux, Nmap, Wireshark, Python."],
            ["RISET AKADEMIK", "Keamanan Kata Sandi", "Riset komparatif algoritma Bcrypt, Argon2, dan PBKDF2 untuk keamanan autentikasi web berstandar SINTA 3."]
          ].map(([tag, title, desc], i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }} 
              whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} 
              className="rounded-3xl border border-white/10 bg-[#111111]/70 p-6 backdrop-blur-md transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-[#ef4444]">{tag}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white whitespace-pre-line leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}