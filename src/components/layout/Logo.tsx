import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
};

/** Temporary text-and-symbol lockup — replace with the official logo file when supplied. */
export function Logo({ tone = 'dark' }: LogoProps) {
  const name = tone === 'dark' ? 'text-navy' : 'text-white';
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className="flex shrink-0 items-center gap-2.5 rounded-md">
      
      <svg viewBox="0 0 40 40" className="h-10 w-10 text-gold-500" aria-hidden="true">
        <path d="M4 18.5 20 5l16 13.5V35H4Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
        <path d="M11 35V24.5a9 9 0 0 1 18 0V35" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M16.5 35v-7.5a3.5 3.5 0 0 1 7 0V35" fill="none" stroke="currentColor" strokeWidth="2.2" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[19px] font-bold tracking-[-0.01em] ${name}`}>
          {company.shortName}
        </span>
        <span className={`mt-1 block text-[9.5px] font-bold tracking-[0.1em] ${tone === 'dark' ? 'text-navy/80' : 'text-white/70'}`}>
          {company.subName}
        </span>
      </span>
    </Link>);

}