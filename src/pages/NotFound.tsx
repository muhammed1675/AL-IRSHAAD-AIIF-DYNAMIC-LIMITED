import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Logo } from '../components/layout/Logo';

export function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-background px-5 py-20 text-center lg:px-8">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <Logo />
        <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-700">Page not found</p>
        <h1 className="mt-4 text-[5.5rem] font-semibold leading-none tracking-[-0.06em] text-navy sm:text-[8rem]">404</h1>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">This page took a wrong turn.</h2>
        <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-muted">The page you are looking for may have moved or no longer exists. Let us help you get back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"><Home className="h-4 w-4" aria-hidden="true" /> Go home</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold-500"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Contact us</Link>
        </div>
      </div>
    </main>
  );
}
