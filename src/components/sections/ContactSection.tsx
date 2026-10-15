"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROFILE, CONTENT } from "@/data/portfolio";
import { MailIcon, LinkedinIcon, GithubIcon, InstagramIcon, ExternalLinkIcon } from "../ui/Icons";

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#8b1c1c]/30 bg-gradient-to-br from-[#120505] to-[#0a0a0a] p-8 sm:p-14 shadow-2xl grid gap-8 lg:grid-cols-[1.2fr_.8fr] backdrop-blur-xl">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#ef4444]">08 — KONTAK</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl leading-tight text-white">{CONTENT.contactTitle}</h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base">{CONTENT.contactDesc}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Email", href: `mailto:${PROFILE.email}`, icon: <MailIcon className="w-5 h-5 text-[#ef4444]" /> },
                { label: "LinkedIn", href: PROFILE.linkedin, icon: <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" /> },
                { label: "GitHub", href: PROFILE.github, icon: <GithubIcon className="w-5 h-5 text-white" /> },
                { label: "Instagram", href: PROFILE.instagram, icon: <InstagramIcon className="w-5 h-5 text-[#E4405F]" /> },
              ].map((item, i) => (
                <motion.a key={i} whileHover={{ scale: 1.05, borderColor: "#8b1c1c" }} whileTap={{ scale: 0.95 }} href={item.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:bg-[#8b1c1c]/20 hover:text-white transition shadow-md group">
                  <div className="flex items-center gap-3">{item.icon} <span>{item.label}</span></div>
                  <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-[#ef4444] transition" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        Muchamad Gilang Dwi Saputra. Hak Cipta Dilindungi.
      </footer>
    </>
  );
}