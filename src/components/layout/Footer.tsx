import React from "react";
import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone, BoxIcon } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "../../data/company";
import { footerServices, navLinks } from "../../data/navigation";
type ContactLine = {
  icon: BoxIcon;
  label: string;
  value: string;
  href?: string;
};
export function Footer() {
  const contactLines: ContactLine[] = [{
    icon: MapPin,
    label: 'Office address',
    value: company.address
  }, {
    icon: Phone,
    label: 'Phone',
    value: company.phone,
    href: company.phone ? `tel:${company.phone.replace(/\s/g, '')}` : undefined
  }, {
    icon: Mail,
    label: 'Email',
    value: company.email,
    href: company.email ? `mailto:${company.email}` : undefined
  }, {
    icon: Clock,
    label: 'Opening hours',
    value: company.hours
  }];
  return <footer className="bg-navy-900 text-white/75">
      <div className="mx-auto max-w-site px-5 pb-8 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.2fr_1.2fr] lg:gap-10">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed">
              {company.name} — travels and tours, media and television, and events and entertainment under one company.
            </p>
            {company.socials.length > 0 && <ul className="mt-6 flex flex-wrap gap-3">
                {company.socials.map((s) => <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[14px] text-white hover:text-gold-300">
                      {s.label}
                    </a>
                  </li>)}
              </ul>}
          </div>

          <FooterColumn title="Quick Links">
            {navLinks.map((l) => <li key={l.to}>
                <Link to={l.to} className="hover:text-gold-300">
                  {l.label}
                </Link>
              </li>)}
          </FooterColumn>

          <FooterColumn title="Our Services">
            {footerServices.map((l) => <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-300">
                  {l.label}
                </Link>
              </li>)}
          </FooterColumn>

          <FooterColumn title="Contact Information">
            {contactLines.map(({
            icon: Icon,
            label,
            value,
            href
          }) => <li key={label} className="flex gap-3">
                <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">{label}: </span>
                  {value ? href ? <a href={href} className="hover:text-gold-300">
                        {value}
                      </a> : value : <span className="text-white/45">{label} — to be confirmed</span>}
                </span>
              </li>)}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <p className="text-[12px] text-white/55">
              CAC Registration No.: {company.cacRegistrationNumber}
            </p>
          </div>
          <p>
            Privacy Policy <span className="text-white/40">(to be added)</span> ·{' '}
            <Link to="/terms" className="hover:text-gold-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>;
}
function FooterColumn({
  title,
  children



}: {title: string;children: React.ReactNode;}) {
  return <div>
      <h2 className="font-display text-[15px] font-semibold text-white">{title}</h2>
      <span className="mt-2 block h-[2px] w-6 rounded-full bg-gold-500" aria-hidden="true" />
      <ul className="mt-5 space-y-3 text-[14.5px]">{children}</ul>
    </div>;
}
