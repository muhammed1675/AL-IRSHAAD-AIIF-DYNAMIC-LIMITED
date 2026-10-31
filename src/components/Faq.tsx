import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';
import { Accent } from './SectionHeading';
import { Reveal } from './Reveal';
import { faqs } from '../data/faq';

/** Accessible accordion built on native <details>, so it works without extra JavaScript. */
export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
            Frequently Asked <Accent>Questions</Accent>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-muted">
            Quick answers about how we work. Can’t find yours? Send us a message and our team will help.
          </p>
        </div>
        <Reveal className="lg:col-span-8">
          <div className="space-y-3">
            {faqs.map((f) =>
            <details key={f.question} className="group rounded-2xl border border-cream-300/70 bg-white shadow-soft open:shadow-lift">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-display text-[16.5px] font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-muted">{f.answer}</p>
              </details>
            )}
          </div>
        </Reveal>
      </div>
    </Section>);

}
