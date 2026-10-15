"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, CONTENT } from "@/data/portfolio";
import { MailIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-3 font-bold tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#8b1c1c]/40 bg-[#8b1c1c]/10 text-[#ef4444] shadow-[0_0_20px_rgba(139,28,28,0.3)]">MG</span>
          <span className="text-lg tracking-wider text-white">GILANG<span className="text-[#ef4444] animate-pulse">.</span></span>
        </motion.a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 xl:flex">
          {[
            ["about", CONTENT.nav.about],
            ["experience", CONTENT.nav.experience],
            ["projects", CONTENT.nav.projects],
            ["publication", CONTENT.nav.publication],
            ["skills", CONTENT.nav.skills],
            ["credentials", CONTENT.nav.credentials],
            ["contact", CONTENT.nav.contact],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-[#ef4444] transition duration-200 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[#8b1c1c]/40 bg-[#8b1c1c]/10 px-4 py-2 text-xs font-bold text-[#ef4444] hover:bg-[#8b1c1c] hover:text-white transition duration-300 shadow-[0_0_15px_rgba(139,28,28,0.2)]"
          >
            <MailIcon className="w-3.5 h-3.5" />
            {CONTENT.ctaConnect}
          </motion.a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg border border-white/10 p-2 text-xl text-white xl:hidden">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/5 bg-[#050505] px-5 py-4 xl:hidden">
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.about}</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.experience}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.projects}</a>
              <a href="#publication" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.publication}</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.skills}</a>
              <a href="#credentials" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.credentials}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{CONTENT.nav.contact}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}