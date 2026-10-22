import React, { useState } from 'react';
import { ArrowRight, Info, MapPinned, Plane, Send } from 'lucide-react';
import { CurvedHero } from '../components/CurvedHero';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { Accent, SectionHeading } from '../components/SectionHeading';
import { ImageServiceCard } from '../components/ImageServiceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { EnquiryForm } from '../components/EnquiryForm/EnquiryForm';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';
import { destinations, travelApproach, travelFormFields, travelServices, travelSteps } from '../data/travel';
import type { FormValues } from '../types/content';

export function TravelTours() {
  usePageMeta(
    'Travels & Tours',
    'Visa application assistance, flight booking, study and work travel guidance, Hajj and Umrah packages and tours from AL-IRSHAAD AIIF DYNAMIC LIMITED.'
  );
  const [prefill, setPrefill] = useState<FormValues | null>(null);

  const enquire = (values: FormValues) => {
    setPrefill({ ...values });
    document.getElementById('travel-enquiry')?.scrollIntoView({ block: 'start' });
  };

  return (
    <>
      <CurvedHero
        eyebrow="Travels & Tours"
        lines={[{ text: 'Explore the' }, { text: 'World with' }, { text: 'AL-IRSHAAD.', accent: true }]}
        intro="From visa guidance and flight bookings to study and work travel, Hajj and Umrah packages and tours — we help make your travel plans clearer, simpler and better organised."
        actions={
        <>
            <LinkButton to="#travel-enquiry" icon={Send}>
              Enquire Now
            </LinkButton>
            <LinkButton to="#destinations" variant="light" icon={MapPinned}>
              View Destinations
            </LinkButton>
          </>
        }
        note={
        <span className="flex gap-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
            Enquiries only — nothing is booked until you’ve spoken with our team and agreed the details.
          </span>
        }
        image={images.travelHero}
        imageAlt="Passenger jet climbing over a city skyline at sunset"
        imagePosition="60% 40%"
        caption={{ icon: Plane, title: 'Hajj, Umrah & beyond', text: 'Guidance from first enquiry to departure.' }} />
      

      <Section id="travel-services" labelledBy="travel-services-title">
        <SectionHeading
          id="travel-services-title"
          eyebrow="Our travel services"
          title={
          <>
              Complete Travel Solutions
              <br />
              <Accent>for Every Journey</Accent>
            </>
          }
          aside="Choose a service to start an enquiry — we’ll prefill the form for you." />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travelServices.map((s, i) =>
          <Reveal key={s.title} delay={i % 3 * 0.06}>
              <ImageServiceCard
              item={s}
              footer={
              <button
                type="button"
                onClick={() => enquire({ service: s.title })}
                className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-navy hover:text-gold-700">
                
                    Enquire about this
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
              } />
            
            </Reveal>
          )}
        </div>
        <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-cream-300 bg-cream-100 px-5 py-4 text-[14px] leading-relaxed text-ink-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
          AL-IRSHAAD provides assistance and guidance only. Visa, admission and employment decisions are made by the relevant embassies, institutions and
          employers, and no outcome can be guaranteed.
        </p>
      </Section>

      <Section id="destinations" labelledBy="destinations-title" className="bg-cream-100">
        <SectionHeading
          id="destinations-title"
          eyebrow="Featured destinations"
          title="Popular Destinations"
          aside="Illustrative destinations our customers often ask about. Availability, requirements and arrangements are discussed during consultation." />
        
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d, i) =>
          <li key={d.name} className={i === 0 ? 'col-span-2 md:col-span-1' : ''}>
              <button
              type="button"
              onClick={() => enquire({ destination: d.name })}
              aria-label={`Enquire about travel to ${d.name}`}
              className="group relative block h-56 w-full overflow-hidden rounded-[22px] text-left sm:h-72 lg:h-[340px]">
              
                <img
                src={d.image}
                alt={d.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ objectPosition: d.position }} />
              
                <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-navy-900/85 px-4 py-3 text-white">
                  <span>
                    <span className="block font-display text-[16px] font-semibold leading-tight">{d.name}</span>
                    <span className="block text-[12.5px] text-white/70">{d.focus}</span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-navy transition-colors group-hover:bg-gold-500 group-hover:text-white">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </li>
          )}
        </ul>
      </Section>

      <Section id="travel-enquiry" labelledBy="how-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading id="how-title" eyebrow="Simple process" title="How It Works" />
            <p className="mb-10 mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
              Getting started is simple. This is an enquiry, not a booking — our team will be in touch to discuss your plans.
            </p>
            <ProcessSteps steps={travelSteps} />
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm
              formId="travel-form"
              topic="travel"
              fields={travelFormFields}
              prefill={prefill}
              heading="Plan Your Trip"
              intro="Share a few details and continue to WhatsApp. Our team will follow up with guidance and next steps."
              className="lg:p-10" />
            
          </div>
        </div>
      </Section>

      <Section labelledBy="confidence-title" className="!pt-0">
        <div className="grid overflow-hidden rounded-[30px] bg-cream lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="eyebrow">Travel with confidence</p>
            <h2 id="confidence-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              More Than a Trip.
              <br />
              <Accent>A Clearer Journey.</Accent>
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-muted">
              Travel involves paperwork, timelines and decisions that can feel overwhelming. We help you understand each step and prepare properly.
            </p>
            <ul className="mt-9 space-y-6">
              {travelApproach.map(({ title, description, icon: Icon }) =>
              <li key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-gold-600 shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold">{title}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-muted">{description}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src={images.pilgrims} alt="Pilgrims in white walking calmly toward the Masjid al-Haram at dawn" loading="lazy" className="hero-clip absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Let’s plan together"
        title="Ready for Your Next Journey?"
        text="Whether you need visa guidance, flight booking, study or work travel support, Hajj and Umrah packages or a tour, we’re here to help."
        image={images.istanbul}
        imageAlt="Istanbul skyline at sunset" />
      
    </>);

}