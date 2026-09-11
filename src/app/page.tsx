'use client';

import React, { useState } from 'react';
import { PROFILE, PROJECTS, CERTIFICATES } from '@/data/portfolio';
import type { Project, Certificate } from '@/data/portfolio';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'Web Development' | 'Network & Security' | 'Scientific Publication'>('all');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System initialized. Type 'help' or 'skills' to explore."
  ]);

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter((p: Project) => p.category === activeTab);

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let res = "";

    if (cmd === 'help') {
      res = "Available commands: whoami, skills, publication, contact, clear";
    } else if (cmd === 'whoami') {
      res = `${PROFILE.name} - ${PROFILE.role}`;
    } else if (cmd === 'skills') {
      res = "Network Engineering (MikroTik, Cisco), Cybersecurity (Wireshark, Nmap, Web Security), Python, PHP, MySQL, Linux.";
    } else if (cmd === 'publication') {
      res = "Journal SINTA 3: 'Perbandingan Bcrypt, Argon2, dan PBKDF2 pada Keamanan SIMPEG Berbasis Web' (DOI: 10.30591/jpit.v11i2.10280)";
    } else if (cmd === 'contact') {
      res = `Email: ${PROFILE.email} | Phone: ${PROFILE.phone}`;
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else {
      res = `Command not found: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalOutput(prev => [...prev, `> ${terminalInput}`, res]);
    setTerminalInput('');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GILANG.DEV
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#terminal" className="hover:text-cyan-400 transition">CLI Terminal</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-cyan-400 transition">Certificates</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wide">
            CYBERSECURITY & NETWORK ENGINEER
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-cyan-400">{PROFILE.name}</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            {PROFILE.bio}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={`mailto:${PROFILE.email}`} className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition">
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-slate-700 rounded-lg hover:border-slate-500 transition">
              View Works
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TERMINAL SECTION */}
      <section id="terminal" className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-slate-400 ml-2 font-mono">gilang@cyber-node:~</span>
          </div>
          <div className="p-4 font-mono text-sm h-48 overflow-y-auto space-y-2 text-cyan-300">
            {terminalOutput.map((out: string, idx: number) => (
              <div key={idx}>{out}</div>
            ))}
          </div>
          <form onSubmit={handleTerminalCommand} className="border-t border-slate-800 flex bg-slate-950 px-4 py-2 font-mono text-sm">
            <span className="text-cyan-400 mr-2">&gt;</span>
            <input 
              type="text" 
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type 'help', 'whoami', 'skills'..."
              className="bg-transparent text-white focus:outline-none w-full"
            />
          </form>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects & Research</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['all', 'Web Development', 'Network & Security', 'Scientific Publication'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs md:text-sm rounded-lg border transition ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400' 
                  : 'border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {tab === 'all' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl overflow-hidden transition group">
              <div className="p-6 space-y-4">
                <span className="text-xs font-semibold text-cyan-400">{project.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{project.title}</h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech: string, i: number) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.externalLink && (
                  <div className="pt-2">
                    <a href={project.externalLink} target="_blank" rel="noreferrer" className="text-xs text-cyan-400 underline font-semibold">
                      Read DOI / Publication &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-8 text-white">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATES.map((cert: Certificate) => (
            <div key={cert.id} className="p-5 bg-slate-900/50 border border-slate-800/80 rounded-xl hover:bg-slate-900 transition">
              <div className="text-xs text-cyan-400 font-semibold mb-1">{cert.issuer}</div>
              <h4 className="font-bold text-white text-base mb-2">{cert.name}</h4>
              <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded">
                {cert.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        © 2026 {PROFILE.name}. All rights reserved. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}