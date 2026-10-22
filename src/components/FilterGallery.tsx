import React, { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Expand, Info } from 'lucide-react';
import { Lightbox } from './Lightbox';
import type { GalleryItem } from '../types/content';

type FilterGalleryProps = {
  items: GalleryItem[];
  label: string;
  tone?: 'light' | 'dark';
  note?: string;
};

export function FilterGallery({ items, label, tone = 'light', note }: FilterGalleryProps) {
  const reduce = useReducedMotion();
  const dark = tone === 'dark';
  const categories = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = useState('All');
  const [open, setOpen] = useState<number | null>(null);
  const visible = active === 'All' ? items : items.filter((i) => i.category === active);
  const close = useCallback(() => setOpen(null), []);

  return (
    <div>
      <div role="group" aria-label={`Filter ${label}`} className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const selected = active === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(c)}
              className={`h-10 rounded-full px-4 text-[13.5px] font-semibold transition-colors ${
              selected ?
              'bg-gold-600 text-white' :
              dark ?
              'border border-white/20 text-white/80 hover:border-white/50 hover:text-white' :
              'border border-cream-300 bg-white text-navy/80 hover:border-gold-400 hover:text-navy'}`
              }>
              
              {c}
            </button>);

        })}
      </div>

      <motion.ul layout={!reduce} className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item, i) =>
          <motion.li
            key={item.title}
            layout={!reduce}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: reduce ? 0 : 0.25 }}>
            
              <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View larger image: ${item.title}`}
              className="group block w-full rounded-2xl text-left">
              
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200">
                  <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <p className={`mt-3.5 font-display text-[16.5px] font-semibold ${dark ? 'text-white' : 'text-navy'}`}>{item.title}</p>
                <p className={`mt-0.5 text-[13.5px] ${dark ? 'text-white/60' : 'text-ink-muted'}`}>{item.category}</p>
              </button>
            </motion.li>
          )}
        </AnimatePresence>
      </motion.ul>

      {note &&
      <p className={`mt-8 flex items-start gap-2 text-[13px] ${dark ? 'text-white/55' : 'text-ink-soft'}`}>
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {note}
        </p>
      }

      <Lightbox items={visible} index={open} onClose={close} onNavigate={setOpen} />
    </div>);

}