import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
};

/**
 * Header (dark): compact mark + live text, so the name stays readable at small sizes.
 * Footer (light): the full logo on a white plate, because the logo's dark green text needs a light background.
 */
export function Logo({ tone = 'dark' }: LogoProps) {
  if (tone === 'light') {
    return (
      <Link to="/" aria-label={`${company.name} — home`} className="inline-flex shrink-0 rounded-md">
        <span className="inline-flex rounded-2xl bg-white p-3 shadow-soft">
          <img src="/logo.webp" alt={`${company.name} logo`} width={560} height={466} className="h-20 w-auto object-contain" />
        </span>
      </Link>
    );
  }

  return (
    <Link to="/" aria-label={`${company.name} — home`} className="inline-flex shrink-0 items-center gap-3 rounded-md">
      <img src="/logo-mark.webp" alt="" width={360} height={225} className="h-12 w-auto object-contain sm:h-[52px]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-bold tracking-[0.01em] text-navy sm:text-[22px]">{company.shortName}</span>
        <span className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold-600 sm:text-[10.5px]">{company.subName}</span>
      </span>
    </Link>
  );
}
