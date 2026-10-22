import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clapperboard, Clock, Handshake, Mail, MapPin, MessageCircle, MessagesSquare, Phone, Plane, Send, Sparkles, BoxIcon } from "lucide-react";
import { CurvedHero } from "../components/CurvedHero";
import { LinkButton } from "../components/LinkButton";
import { Section } from "../components/Section";
import { Accent, SectionHeading } from "../components/SectionHeading";
import { EnquiryForm } from "../components/EnquiryForm/EnquiryForm";
import { Reveal } from "../components/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { images } from "../data/images";
import { company, isWhatsAppConfigured } from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { FormField, FormValues } from "../types/content";
const contactFields: FormField[] = [{
  name: 'fullName',
  label: 'Full name',
  type: 'text',
  required: true,
  placeholder: 'Your full name',
  autoComplete: 'name'
}, {
  name: 'email',
  label: 'Email address',
  type: 'email',
  required: true,
  placeholder: 'you@example.com',
  autoComplete: 'email'
}, {
  name: 'phone',
  label: 'Phone number',
  type: 'tel',
  placeholder: 'e.g. 0803 123 4567',
  autoComplete: 'tel'
}, {
  name: 'service',
  label: 'Service of interest',
  type: 'select',
  required: true,
  placeholder: 'Select a service',
  options: ['Travels & Tours', 'Media & TV', 'Events & Entertainment', 'Partnership / general enquiry']
}, {
  name: 'message',
  label: 'Your message',
  type: 'textarea',
  required: true,
  placeholder: 'Tell us more about your enquiry…'
}];
type Method = {
  icon: BoxIcon;
  title: string;
  text: string;
  value: string;
  href?: string;
};
export function Contact() {
  usePageMeta('Contact Us', 'Contact AL-IRSHAAD AIIF DYNAMIC LIMITED about travels and tours, media and TV, or events and entertainment.');
  const [prefill, setPrefill] = useState<FormValues | null>(null);
  const methods: Method[] = [{
    icon: Phone,
    title: 'Call Us',
    text: 'Speak directly with our team.',
    value: company.phone,
    href: company.phone ? `tel:${company.phone.replace(/\s/g, '')}` : undefined
  }, {
    icon: MessageCircle,
    title: 'WhatsApp',
    text: 'Chat with us for quick assistance.',
    value: isWhatsAppConfigured ? 'Start a chat' : '',
    href: isWhatsAppConfigured ? buildWhatsAppUrl(`Hello ${company.shortName}, I would like to make an enquiry.`) : undefined
  }, {
    icon: Mail,
    title: 'Email Us',
    text: 'Send us a detailed message.',
    value: company.email,
    href: company.email ? `mailto:${company.email}` : undefined
  }, {
    icon: MapPin,
    title: 'Visit Our Office',
    text: 'Meet our team in person.',
    value: company.address,
    href: company.mapUrl || undefined
  }];
  const routes = [{
    icon: Plane,
    title: 'Travel enquiries',
    text: 'Visa assistance, flights, study & work travel, Hajj & Umrah.',
    to: '/travels-tours#travel-enquiry'
  }, {
    icon: Clapperboard,
    title: 'Media & TV',
    text: 'Production, live streaming, design and programme enquiries.',
    to: '/media-tv#media-services'
  }, {
    icon: Sparkles,
    title: 'Events & Entertainment',
    text: 'Weddings, corporate events, décor and logistics.',
    to: '/events-entertainment#event-enquiry'
  }];
  const startGeneral = () => {
    setPrefill({
      service: 'Partnership / general enquiry'
    });
    document.getElementById('enquiry')?.scrollIntoView({
      block: 'start'
    });
  };
  return <>
      <CurvedHero eyebrow="Contact us" lines={[{
      text: 'Let’s Build'
    }, {
      text: 'Something'
    }, {
      text: 'Meaningful'
    }, {
      text: 'Together.',
      accent: true
    }]} intro="Whether you need travel assistance, media services, event planning or want to discuss a partnership, our team is here to help." actions={<>
            <LinkButton to="#enquiry" icon={Send}>
              Send a Message
            </LinkButton>
            {isWhatsAppConfigured ? <LinkButton to={buildWhatsAppUrl(`Hello ${company.shortName}, I would like to make an enquiry.`)} variant="light" icon={MessageCircle}>
                Chat on WhatsApp
              </LinkButton> : <LinkButton to="/#services" variant="light" icon={ArrowRight}>
                Explore Services
              </LinkButton>}
          </>} image={images.contactHero} imageAlt="Team member speaking with a client on the phone at a bright office desk" imagePosition="70% 40%" caption={{
      icon: MessagesSquare,
      title: 'Talk to our team',
      text: 'By form, WhatsApp, phone or email.'
    }} />

      <section id="contact-methods" aria-label="Contact methods" className="scroll-mt-24 pt-10 sm:pt-12">
        <ul className="mx-auto grid max-w-site gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {methods.map((m) => <li key={m.title}>
              <MethodCard method={m} />
            </li>)}
        </ul>
      </section>

      <Section id="enquiry" labelledBy="enquiry-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Send us a message</p>
            <h2 id="enquiry-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              How Can We <Accent>Help You?</Accent>
            </h2>
            <p className="mb-8 mt-4 max-w-lg text-[15.5px] leading-relaxed text-ink-muted">
              Fill in the form and we’ll prepare your message. You stay in control of sending it.
            </p>
            <EnquiryForm formId="contact-form" topic="general" fields={contactFields} prefill={prefill} />
          </div>

          <aside className="space-y-6 lg:col-span-5 lg:pt-[8.5rem]" aria-label="Office and next steps">
            <div className="overflow-hidden rounded-[26px] border border-cream-300/70 bg-white shadow-soft">
              {company.address ? <div className="p-7">
                  <h3 className="text-[19px] font-semibold">Our Office</h3>
                  <p className="mt-3 flex gap-2.5 text-[15px] text-ink-muted">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                    {company.address}
                  </p>
                  {company.mapUrl && <a href={company.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-gold-700 hover:underline">
                      Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>}
                </div> : <div className="m-4 grid min-h-[220px] place-items-center rounded-[20px] border-2 border-dashed border-cream-300 bg-cream-50 p-6 text-center">
                  <div>
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cream-200 text-gold-600">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-[17px] font-semibold">Office location</h3>
                    <p className="mx-auto mt-1.5 max-w-xs text-[14px] leading-relaxed text-ink-muted">
                      Address and map will be added here once the office location is confirmed.
                    </p>
                  </div>
                </div>}
              <div className="flex items-center gap-3 border-t border-cream-200 px-7 py-4 text-[14px] text-ink-muted">
                <Clock className="h-[18px] w-[18px] shrink-0 text-gold-600" aria-hidden="true" />
                {company.hours || 'Opening hours — to be confirmed'}
              </div>
            </div>

            <div className="rounded-[26px] bg-navy-900 p-7 text-white">
              <h3 className="text-[19px] font-semibold text-white">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {['Complete the form with your enquiry details.', isWhatsAppConfigured ? 'Review and send the prepared message in WhatsApp.' : 'Copy your prepared message and share it with our team.', 'Our team follows up to discuss your requirements.'].map((step, i) => <li key={step} className="flex gap-3.5 text-[14.5px] leading-relaxed text-white/80">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-500 text-[12.5px] font-semibold text-white">{i + 1}</span>
                    {step}
                  </li>)}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section labelledBy="routes-title" className="!pt-0">
        <SectionHeading id="routes-title" eyebrow="Service enquiries" title="Looking for Something Specific?" aside="Go straight to the division that matches your needs for detailed information and its own enquiry form." className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map(({
          icon: Icon,
          title,
          text,
          to
        }) => <Reveal key={title}>
              <Link to={to} className="group flex h-full flex-col rounded-[22px] border border-cream-300/70 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift">
                <RouteBody icon={Icon} title={title} text={text} />
              </Link>
            </Reveal>)}
          <Reveal>
            <button type="button" onClick={startGeneral} className="group flex h-full w-full flex-col rounded-[22px] border border-cream-300/70 bg-white p-6 text-left shadow-soft transition-shadow hover:shadow-lift">
              <RouteBody icon={Handshake} title="Partnerships & general" text="Business collaboration and other enquiries — start with the form above." />
            </button>
          </Reveal>
        </div>
      </Section>
    </>;
}
function RouteBody({
  icon: Icon,
  title,
  text




}: {icon: BoxIcon;title: string;text: string;}) {
  return <>
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-200 text-gold-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-gold-600" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-[17.5px] font-semibold">{title}</h3>
      <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-muted">{text}</p>
    </>;
}
function MethodCard({
  method


}: {method: Method;}) {
  const {
    icon: Icon,
    title,
    text,
    value,
    href
  } = method;
  const body = <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-500 text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[17px] font-semibold text-navy">{title}</span>
        <span className="mt-0.5 block text-[13.5px] text-ink-muted">{text}</span>
        <span className={`mt-2 block truncate text-[14px] font-semibold ${value ? 'text-navy' : 'font-medium italic text-ink-soft'}`}>
          {value || 'Details to be confirmed'}
        </span>
      </span>
      {href && <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold-600 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>;
  const cls = 'group flex h-full gap-4 rounded-[22px] border border-cream-300/70 bg-white p-5 shadow-soft';
  if (!href) return <div className={cls}>{body}</div>;
  const external = href.startsWith('http');
  return <a href={href} className={`${cls} transition-shadow hover:shadow-lift`} {...external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}}>
      {body}
    </a>;
}