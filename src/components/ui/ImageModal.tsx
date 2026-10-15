"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={onClose}
        >
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white hover:bg-white/20 transition" onClick={onClose}>
            ✕
          </button>
          <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} src={image.src} alt={image.alt} className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl border border-white/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}