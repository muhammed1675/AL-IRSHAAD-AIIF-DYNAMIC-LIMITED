import React from 'react';
import { CalendarCheck, CheckCircle2, Images, Info, Sparkles } from 'lucide-react';
import { CurvedHero } from '../components/CurvedHero';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { Accent, SectionHeading } from '../components/SectionHeading';
import { ImageServiceCard } from '../components/ImageServiceCard';
import { ProcessSteps } from '../components/ProcessSteps';
import { FilterGallery } from '../components/FilterGallery';
import { EnquiryForm } from '../components/EnquiryForm/EnquiryForm';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';
import { eventFormFields, eventGallery, eventHighlights, eventServices, eventSteps } from '../data/events';

const prepList = ['Your preferred date or date range', 'Location or venue ideas', 'An estimated guest count', 'Theme, colours or style inspiration', 'A rough budget range'];

export function EventsEntertainment() {
  usePageMeta(
    'Events & Entertainment',
    'Wedding planning, corporate events and conferences, decoration and styling, entertainment and event logistics from AL-IRSHAAD AIIF DYNAMIC LIMITED.'
  );

  return (
    <>
      <CurvedHero
        eyebrow="Events & Entertainment"
        lines={[{ text: 'Unforgettable' }, { text: 'Events,' }, { text: 'Beautiful Moments.', accent: true }]}
        intro="From intimate gatherings to grand celebrations, we provide event planning, decoration, logistics and entertainment services tailored to your occasion."
        actions={
        <>
            <LinkButton to="#event-enquiry" icon={CalendarCheck}>
              Plan Your Event
            </LinkButton>
            <LinkButton to="#gallery" variant="light" icon={Images}>
              View Gallery
            </LinkButton>
          </>
        }
        image={images.eventsHero}
        imageAlt="Wedding reception hall with chandeliers, drapery and ivory florals"
        imagePosition="55% 50%"
        caption={{ icon: Sparkles, title: 'Weddings · Corporate · Celebrations', text: 'Planned with care and attention to detail.' }} />
      

      <Section id="event-services" labelledBy="event-services-title">
        <SectionHeading
          id="event-services-title"
          eyebrow="Our services"
          title={
          <>
              Complete <Accent>Event Solutions</Accent>
            </>
          }
          aside="We handle the details so you can enjoy a well-organised, stress-free occasion." />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventServices.map((s, i) =>
          <Reveal key={s.title} delay={i % 3 * 0.06}>
              <ImageServiceCard item={s} imageAspect="aspect-[3/2]" />
            </Reveal>
          )}
        </div>
      </Section>

      <section aria-labelledby="together-title" className="px-3 sm:px-5">
        <div className="mx-auto grid max-w-site overflow-hidden rounded-[32px] bg-navy-900 lg:grid-cols-2">
          <div className="px-7 py-12 sm:px-12 lg:px-14 lg:py-16">
            <p className="eyebrow !text-gold-300">Our approach</p>
            <h2 id="together-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] text-white sm:text-[2.5rem]">
              Events That Bring
              <br />
              People Together
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/70">
              We create meaningful occasions through careful planning, creativity and attention to detail — and stay with you through the day itself.
            </p>
            <LinkButton to="#process" variant="gold" className="mt-8">
              Our Event Process
            </LinkButton>
            <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4">
              {eventHighlights.map(({ title, icon: Icon }) =>
              <li key={title} className="flex flex-col items-center gap-3 bg-navy-900 px-3 py-5 text-center">
                  <Icon className="h-6 w-6 text-gold-300" aria-hidden="true" />
                  <span className="text-[13.5px] font-medium leading-snug text-white/85">{title}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[400px]">
            <img src={images.eventOutdoor} alt="Outdoor evening reception under a draped tent with chandeliers" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section id="process" labelledBy="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title={
          <>
              A Simple Process
              <br />
              for a <Accent>Well-Run Event</Accent>
            </>
          }
          aside={
          <span className="flex gap-2">
              <Info className="mt-1 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              Sending an enquiry starts a conversation — it doesn’t confirm a booking or reserve a date.
            </span>
          }
          className="mb-12" />
        
        <ProcessSteps steps={eventSteps} layout="horizontal" />
      </Section>

      <Section id="gallery" labelledBy="gallery-title" className="bg-cream-100">
        <SectionHeading id="gallery-title" eyebrow="Event gallery" title="Moments We Love to Create" className="mb-8" />
        <FilterGallery
          items={eventGallery}
          label="event gallery"
          note="Representative imagery shown by category — to be replaced with photographs of AL-IRSHAAD events." />
        
      </Section>

      <Section id="event-enquiry" labelledBy="event-enquiry-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">Enquiry & quote request</p>
            <h2 id="event-enquiry-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              Tell Us About <Accent>Your Event</Accent>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-muted">
              Share the essentials and we’ll follow up to discuss your requirements and prepare a tailored quote.
            </p>
            <div className="mt-8 rounded-[22px] bg-cream-100 p-6">
              <h3 className="text-[16.5px] font-semibold">Helpful to have ready</h3>
              <ul className="mt-4 space-y-3">
                {prepList.map((p) =>
                <li key={p} className="flex gap-2.5 text-[14.5px] text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {p}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm formId="event-form" topic="event" fields={eventFormFields} heading="Request a Quote" className="lg:p-10" />
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Let’s plan together"
        title="Let’s Plan Your Next Event"
        text="Whether it’s a wedding, corporate event, conference or a special celebration, our team is ready to help bring your ideas to life."
        image={images.eventDecor}
        imageAlt="Elegant table setting with florals" />
      
    </>);

}