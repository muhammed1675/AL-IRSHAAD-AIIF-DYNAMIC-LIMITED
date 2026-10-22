import React from 'react';

type SectionProps = {
  id?: string;
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, labelledBy, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-site px-5 lg:px-8">{children}</div>
    </section>);

}