"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

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

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] px-5 font-mono"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,28,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,28,28,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative z-10 flex max-w-lg flex-col items-center text-center">
            <div className="relative mb-8 grid h-20 w-20 place-items-center">
              <div className="absolute inset-0 rounded-full border-2 border-t-[#8b1c1c] border-r-transparent border-b-[#ef4444] border-l-transparent animate-spin"></div>
              <div className="h-10 w-10 rounded-xl border border-[#8b1c1c]/50 bg-[#8b1c1c]/10 text-xs font-bold text-[#ef4444] shadow-[0_0_20px_rgba(139,28,28,0.4)] grid place-items-center">MG</div>
            </div>
            <p className="mb-2 text-xs font-bold tracking-[.3em] text-[#ef4444]">INISIALISASI SISTEM</p>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">MEMUAT PORTOFOLIO</h2>
            <h1 className="mt-1 bg-gradient-to-r from-white via-[#fca5a5] to-[#ef4444] bg-clip-text text-lg font-black tracking-wider text-transparent sm:text-xl drop-shadow-[0_0_15px_rgba(139,28,28,0.4)]">MUCHAMAD GILANG DWI SAPUTRA</h1>
            <div className="mt-8 w-full max-w-xs">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full bg-gradient-to-r from-[#4a0404] to-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.8)]" style={{ width: `${loadingProgress}%` }} />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-slate-400">
                <span>MEMUAT PROTOKOL...</span>
                <span className="font-bold text-[#ef4444]">{loadingProgress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}