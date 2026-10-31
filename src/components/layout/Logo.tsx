import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

type LogoProps = {
  tone?: 'dark' | 'light';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  return (
    <Link to="/" aria-label={`${company.name} — home`} className="inline-flex shrink-0 rounded-md">
      <span className={tone === 'light' ? 'inline-flex rounded-2xl bg-white p-2.5 shadow-soft' : 'inline-flex'}>
        <img
          src="/AL-IRSHAAD-logo.svg"
          alt={`${company.name} logo`}
          className={`w-auto object-contain ${tone === 'light' ? 'h-20' : 'h-16'}`}
        />
      </span>
    </Link>
  );
}
