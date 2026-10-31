import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { company, isWhatsAppConfigured } from '../data/company';
import { buildWhatsAppUrl } from '../utils/whatsapp';

/** Floating "chat on WhatsApp" button, fixed to the bottom-right of every page. */
export function WhatsAppFloat() {
  if (!isWhatsAppConfigured) return null;
  return (
    <a
      href={buildWhatsAppUrl(`Hello ${company.shortName}, I would like to make an enquiry.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift ring-4 ring-white/80 transition-transform duration-200 hover:scale-105 hover:bg-[#1EBE5A] focus-visible:outline-offset-4 sm:bottom-6 sm:right-6">
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
