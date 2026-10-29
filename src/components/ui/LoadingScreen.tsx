"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Durasi tampilan loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Mencegah mismatch SSR dengan menunda render AnimatePresence sampai mounted di client
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ef4444]" />
            <p className="text-xs font-bold tracking-[0.3em] text-slate-400 animate-pulse">
              MEMUAT PORTOFOLIO...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}