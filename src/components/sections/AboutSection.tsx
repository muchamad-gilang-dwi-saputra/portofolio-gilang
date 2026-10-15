"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-white/5 bg-white/[.015] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#ef4444]">01 — PROFIL PROFESIONAL</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl text-white">{CONTENT.aboutTitle}</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-200">{CONTENT.aboutDesc1}</p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">{CONTENT.aboutDesc2}</p>
          </div>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["PENDIDIKAN", "Sarjana Teknik Informatika", "Universitas Muhammadiyah Malang\n2022 — 2026 · IPK 3.83 / 4.00 (Cum Laude)"],
            ["FONDASI TEKNIS", "Infrastruktur & Keamanan", "TCP/IP, LAN, Wi-Fi, VLAN, Routing, MikroTik, Linux, Nmap, Wireshark, Python."],
            ["RISET AKADEMIK", "Keamanan Kata Sandi", "Riset komparatif algoritma Bcrypt, Argon2, dan PBKDF2 untuk keamanan autentikasi web."]
          ].map(([tag, title, desc], i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -6, borderColor: "rgba(139, 28, 28, 0.4)" }} className="rounded-3xl border border-white/10 bg-[#111111]/70 p-6 backdrop-blur-md transition shadow-lg">
              <p className="text-xs font-bold tracking-widest text-[#ef4444]">{tag}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400 whitespace-pre-line">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}