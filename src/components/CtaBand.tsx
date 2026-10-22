import React from 'react';
import { Reveal } from './Reveal';
import { WhatsAppCta } from './WhatsAppCta';
import { LinkButton } from './LinkButton';

type CtaBandProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export function CtaBand({ eyebrow, title, text, image, imageAlt }: CtaBandProps) {
  return (
    <section aria-labelledby="cta-title" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-[28px] border border-cream-300/70 bg-cream-100 p-7 sm:p-10 lg:grid-cols-[1.25fr_0.85fr_auto] lg:gap-10 lg:p-12">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 id="cta-title" className="mt-3 text-[1.9rem] font-semibold leading-tight tracking-[-0.015em] sm:text-[2.25rem]">
                {title}
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-muted">{text}</p>
            </div>
            <div className="relative hidden h-44 overflow-hidden rounded-[22px] md:block lg:h-40">
              <img src={image} alt={imageAlt} loading="lazy" className="sculpt-clip h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <WhatsAppCta />
              <LinkButton to="/contact" variant="light" arrow>
                Contact Options
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}