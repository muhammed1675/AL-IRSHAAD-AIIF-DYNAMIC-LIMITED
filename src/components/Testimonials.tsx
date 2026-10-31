import React from 'react';
import { Quote } from 'lucide-react';
import { Section } from './Section';
import { Accent, SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { testimonials, testimonialsEnabled } from '../data/testimonials';

/** Hidden until `testimonialsEnabled` is switched on in src/data/testimonials.ts. */
export function Testimonials() {
  if (!testimonialsEnabled || testimonials.length === 0) return null;
  return (
    <Section labelledBy="testimonials-title">
      <SectionHeading id="testimonials-title" eyebrow="Client feedback" title={<>What Our <Accent>Clients Say</Accent></>} className="mb-10" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) =>
        <Reveal key={`${t.name}-${i}`} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-[22px] border border-cream-300/70 bg-white p-7 shadow-soft">
              <Quote className="h-7 w-7 text-gold-500" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-cream-200 pt-4">
                <span className="block font-display text-[15.5px] font-semibold text-navy">{t.name}</span>
                <span className="block text-[13.5px] text-ink-muted">{t.detail}</span>
              </figcaption>
            </figure>
          </Reveal>
        )}
      </div>
    </Section>);

}
