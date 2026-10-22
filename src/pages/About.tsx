import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, Layers, Phone, Quote } from 'lucide-react';
import { CurvedHero } from '../components/CurvedHero';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { Accent, SectionHeading } from '../components/SectionHeading';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';
import { company } from '../data/company';
import { aboutApproach, aboutDivisions, missionVision, values } from '../data/about';

export function About() {
  usePageMeta('About Us', 'Learn about AL-IRSHAAD AIIF DYNAMIC LIMITED — one company across travels and tours, media and TV, and events and entertainment.');
  const ValuesIcon = values.icon;

  return (
    <>
      <CurvedHero
        eyebrow="About our company"
        lines={[{ text: 'One Company.' }, { text: 'Three Divisions.' }, { text: 'A Shared Purpose.', accent: true }]}
        intro={`${company.name} is a multi-service company providing travels and tours, media and broadcasting, and event planning and management services.`}
        actions={
        <>
            <LinkButton to="#divisions" icon={Layers}>
              Our Divisions
            </LinkButton>
            <LinkButton to="/contact" variant="light" icon={Phone}>
              Contact Us
            </LinkButton>
          </>
        }
        image={images.aboutHero}
        imageAlt="Modern office building exterior at dusk with warm interior lights"
        imagePosition="55% 50%"
        caption={{ icon: Building2, title: 'One parent company', text: 'Travel, media and events working together.' }} />
      

      <Section labelledBy="story-title">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="h-[320px] overflow-hidden rounded-[28px] sm:h-[460px]">
              <img src={images.teamMeeting} alt="Team discussing plans together in a bright office" loading="lazy" className="sculpt-clip h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.08}>
            <p className="eyebrow">Who we are</p>
            <h2 id="story-title" className="mt-3 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.6rem]">
              Driven by Purpose.
              <br />
              <Accent>Organised Around People.</Accent>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-muted">
              {company.name} brings three related services under one roof. Our Travels & Tours division supports journeys — from visa guidance to
              Hajj and Umrah. Our Media & TV division, home to AL-IRSHAAD Dynamics Studios and AL-IRSHAAD TV, produces and shares content. Our Events &
              Entertainment division plans and delivers occasions.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              Because these services often meet — a conference that needs live coverage, a pilgrimage group that wants a documentary — our structure lets
              clients work with one company instead of several.
            </p>
            <figure className="mt-8 rounded-[22px] border border-cream-300 bg-cream-100 p-6">
              <Quote className="h-6 w-6 text-gold-500" aria-hidden="true" />
              <blockquote className="mt-3 font-display text-[1.2rem] leading-snug text-navy">
                To connect people, create opportunities and deliver services that make a positive difference.
              </blockquote>
              <figcaption className="mt-3 text-[12.5px] text-ink-soft">Guiding statement — proposed wording for company review</figcaption>
            </figure>
            <div className="mt-5 flex flex-col gap-1 rounded-2xl border border-cream-300 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink-soft">Company Information</span>
              <span className="text-[14px] font-semibold text-navy">CAC Registration No.: {company.cacRegistrationNumber}</span>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section labelledBy="mvv-title" className="bg-cream-100">
        <SectionHeading
          id="mvv-title"
          eyebrow="Mission, vision & values"
          title="What Guides Our Work"
          aside="Proposed wording prepared for review — to be confirmed by AL-IRSHAAD before launch." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {missionVision.map(({ label, icon: Icon, text }) =>
          <Reveal key={label}>
              <article className="h-full rounded-[22px] border border-cream-300/70 bg-white p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-200 text-gold-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[19px] font-semibold">{label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{text}</p>
              </article>
            </Reveal>
          )}
          <Reveal>
            <article className="h-full rounded-[22px] bg-navy-900 p-7 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-gold-300">
                <ValuesIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-[19px] font-semibold text-white">{values.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {values.items.map((v) =>
                <li key={v} className="flex items-center gap-2.5 text-[15px] text-white/85">
                    <CheckCircle2 className="h-4 w-4 text-gold-300" aria-hidden="true" />
                    {v}
                  </li>
                )}
              </ul>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section id="divisions" labelledBy="divisions-title">
        <SectionHeading id="divisions-title" eyebrow="Our divisions" title={<>How Our Divisions <Accent>Fit Together</Accent></>} className="mb-10" />
        <ul className="divide-y divide-cream-300 border-y border-cream-300">
          {aboutDivisions.map((d) =>
          <li key={d.title}>
              <Link to={d.to} className="group grid items-center gap-5 py-8 sm:grid-cols-[auto_1fr] lg:grid-cols-[80px_1fr_220px_auto] lg:gap-10">
                <span className="font-display text-[15px] font-semibold text-gold-600">{d.number}</span>
                <div>
                  <h3 className="text-[1.5rem] font-semibold transition-colors group-hover:text-gold-700 sm:text-[1.75rem]">{d.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{d.text}</p>
                </div>
                <div className="hidden h-32 overflow-hidden rounded-2xl lg:block">
                  <img src={d.image} alt={d.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
                <span className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-navy sm:col-start-2 lg:col-start-auto">
                  <span className="lg:sr-only">Visit {d.title}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-cream-300 text-gold-600 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </Section>

      <Section labelledBy="approach-title" className="!pt-0">
        <div className="grid gap-12 rounded-[30px] bg-cream p-8 sm:p-12 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why choose us</p>
            <h2 id="approach-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              More Than Services.
              <br />
              <Accent>A Considered Approach.</Accent>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-muted">
              We combine practical expertise with care for the people we serve, so every enquiry is handled thoughtfully.
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
            {aboutApproach.map(({ title, description, icon: Icon }) =>
            <li key={title}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-gold-600 shadow-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold">{title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-muted">{description}</p>
              </li>
            )}
          </ul>
        </div>
      </Section>

      <CtaBand
        eyebrow="Let’s build a brighter tomorrow"
        title="Let’s Work Together"
        text="Explore our divisions or get in touch — whether you need travel assistance, media services or expert event planning, we’re here to help."
        image={images.workTravel}
        imageAlt="Professional traveller at an airport window" />
      
    </>);

}