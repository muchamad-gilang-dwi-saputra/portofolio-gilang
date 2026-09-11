'use client';

import React, { useState } from 'react';
import { PROFILE, EXPERIENCES, PROJECTS, TECHNICAL_PROJECTS, CERTIFICATES, SKILLS_CATEGORIES } from '@/data/portfolio';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'Web Development' | 'Technical Projects'>('all');
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  // CLI State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System v2.6 initialized. Type 'help' or 'whoami' to explore."
  ]);

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = "";

    if (cmd === 'help') {
      res = "Available commands: whoami, skills, publication, gpa, contact, clear";
    } else if (cmd === 'whoami') {
      res = `${PROFILE.name} — ${PROFILE.role}`;
    } else if (cmd === 'gpa') {
      res = `GPA: ${PROFILE.gpa} (Universitas Muhammadiyah Malang)`;
    } else if (cmd === 'skills') {
      res = "Network Engineering (MikroTik, Cisco), Cybersecurity (Wireshark, Nmap, DVWA), Python, PHP, MySQL, Linux.";
    } else if (cmd === 'publication') {
      res = "SINTA 3 Journal: 'Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG Berbasis Web' (DOI: 10.30591/jpit.v11i2.10280)";
    } else if (cmd === 'contact') {
      res = `Email: ${PROFILE.email}`;
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else {
      res = `Command not found: '${cmd}'. Type 'help' for commands.`;
    }

    setTerminalOutput(prev => [...prev, `> ${terminalInput}`, res]);
    setTerminalInput('');
  };

  return (
    <div className="min-h-screen bg-[#08111f] text-slate-100 font-sans selection:bg-[#42b8ff] selection:text-[#08111f] relative overflow-x-hidden">
      
      {/* BACKGROUND ORBS & GRID */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute w-[34rem] h-[34rem] bg-[#1269ff] rounded-full blur-[120px] opacity-15 -top-40 -right-32 animate-pulse"></div>
        <div className="absolute w-[26rem] h-[26rem] bg-[#00c8ff] rounded-full blur-[100px] opacity-15 top-[30rem] -left-48"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,184,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,184,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]"></div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-[#08111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#42b8ff]/30 bg-[#42b8ff]/10 text-[#42b8ff]">
              Mr.
            </span>
            <span className="text-lg">GILANG<span className="text-[#42b8ff]">.DEV</span></span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 xl:flex">
            <a href="#about" className="hover:text-[#42b8ff] transition">About</a>
            <a href="#experience" className="hover:text-[#42b8ff] transition">Experience</a>
            <a href="#projects" className="hover:text-[#42b8ff] transition">Projects</a>
            <a href="#publication" className="hover:text-[#42b8ff] transition">Publication</a>
            <a href="#skills" className="hover:text-[#42b8ff] transition">Skills</a>
            <a href="#credentials" className="hover:text-[#42b8ff] transition">Credentials</a>
            <a href="#contact" className="hover:text-[#42b8ff] transition">Contact</a>
          </nav>

          <a 
            href={`mailto:${PROFILE.email}`} 
            className="hidden rounded-xl border border-[#42b8ff]/30 bg-[#42b8ff]/10 px-4 py-2 text-sm font-semibold text-[#42b8ff] transition hover:bg-[#42b8ff] hover:text-[#08111f] sm:block"
          >
            Let's Connect
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 p-2 text-xl xl:hidden"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-white/5 bg-[#08111f] px-5 py-4 xl:hidden">
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#publication" onClick={() => setMobileMenuOpen(false)}>Publication</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#credentials" onClick={() => setMobileMenuOpen(false)}>Credentials</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#42b8ff]/20 bg-[#42b8ff]/5 px-3 py-1.5 text-xs font-bold tracking-[.14em] text-[#42b8ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#64e4ff] animate-pulse"></span>
                OPEN FOR PROFESSIONAL OPPORTUNITIES
              </div>
              <p className="mb-3 text-sm font-semibold tracking-[.2em] text-slate-400">PROFESSIONAL PORTFOLIO · 2026</p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Muchamad Gilang<br />
                <span className="bg-gradient-to-r from-white via-[#7ad8ff] to-[#42b8ff] bg-clip-text text-transparent">
                  Dwi Saputra, S.Kom.
                </span>
              </h1>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#64e4ff]/20 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]">Network Engineering</span>
                <span className="rounded-full border border-[#64e4ff]/20 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]">Network Security</span>
                <span className="rounded-full border border-[#64e4ff]/20 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]">Cybersecurity</span>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {PROFILE.bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#experience" className="inline-flex items-center gap-2 rounded-xl bg-[#42b8ff] px-6 py-3 text-sm font-extrabold text-[#08111f] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(66,184,255,0.3)]">
                  Explore Experience ↗
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10">
                  View GitHub
                </a>
              </div>

              {/* METRICS */}
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:text-left">
                  <strong className="block text-xl font-bold text-white">{PROFILE.gpa}</strong>
                  <span className="mt-1 block text-xs text-slate-400">GPA / 4.00</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:text-left">
                  <strong className="block text-xl font-bold text-white">3</strong>
                  <span className="mt-1 block text-xs text-slate-400">Integrated Web Apps</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:text-left">
                  <strong className="block text-xl font-bold text-white">SINTA 3</strong>
                  <span className="mt-1 block text-xs text-slate-400">Research Publication</span>
                </div>
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#42b8ff]/10 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d192b]/70 p-3 shadow-[0_0_0_1px_rgba(66,184,255,.15),0_24px_80px_rgba(0,0,0,.35)]">
                <img 
                  src="/assets/profile.jpg" 
                  alt={PROFILE.name} 
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover cursor-pointer hover:scale-[1.02] transition duration-300"
                  onClick={() => setPreviewImage({ src: "/assets/profile.jpg", alt: PROFILE.name })}
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#08111f]/80 p-4 backdrop-blur-xl">
                  <p className="text-xs font-bold tracking-widest text-[#42b8ff]">PROFESSIONAL FOCUS</p>
                  <p className="mt-1 text-sm font-semibold">Infrastructure · Security · Networking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLI TERMINAL INTERACTIVE */}
        <section id="terminal" className="max-w-7xl mx-auto px-5 py-8">
          <div className="bg-[#0d192b] border border-[#20324a] rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#08111f] px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-400 ml-2 font-mono">gilang@cyber-node:~</span>
            </div>
            <div className="p-4 font-mono text-sm h-40 overflow-y-auto space-y-2 text-[#64e4ff]">
              {terminalOutput.map((out, idx) => (
                <div key={idx}>{out}</div>
              ))}
            </div>
            <form onSubmit={handleTerminalCommand} className="border-t border-white/10 flex bg-[#08111f] px-4 py-2 font-mono text-sm">
              <span className="text-[#42b8ff] mr-2">&gt;</span>
              <input 
                type="text" 
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'whoami', 'skills', 'gpa'..."
                className="bg-transparent text-white focus:outline-none w-full"
              />
            </form>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="border-y border-white/5 bg-white/[.02] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">01 — PROFESSIONAL PROFILE</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Practical IT experience supported by technical depth.</h2>
              </div>
              <div>
                <p className="text-xl leading-relaxed text-slate-300">
                  I focus on network infrastructure, network security, cybersecurity, and practical information systems. My work combines hands-on troubleshooting, web development, role-based access control, Linux, Python, and controlled security testing.
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  I have developed internal web applications, supported operational IT environments, worked with LAN/Wi-Fi infrastructure, MikroTik and Huawei devices, and completed technical security projects involving network analysis and web application testing.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6">
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">EDUCATION</p>
                <h3 className="mt-3 text-xl font-bold">Bachelor of Informatics</h3>
                <p className="mt-2 text-sm text-slate-400">Universitas Muhammadiyah Malang<br />2022 — 2026 · GPA 3.83 / 4.00</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6">
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">TECHNICAL STACK</p>
                <h3 className="mt-3 text-xl font-bold">Infrastructure & Security</h3>
                <p className="mt-2 text-sm text-slate-400">TCP/IP, LAN, Wi-Fi, VLAN, Routing, MikroTik, Linux, Nmap, Wireshark, Python.</p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6">
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">RESEARCH</p>
                <h3 className="mt-3 text-xl font-bold">Password Security</h3>
                <p className="mt-2 text-sm text-slate-400">Published research comparing Bcrypt, Argon2, and PBKDF2 for web-based authentication security.</p>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">02 — EXPERIENCE</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Professional, technical, and leadership experience.</h2>
            </div>

            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142237]/90 to-[#091322]/80 p-6 sm:p-10 shadow-2xl">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#42b8ff]">{exp.period}</p>
                    <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{exp.role}</h3>
                    <p className="mt-2 text-lg text-[#42b8ff] font-semibold">{exp.company}</p>
                    <p className="mt-4 text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-xs font-bold text-slate-500 tracking-wider mb-3">KEY CONTRIBUTIONS</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {exp.contributions.map((c, i) => (
                          <li key={i}>— {c}</li>
                        ))}
                      </ul>
                    </div>

                    {exp.tags && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.tags.map((t, i) => (
                          <span key={i} className="rounded-full border border-[#64e4ff]/20 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GALLERY IMAGES */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {exp.images.map((img, i) => (
                      <img 
                        key={i} 
                        src={img.src} 
                        alt={img.alt} 
                        className="h-48 w-full rounded-2xl object-cover cursor-zoom-in hover:scale-105 transition duration-300 border border-white/10"
                        onClick={() => setPreviewImage(img)}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="border-y border-white/5 bg-white/[.02] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">03 — FEATURED PROJECTS</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Role-Based Employee Management System</h2>
              <p className="mt-3 text-slate-400 max-w-3xl">
                An integrated internal web system built with PHP and MySQL, designed around differentiated organizational roles, access control, approval workflows, and connected data management.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {PROJECTS.map((proj) => (
                <article key={proj.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d192b]/70 transition duration-500 hover:-translate-y-2 hover:border-[#42b8ff]/40">
                  <div className="relative overflow-hidden">
                    <img 
                      src={proj.coverImage} 
                      alt={proj.title} 
                      className="h-60 w-full object-cover cursor-pointer transition duration-700 group-hover:scale-105"
                      onClick={() => setPreviewImage({ src: proj.coverImage, alt: proj.title })}
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-[#42b8ff]/30 bg-[#08111f]/80 px-3 py-1 text-xs font-bold text-[#42b8ff] backdrop-blur">
                      {proj.role}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{proj.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.techStack.map((tech, i) => (
                        <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATION SECTION */}
        <section id="publication" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">04 — RESEARCH & PUBLICATION</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Academic work connected to application security.</h2>
            </div>

            <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142237]/90 to-[#091322]/80 p-8 sm:p-10 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_.4fr]">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#42b8ff]">SINTA 3 · 2026</p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl leading-tight">
                    Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG Berbasis Web
                  </h3>
                  <p className="mt-3 text-slate-300 font-medium">Jurnal Informatika: Jurnal Pengembangan IT · Vol. 11, No. 2</p>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    Single-author research comparing Bcrypt, Argon2, and PBKDF2 in the context of authentication security and password hashing for a web-based employee information system.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Password Hashing", "Authentication Security", "Web Security", "SINTA 3"].map((tag, i) => (
                      <span key={i} className="rounded-full border border-[#64e4ff]/20 bg-[#42b8ff]/10 px-3 py-1 text-xs font-bold text-[#b9e9ff]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#42b8ff]/20 bg-[#42b8ff]/5 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400">PUBLICATION DETAILS</p>
                    <p className="mt-4 text-2xl font-bold text-white">DOI LINK</p>
                    <a 
                      href="https://doi.org/10.30591/jpit.v11i2.10280" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-2 inline-block break-all text-xs font-semibold text-[#42b8ff] underline underline-offset-4 hover:text-[#64e4ff]"
                    >
                      10.30591/jpit.v11i2.10280 ↗
                    </a>
                  </div>
                  <p className="mt-6 text-xs text-slate-400">Author: Muchamad Gilang Dwi Saputra</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* TECHNICAL PROJECTS */}
        <section id="technical-projects" className="border-y border-white/5 bg-white/[.02] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">05 — TECHNICAL PROJECTS</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Security & networking practice in controlled environments.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TECHNICAL_PROJECTS.map((tp) => (
                <article key={tp.id} className="rounded-3xl border border-white/10 bg-[#0d192b]/70 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#42b8ff]">{tp.id}</p>
                    <h3 className="mt-3 text-lg font-bold text-white">{tp.title}</h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">{tp.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tp.tags.map((t, i) => (
                      <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">06 — SKILLS</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">A focused technical toolkit.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS_CATEGORIES.map((sc, i) => (
                <div key={i} className="rounded-3xl border border-white/10 bg-[#0d192b]/60 p-6">
                  <h3 className="text-xl font-bold text-white">{sc.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{sc.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS SECTION */}
        <section id="credentials" className="border-y border-white/5 bg-white/[.02] py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12">
              <p className="text-xs font-bold tracking-widest text-[#42b8ff]">07 — CREDENTIALS</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Documented learning and organizational activity.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {CERTIFICATES.map((cert) => (
                <article key={cert.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d192b]/70 hover:border-[#42b8ff]/40 transition duration-300">
                  <div className="overflow-hidden bg-white/5 p-2">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="h-64 w-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
                      onClick={() => setPreviewImage({ src: cert.image, alt: cert.name })}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-widest text-[#42b8ff]">{cert.issuer}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{cert.name}</h3>
                    <p className="mt-2 text-xs text-slate-400">{cert.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="rounded-3xl border border-[#42b8ff]/20 bg-gradient-to-br from-[#0d192b] to-[#091423] p-8 sm:p-14 shadow-2xl grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#42b8ff]">08 — CONTACT</p>
                <h2 className="mt-4 text-3xl font-black sm:text-5xl leading-tight">Let's build a professional connection.</h2>
                <p className="mt-4 text-slate-400 text-sm sm:text-base">
                  Open for professional networking, technical collaboration, cybersecurity projects, and career opportunities.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${PROFILE.email}`} className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:border-[#42b8ff] hover:bg-[#42b8ff]/10 hover:text-[#64e4ff] transition">
                  Email <span className="text-[#42b8ff]">↗</span>
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:border-[#42b8ff] hover:bg-[#42b8ff]/10 hover:text-[#64e4ff] transition">
                  LinkedIn <span className="text-[#42b8ff]">↗</span>
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:border-[#42b8ff] hover:bg-[#42b8ff]/10 hover:text-[#64e4ff] transition">
                  GitHub <span className="text-[#42b8ff]">↗</span>
                </a>
                <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-bold text-slate-200 hover:border-[#42b8ff] hover:bg-[#42b8ff]/10 hover:text-[#64e4ff] transition">
                  Instagram <span className="text-[#42b8ff]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        © 2026 {PROFILE.name}. All rights reserved. Built with Next.js & Tailwind CSS.
      </footer>

      {/* LIGHTBOX MODAL IMAGE VIEWER */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
        >
          <button 
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white hover:bg-white/20"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>
          <img 
            src={previewImage.src} 
            alt={previewImage.alt} 
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}