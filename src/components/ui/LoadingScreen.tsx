"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Helper hook idiomatik React 18+ untuk mendeteksi mounted client tanpa cascading render
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function LoadingScreen() {
  const isClient = useIsClient();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sembunyikan loading screen setelah 1.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Jangan render jika belum di client atau proses loading sudah selesai
  if (!isClient || !isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
      >
        {/* Wrapper Foto dengan Animasi Ring Berputar */}
        <div className="relative mb-6 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute -inset-2.5 rounded-full border-2 border-transparent border-t-[#ef4444] border-r-[#ef4444]/40"
          />

          {/* Foto Profil Lingkaran */}
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 shadow-2xl bg-black">
            <Image
              src="/assets/Profile.png" // Ganti sesuai path foto di folder public Anda
              alt="Muchamad Gilang Dwi Saputra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Identitas Ringkas */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-bold tracking-wide text-white">
            Welcome To Portofolio
          </h3>
          <p className="mt-1 text-xs font-bold tracking-widest text-[#ef4444] uppercase">
            Muchamad Gilang Dwi Saputra
          </p>
        </motion.div>

        {/* Progress Bar Animation */}
        <div className="mt-6 h-1 w-36 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full bg-[#ef4444]"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}