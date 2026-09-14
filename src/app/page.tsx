"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PROFILE,
  TRANSLATIONS,
  EXPERIENCES,
  PROJECTS,
  TECHNICAL_PROJECTS,
  CERTIFICATES,
  SKILLS_CATEGORIES,
} from "@/data/portfolio";

// --- INLINE SVG ICON COMPONENTS ---
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Loading Screen State
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Certificate Filter State
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Dynamic Mouse Tracker
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Loading screen effect timer
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const t = TRANSLATIONS[lang];

  // Certificate Categories List
  const categories = ["All", "Cybersecurity", "Network Engineering", "IT Support", "Leadership"];
  
  const filteredCertificates = activeCategory === "All"
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === activeCategory);

  // CLI State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "CYBER_NODE v3.5 [SECURITY MATRIX INITIALIZED]",
    "Type 'help' or 'status' to explore CLI controls.",
  ]);

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = "";

    if (cmd === "help") {
      res =
        lang === "id"
          ? "Command: whoami, skills, publication, gpa, contact, status, clear"
          : "Commands: whoami, skills, publication, gpa, contact, status, clear";
    } else if (cmd === "whoami") {
      res = `${PROFILE.name} — ${PROFILE.role[lang]}`;
    } else if (cmd === "status") {
      res =
        "SYSTEM STATUS: 100% SECURE | FIREWALL: ACTIVE | VERCEL EDGE NODE: ONLINE";
    } else if (cmd === "gpa") {
      res = `GPA: ${PROFILE.gpa} (Universitas Muhammadiyah Malang)`;
    } else if (cmd === "skills") {
      res =
        "Network Engineering (MikroTik, Cisco), Cybersecurity (Wireshark, Nmap, DVWA), Python, PHP, MySQL, Linux.";
    } else if (cmd === "publication") {
      res =
        "SINTA 3 Journal: 'Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG Berbasis Web' (DOI: 10.30591/jpit.v11i2.10280)";
    } else if (cmd === "contact") {
      res = `Email: ${PROFILE.email} | Phone: ${PROFILE.phone}`;
    } else if (cmd === "clear") {
      setTerminalOutput([]);
      setTerminalInput("");
      return;
    } else {
      res = `Command not found: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalOutput((prev) => [
      ...prev,
      `root@gilang:~# ${terminalInput}`,
      res,
    ]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 font-sans selection:bg-[#42b8ff] selection:text-[#040914] relative overflow-x-hidden">
      
      {/* CYBER LOADING SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040914] px-5 font-mono"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(66,184,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,184,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex max-w-lg flex-col items-center text-center"
            >
              {/* Spinning Cyber Node */}
              <div className="relative mb-8 grid h-20 w-20 place-items-center">
                <div className="absolute inset-0 rounded-full border-2 border-t-[#42b8ff] border-r-transparent border-b-[#00c8ff] border-l-transparent animate-spin"></div>
                <div className="h-10 w-10 rounded-xl border border-[#42b8ff]/50 bg-[#42b8ff]/10 text-xs font-bold text-[#42b8ff] shadow-[0_0_20px_rgba(66,184,255,0.4)] grid place-items-center">
                  MGDS
                </div>
              </div>

              <p className="mb-2 text-xs font-bold tracking-[.3em] text-[#42b8ff]">
                SYSTEM INITIALIZING
              </p>

              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                WELCOME TO PORTFOLIO
              </h2>
              <h1 className="mt-1 bg-gradient-to-r from-white via-[#7ad8ff] to-[#42b8ff] bg-clip-text text-lg font-black tracking-wider text-transparent sm:text-xl drop-shadow-[0_0_15px_rgba(66,184,255,0.4)]">
                MUCHAMAD GILANG DWI SAPUTRA
              </h1>

              {/* Progress Bar Container */}
              <div className="mt-8 w-full max-w-xs">
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1269ff] to-[#42b8ff] shadow-[0_0_12px_rgba(66,184,255,0.8)]"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-[11px] text-slate-400">
                  <span>LOADING SECURITY PROTOCOLS...</span>
                  <span className="font-bold text-[#42b8ff]">{loadingProgress}%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CYBER MOUSE SPOTLIGHT GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(66, 184, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* SCANLINE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-20"></div>

      {/* BACKGROUND NEON ORBS & GRID */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[40rem] h-[40rem] bg-[#1269ff] rounded-full blur-[160px] opacity-20 -top-44 -right-36"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[32rem] h-[32rem] bg-[#00c8ff] rounded-full blur-[140px] opacity-15 top-[35rem] -left-52"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,184,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(66,184,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      {/* HEADER / NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-[#040914]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 font-bold tracking-tight"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#42b8ff]/40 bg-[#42b8ff]/10 text-[#42b8ff] shadow-[0_0_20px_rgba(66,184,255,0.3)]">
              Mr.
            </span>
            <span className="text-lg tracking-wider">
              GILANG<span className="text-[#42b8ff] animate-pulse"></span>
            </span>
          </motion.a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 xl:flex">
            {[
              ["about", t.nav.about],
              ["experience", t.nav.experience],
              ["projects", t.nav.projects],
              ["publication", t.nav.publication],
              ["skills", t.nav.skills],
              ["credentials", t.nav.credentials],
              ["contact", t.nav.contact],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-[#42b8ff] transition duration-200 hover:drop-shadow-[0_0_8px_rgba(66,184,255,0.8)]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* LANGUAGE SWITCHER */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200 hover:border-[#42b8ff]/50 hover:bg-[#42b8ff]/10 transition shadow-inner"
              title="Change Language"
            >
              <span className={lang === "id" ? "text-[#42b8ff] font-extrabold" : "text-slate-400"}>ID</span>
              <span className="text-slate-600">|</span>
              <span className={lang === "en" ? "text-[#42b8ff] font-extrabold" : "text-slate-400"}>EN</span>
            </motion.button>

            {/* DIRECT EMAIL CONTACT BUTTON */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${PROFILE.email}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[#42b8ff]/40 bg-[#42b8ff]/10 px-4 py-2 text-xs font-bold text-[#42b8ff] hover:bg-[#42b8ff] hover:text-[#040914] transition duration-300 shadow-[0_0_15px_rgba(66,184,255,0.2)]"
            >
              <MailIcon className="w-3.5 h-3.5" />
              {t.ctaConnect}
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-white/10 p-2 text-xl xl:hidden"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/5 bg-[#040914] px-5 py-4 xl:hidden"
            >
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.nav.experience}</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a>
                <a href="#publication" onClick={() => setMobileMenuOpen(false)}>{t.nav.publication}</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t.nav.skills}</a>
                <a href="#credentials" onClick={() => setMobileMenuOpen(false)}>{t.nav.credentials}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#42b8ff]/40 bg-[#42b8ff]/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#42b8ff] shadow-[0_0_15px_rgba(66,184,255,0.25)]">
                <span className="h-2 w-2 rounded-full bg-[#64e4ff] animate-ping"></span>
                {t.badge}
              </div>
              <p className="mb-3 text-xs font-bold tracking-[.25em] text-slate-400">
                {t.heroSubtitle}
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Muchamad Gilang
                <br />
                <span className="bg-gradient-to-r from-white via-[#7ad8ff] to-[#42b8ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(66,184,255,0.3)]">
                  Dwi Saputra, S.Kom.
                </span>
              </h1>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Network Engineering",
                  "Network Security",
                  "Cybersecurity",
                ].map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full border border-[#64e4ff]/30 bg-[#42b8ff]/10 px-3.5 py-1 text-xs font-bold text-[#b9e9ff] shadow-[0_0_10px_rgba(66,184,255,0.15)]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {PROFILE.bio[lang]}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(66, 184, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#42b8ff] px-6 py-3.5 text-sm font-extrabold text-[#040914] transition"
                >
                  {t.ctaExplore} <ExternalLinkIcon className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:border-white/30"
                >
                  <GithubIcon className="w-5 h-5" />
                  {t.ctaGithub}
                </motion.a>
              </div>

              {/* METRICS */}
              <div className="mt-10 grid max-w-2xl grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  [PROFILE.gpa, t.metrics.gpa],
                  ["SINTA 3", t.metrics.research],
                ].map(([val, label], idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.15 }}
                    whileHover={{ y: -5, borderColor: "rgba(66,184,255,0.4)" }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:text-left backdrop-blur-md transition shadow-lg"
                  >
                    <strong className="block text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                      {val}
                    </strong>
                    <span className="mt-1 block text-xs text-slate-400">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* PROFILE CARD WITH 3D TILT HOVER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotateY: 8, rotateX: -5 }}
              className="relative mx-auto w-full max-w-md perspective-1000"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-[#42b8ff]/20 blur-3xl animate-pulse"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#0d192b]/80 p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <img
                  src="/assets/Profile.png"
                  alt={PROFILE.name}
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover cursor-pointer hover:scale-105 transition duration-500"
                  onClick={() =>
                    setPreviewImage({
                      src: "/assets/Profile.png",
                      alt: PROFILE.name,
                    })
                  }
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#040914]/90 p-4 backdrop-blur-xl shadow-2xl">
                  <p className="text-[11px] font-extrabold tracking-widest text-[#42b8ff]">
                    PROFESSIONAL FOCUS
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">
                    Infrastructure · Security · Networking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CLI TERMINAL SECTION */}
        <section id="terminal" className="max-w-7xl mx-auto px-5 py-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d192b]/90 border border-[#20324a] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <div className="bg-[#040914] px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-slate-400 ml-2 font-mono">
                  gilang@cyber-node:~
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                INTERACTIVE TERMINAL v3.5
              </span>
            </div>
            <div className="p-4 font-mono text-sm h-40 overflow-y-auto space-y-2 text-[#64e4ff]">
              {terminalOutput.map((out, idx) => (
                <div key={idx}>{out}</div>
              ))}
            </div>
            <form
              onSubmit={handleTerminalCommand}
              className="border-t border-white/10 flex bg-[#040914] px-4 py-2 font-mono text-sm"
            >
              <span className="text-[#42b8ff] mr-2">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'whoami', 'skills', 'status'..."
                className="bg-transparent text-white focus:outline-none w-full"
              />
            </form>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="border-y border-white/5 bg-white/[.015] py-20"
        >
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                  01 — PROFESSIONAL PROFILE
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                  {t.aboutTitle}
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-slate-300">
                  {t.aboutDesc1}
                </p>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  {t.aboutDesc2}
                </p>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [
                  "EDUCATION",
                  "Bachelor of Informatics",
                  "Universitas Muhammadiyah Malang\n2022 — 2026 · GPA 3.83 / 4.00 (Cum Laude)",
                ],
                [
                  "TECHNICAL STACK",
                  "Infrastructure & Security",
                  "TCP/IP, LAN, Wi-Fi, VLAN, Routing, MikroTik, Linux, Nmap, Wireshark, Python.",
                ],
                [
                  "RESEARCH",
                  "Password Security",
                  "Published research comparing Bcrypt, Argon2, and PBKDF2 for web-based authentication security.",
                ],
              ].map(([tag, title, desc], i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6, borderColor: "rgba(66, 184, 255, 0.4)" }}
                  className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6 backdrop-blur-md transition shadow-lg"
                >
                  <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                    {tag}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400 whitespace-pre-line">
                    {desc}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                02 — EXPERIENCE
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.expTitle}
              </h2>
            </motion.div>

            {EXPERIENCES.map((exp, idx) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142237]/80 to-[#091322]/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-[#42b8ff]/40 transition"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                      {exp.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-base text-[#42b8ff] font-semibold">
                      {exp.company}
                    </p>
                    <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                      {exp.description[lang]}
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-[11px] font-extrabold text-slate-500 tracking-wider mb-3">
                        KEY CONTRIBUTIONS
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.contributions[lang].map((c, i) => (
                          <li key={i}>— {c}</li>
                        ))}
                      </ul>
                    </div>

                    {exp.tags && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.tags.map((t, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-[#64e4ff]/30 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GALLERY IMAGES */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {exp.images.map((img, i) => (
                      <motion.img
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        src={img.src}
                        alt={img.alt}
                        className="h-48 w-full rounded-2xl object-cover cursor-zoom-in transition duration-300 border border-white/10 shadow-lg"
                        onClick={() => setPreviewImage(img)}
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="border-y border-white/5 bg-white/[.015] py-20"
        >
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                03 — FEATURED PROJECTS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.projTitle}
              </h2>
              <p className="mt-3 text-slate-400 max-w-3xl text-sm leading-relaxed">
                {t.projDesc}
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {PROJECTS.map((proj, idx) => (
                <motion.article
                  key={proj.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d192b]/70 backdrop-blur-md hover:border-[#42b8ff]/50 hover:shadow-[0_10px_35px_rgba(66,184,255,0.25)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="h-60 w-full object-cover cursor-pointer transition duration-700 group-hover:scale-110"
                      onClick={() =>
                        setPreviewImage({
                          src: proj.coverImage,
                          alt: proj.title,
                        })
                      }
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-[#42b8ff]/40 bg-[#040914]/80 px-3 py-1 text-xs font-bold text-[#42b8ff] backdrop-blur">
                      {proj.role}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {proj.description[lang]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATION SECTION */}
        <section id="publication" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                04 — RESEARCH & PUBLICATION
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.pubTitle}
              </h2>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142237]/80 to-[#091322]/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-[#42b8ff]/40 transition"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_.4fr]">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                    SINTA 3 · PUBLISHED RESEARCH
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl leading-tight">
                    Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG
                    Berbasis Web
                  </h3>
                  <p className="mt-3 text-slate-300 font-medium text-sm">
                    Jurnal Informatika: Jurnal Pengembangan IT · Vol. 11, No. 2
                  </p>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {t.pubDetails}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Password Hashing",
                      "Authentication Security",
                      "Web Security",
                      "SINTA 3",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[#64e4ff]/30 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#42b8ff]/30 bg-[#42b8ff]/5 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold tracking-widest text-slate-400">
                      PUBLICATION DETAILS
                    </p>
                    <p className="mt-4 text-2xl font-black text-white">
                      DOI LINK
                    </p>
                    <a
                      href="https://doi.org/10.30591/jpit.v11i2.10280"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 break-all text-xs font-semibold text-[#42b8ff] underline underline-offset-4 hover:text-[#64e4ff]"
                    >
                      10.30591/jpit.v11i2.10280 <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="mt-6 text-xs text-slate-400">
                    Author: Muchamad Gilang Dwi Saputra
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* TECHNICAL PROJECTS */}
        <section
          id="technical-projects"
          className="border-y border-white/5 bg-white/[.015] py-20"
        >
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                05 — TECHNICAL PROJECTS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.techProjTitle}
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TECHNICAL_PROJECTS.map((tp, i) => (
                <motion.article
                  key={tp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, borderColor: "rgba(66, 184, 255, 0.4)" }}
                  className="rounded-3xl border border-white/10 bg-[#0d192b]/70 p-6 flex flex-col justify-between backdrop-blur-md transition shadow-lg"
                >
                  <div>
                    <p className="text-xs font-bold text-[#42b8ff]">{tp.id}</p>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      {tp.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {tp.description[lang]}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tp.tags.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                06 — SKILLS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.skillsTitle}
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS_CATEGORIES.map((sc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, borderColor: "rgba(66, 184, 255, 0.4)" }}
                  className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6 backdrop-blur-md transition shadow-lg"
                >
                  <h3 className="text-xl font-bold text-white">{sc.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {sc.skills}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS SECTION WITH CATEGORY FILTER */}
        <section
          id="credentials"
          className="border-y border-white/5 bg-white/[.015] py-20"
        >
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                07 — CREDENTIALS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                {t.credTitle}
              </h2>
            </motion.div>

            {/* CATEGORY FILTER TABS */}
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition duration-300 border ${
                    activeCategory === cat
                      ? "border-[#42b8ff] bg-[#42b8ff] text-[#040914] shadow-[0_0_15px_rgba(66,184,255,0.4)]"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  {cat === "All" ? (lang === "id" ? "Semua Kategori" : "All Categories") : cat}
                </button>
              ))}
            </div>

            <motion.div 
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {filteredCertificates.map((cert) => (
                  <motion.article
                    layout
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -8 }}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d192b]/70 backdrop-blur-md hover:border-[#42b8ff]/50 transition duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="overflow-hidden bg-white/5 p-2">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="h-52 w-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
                          onClick={() =>
                            setPreviewImage({ src: cert.image, alt: cert.name })
                          }
                        />
                      </div>
                      <div className="p-5">
                        <span className="inline-block rounded-md border border-[#42b8ff]/30 bg-[#42b8ff]/10 px-2 py-0.5 text-[10px] font-bold text-[#42b8ff] mb-2">
                          {cert.category}
                        </span>
                        <p className="text-[11px] font-bold tracking-widest text-slate-400">
                          {cert.issuer}
                        </p>
                        <h3 className="mt-1 text-base font-bold text-white">
                          {cert.name}
                        </h3>
                        <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                          {cert.description[lang]}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION WITH BRAND ICONS */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#42b8ff]/30 bg-gradient-to-br from-[#0d192b] to-[#091423] p-8 sm:p-14 shadow-2xl grid gap-8 lg:grid-cols-[1.2fr_.8fr] backdrop-blur-xl"
            >
              <div>
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">
                  08 — CONTACT
                </p>
                <h2 className="mt-4 text-3xl font-black sm:text-5xl leading-tight">
                  {t.contactTitle}
                </h2>
                <p className="mt-4 text-slate-400 text-sm sm:text-base">
                  {t.contactDesc}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Email",
                    href: `mailto:${PROFILE.email}`,
                    icon: <MailIcon className="w-5 h-5 text-[#42b8ff]" />,
                  },
                  {
                    label: "LinkedIn",
                    href: PROFILE.linkedin,
                    icon: <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />,
                  },
                  {
                    label: "GitHub",
                    href: PROFILE.github,
                    icon: <GithubIcon className="w-5 h-5 text-white" />,
                  },
                  {
                    label: "Instagram",
                    href: PROFILE.instagram,
                    icon: <InstagramIcon className="w-5 h-5 text-[#E4405F]" />,
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.05, borderColor: "#42b8ff" }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:bg-[#42b8ff]/10 hover:text-[#64e4ff] transition shadow-md group"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-[#42b8ff] transition" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        Muchamad Gilang Dwi Saputra. All rights reserved.
      </footer>

      {/* ANIMATED LIGHTBOX MODAL */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white hover:bg-white/20 transition"
              onClick={() => setPreviewImage(null)}
            >
              ✕
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}