import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { LinkButton } from './LinkButton';
import { company, isWhatsAppConfigured } from '../data/company';
import { buildWhatsAppUrl } from '../utils/whatsapp';

type WhatsAppCtaProps = {
  variant?: 'navy' | 'gold' | 'light' | 'ghostLight';
  className?: string;
};

/** Opens WhatsApp when a number is configured; otherwise routes to the contact form. */
export function WhatsAppCta({ variant = 'navy', className }: WhatsAppCtaProps) {
  if (isWhatsAppConfigured) {
    return (
      <LinkButton
        to={buildWhatsAppUrl(`Hello ${company.shortName}, I would like to make an enquiry.`)}
        variant={variant}
        icon={MessageCircle}
        className={className}>
        
        Chat on WhatsApp
      </LinkButton>);

  }
  return (
    <LinkButton to="/contact#enquiry" variant={variant} icon={Send} className={className}>
      Send an Enquiry
    </LinkButton>);

}