import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../types/content';

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null && items[index] !== undefined;

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, items.length, onClose, onNavigate]);

  const item = index !== null ? items[index] : undefined;

  return (
    <AnimatePresence>
      {isOpen && item && index !== null &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 sm:p-8"
        onClick={onClose}>
        
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={item.image} alt={item.imageAlt} className="max-h-[75vh] w-full rounded-2xl object-contain" />
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="font-display text-lg font-semibold">{item.title}</p>
                <p className="text-[13.5px] text-white/65">
                  {item.category} · Representative image
                </p>
              </div>
              <div className="flex gap-2">
                <LightboxButton label="Previous image" onClick={() => onNavigate((index - 1 + items.length) % items.length)}>
                  <ChevronLeft className="h-5 w-5" />
                </LightboxButton>
                <LightboxButton label="Next image" onClick={() => onNavigate((index + 1) % items.length)}>
                  <ChevronRight className="h-5 w-5" />
                </LightboxButton>
              </div>
            </div>
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute -top-3 right-0 grid h-11 w-11 -translate-y-full place-items-center rounded-full bg-white text-navy sm:-right-3 sm:top-0 sm:translate-x-full sm:translate-y-0">
            
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}

function LightboxButton({ label, onClick, children }: {label: string;onClick: () => void;children: React.ReactNode;}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white hover:bg-white/10">
      
      {children}
    </button>);

}