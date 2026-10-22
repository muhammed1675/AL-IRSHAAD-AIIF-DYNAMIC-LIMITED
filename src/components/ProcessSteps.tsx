import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProcessStep } from '../types/content';

type ProcessStepsProps = {
  steps: ProcessStep[];
  layout?: 'vertical' | 'horizontal';
};

const num = (i: number) => String(i + 1).padStart(2, '0');

export function ProcessSteps({ steps, layout = 'vertical' }: ProcessStepsProps) {
  if (layout === 'horizontal') {
    return (
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title} className="relative rounded-[22px] border border-cream-300/70 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-600 font-display text-[15px] font-semibold text-white">
                  {num(i)}
                </span>
                <Icon className="h-6 w-6 text-navy/60" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-[18px] font-semibold">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{s.description}</p>
              {i < steps.length - 1 &&
              <ArrowRight className="absolute -right-[19px] top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gold-500 lg:block" aria-hidden="true" />
              }
            </li>);

        })}
      </ol>);

  }

  return (
    <ol>
      {steps.map((s, i) => {
        const Icon = s.icon;
        const last = i === steps.length - 1;
        return (
          <li key={s.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-500/15 font-display text-[15px] font-semibold text-gold-700 ring-1 ring-gold-500/30">
                {num(i)}
              </span>
              {!last && <span className="my-2 w-px flex-1 bg-cream-400" aria-hidden="true" />}
            </div>
            <div className={last ? 'pt-2' : 'pb-8 pt-2'}>
              <div className="flex items-center gap-2.5">
                <Icon className="h-[18px] w-[18px] text-gold-600" aria-hidden="true" />
                <h3 className="text-[17.5px] font-semibold">{s.title}</h3>
              </div>
              <p className="mt-1.5 max-w-sm text-[14.5px] leading-relaxed text-ink-muted">{s.description}</p>
            </div>
          </li>);

      })}
    </ol>);

}