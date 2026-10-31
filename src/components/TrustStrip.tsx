import React from 'react';
import { Layers, MapPin, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { company, isWhatsAppConfigured } from '../data/company';

type Item = { icon: LucideIcon; title: string; text: string };

/** Slim band of verifiable facts shown directly under the hero. */
export function TrustStrip() {
  const items: Item[] = [
  { icon: ShieldCheck, title: 'CAC registered', text: company.cacRegistrationNumber },
  { icon: Layers, title: 'Three divisions', text: 'Travel · Media · Events' },
  { icon: MapPin, title: 'Based in Oyo', text: 'Oyo State, Nigeria' }];

  if (isWhatsAppConfigured) {
    items.push({ icon: WhatsAppIcon, title: 'WhatsApp enquiries', text: 'Message us directly' });
  }

  return (
    <section aria-label="Company at a glance" className="border-y border-cream-300/70 bg-white">
      <ul className="mx-auto grid max-w-site grid-cols-2 gap-x-6 gap-y-5 px-5 py-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, text }) =>
        <li key={title} className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-200 text-navy">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[15px] font-semibold text-navy">{title}</span>
              <span className="block truncate text-[13px] text-ink-muted">{text}</span>
            </span>
          </li>
        )}
      </ul>
    </section>);

}
