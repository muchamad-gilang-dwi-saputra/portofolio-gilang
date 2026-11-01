"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  image: { src: string; alt: string; title?: string; desc?: string; link?: string } | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (image) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [image]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-5 backdrop-blur-lg overflow-y-auto"
          onClick={onClose}
        >
          <button 
            className="fixed right-5 top-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-xl text-white hover:bg-[#ef4444] transition shadow-lg" 
            onClick={onClose}
            title="Tutup (Esc)"
          >
            ✕
          </button>

          <div 
            className="relative flex flex-col items-center w-full max-w-5xl my-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Gambar Besar */}
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={image.src} 
              alt={image.alt} 
              className="w-full max-h-[65vh] rounded-2xl object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0a0a0a]" 
            />

            {/* Panel Penjelasan Detail (Hanya muncul jika ada judul/deskripsi) */}
            {(image.title || image.desc) && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.1 }}
                className="mt-6 w-full bg-[#111111]/90 border border-white/15 p-6 sm:p-8 rounded-3xl backdrop-blur-md text-left"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  
                  {image.link && (
                    <a 
                      href={image.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="shrink-0 flex items-center justify-center gap-2 text-sm font-bold text-slate-900 bg-white px-6 py-3 rounded-full hover:bg-[#ef4444] hover:text-white transition-all shadow-lg"
                    >
                      Buka Repositori GitHub
                    </a>
                  )}
                </div>
                <p className="text-base text-slate-300 leading-relaxed max-w-4xl">{image.desc}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}