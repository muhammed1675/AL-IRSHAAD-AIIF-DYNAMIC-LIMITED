import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BoxIcon } from "lucide-react";
type HeroLine = {
  text: string;
  accent?: boolean;
};
type CurvedHeroProps = {
  eyebrow: string;
  lines: HeroLine[];
  intro: string;
  actions: React.ReactNode;
  image: string;
  imageAlt: string;
  /** CSS object-position used to keep the main subject clear of the curve. */
  imagePosition?: string;
  caption?: {
    icon: BoxIcon;
    title: string;
    text: string;
  };
  note?: React.ReactNode;
};

/**
 * The signature AL-IRSHAAD hero. The photograph is clipped by the shared
 * #al-hero-curve silhouette (desktop) / #al-hero-curve-mobile (stacked).
 */
export function CurvedHero({
  eyebrow,
  lines,
  intro,
  actions,
  image,
  imageAlt,
  imagePosition = '50% 50%',
  caption,
  note
}: CurvedHeroProps) {
  const reduce = useReducedMotion();
  const CaptionIcon = caption?.icon;
  return <section aria-labelledby="page-hero-title" className="px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[28px] bg-cream lg:rounded-[36px]">
        <motion.div initial={reduce ? false : {
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }} className="relative z-10 flex flex-col justify-center px-6 pb-10 pt-12 sm:px-10 sm:pt-14 lg:min-h-[600px] lg:w-[46%] lg:py-16 lg:pl-14 lg:pr-4 xl:min-h-[640px] xl:pl-16">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-hero-title" className="mt-5 text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.025em] sm:text-[3.25rem] lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.6rem]">
            {lines.map((line) => <span key={line.text} className={`block ${line.accent ? 'text-gold-600' : 'text-navy'}`}>
                {line.text}
              </span>)}
          </h1>
          <p className="mt-6 max-w-[30rem] text-[15.5px] leading-relaxed text-ink-muted sm:text-[16px]">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          {note && <div className="mt-8 max-w-[28rem] text-[13.5px] leading-relaxed text-ink-muted">{note}</div>}
        </motion.div>

        <div className="relative h-[300px] sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
          <motion.img src={image} alt={imageAlt} width={1200} height={900} initial={reduce ? false : {
          opacity: 0,
          scale: 1.03
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }} className="hero-clip absolute inset-0 h-full w-full object-cover" style={{
          objectPosition: imagePosition
        }} />
          {caption && CaptionIcon && <div className="absolute bottom-5 right-5 z-10 hidden max-w-[300px] items-center gap-3.5 rounded-2xl bg-white p-3.5 pr-5 shadow-lift sm:flex lg:bottom-7 lg:right-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500 text-white">
                <CaptionIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-snug">
                <span className="block font-display text-[15px] font-semibold text-navy">{caption.title}</span>
                <span className="block text-[13px] text-ink-muted">{caption.text}</span>
              </span>
            </div>}
        </div>
      </div>
    </section>;
}