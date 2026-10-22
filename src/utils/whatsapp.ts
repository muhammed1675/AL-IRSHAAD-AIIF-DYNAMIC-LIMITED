import { company } from '../data/company';
import type { FormField, FormValues } from '../types/content';

export function buildEnquiryMessage(topic: string, fields: FormField[], values: FormValues): string {
  const lines = fields.
  map((field) => {
    const raw = values[field.name];
    const value = Array.isArray(raw) ? raw.join(', ') : (raw ?? '').trim();
    return value ? `${field.label}: ${value}` : null;
  }).
  filter(Boolean);

  return [`Hello ${company.shortName}, I would like to make a ${topic} enquiry.`, '', ...lines].join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  const number = company.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}