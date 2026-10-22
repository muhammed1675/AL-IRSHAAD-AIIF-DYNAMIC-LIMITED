import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  id?: string;
  aside?: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
};

export function SectionHeading({ eyebrow, title, id, aside, tone = 'dark', className = '' }: SectionHeadingProps) {
  const light = tone === 'light';
  return (
    <div className={`flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12 ${className}`}>
      <div className="max-w-2xl">
        <p className={`eyebrow ${light ? '!text-gold-300' : ''}`}>{eyebrow}</p>
        <h2
          id={id}
          className={`mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem] lg:text-[2.75rem] ${
          light ? 'text-white' : ''}`
          }>
          
          {title}
        </h2>
      </div>
      {aside &&
      <div className={`max-w-md text-[15px] leading-relaxed lg:pb-1.5 ${light ? 'text-white/70' : 'text-ink-muted'}`}>{aside}</div>
      }
    </div>);

}

export function Accent({ children }: {children: React.ReactNode;}) {
  return <span className="text-gold-600">{children}</span>;
}