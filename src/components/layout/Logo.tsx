import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link to="/" aria-label={`${company.name} — home`} className="inline-flex shrink-0 rounded-md">
      <img
        src="/AIIF.svg"
        alt={`${company.name} logo`}
        className={`h-16 w-auto object-contain ${tone === 'light' ? 'brightness-110' : ''}`}
      />
    </Link>
  );
}
