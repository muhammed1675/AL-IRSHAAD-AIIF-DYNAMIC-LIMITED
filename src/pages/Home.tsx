import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Phone } from 'lucide-react';
import { CurvedHero } from '../components/CurvedHero';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { Accent, SectionHeading } from '../components/SectionHeading';
import { ImageServiceCard } from '../components/ImageServiceCard';
import { FilterGallery } from '../components/FilterGallery';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';
import { divisions, featuredWork, homeBenefits } from '../data/home';

export function Home() {
  usePageMeta(
    'Travel, Media & Events',
    'AL-IRSHAAD AIIF DYNAMIC LIMITED provides travels and tours, media and TV, and events and entertainment services for individuals, families and organisations.'
  );

  return (
    <>
      <CurvedHero
        eyebrow="Travel · Media · Events"
        lines={[{ text: 'Connecting' }, { text: 'People, Stories' }, { text: '& Experiences.', accent: true }]}
        intro="AL-IRSHAAD AIIF DYNAMIC LIMITED brings together travels and tours, media and television, and events and entertainment — helping you plan journeys, share stories and celebrate occasions with one dependable team."
        actions={
        <>
            <LinkButton to="#services">Explore Our Services</LinkButton>
            <LinkButton to="/contact" variant="light" icon={Phone}>
              Contact Us
            </LinkButton>
          </>
        }
        image={images.homeHero}
        imageAlt="The Masjid al-Haram and Makkah clock tower at golden hour, with an aircraft overhead"
        imagePosition="62% 50%"
        caption={{ icon: Compass, title: 'Three divisions', text: 'Travels & Tours · Media & TV · Events & Entertainment' }} />
      

      {/* Company introduction */}
      <Section labelledBy="intro-title">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">About our company</p>
            <h2 id="intro-title" className="mt-3 text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.015em] sm:text-[2.6rem]">
              One company.
              <br />
              Many ways to <Accent>serve you.</Accent>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-muted">
              We connect people with places, stories and occasions. Each of our three divisions has its own specialists — and when a journey, a
              production or an event calls for more than one, they work together.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
              Whether you are a family preparing for Umrah, an organisation planning a conference with live coverage, or a couple arranging a
              wedding, we begin by listening to what you need.
            </p>
            <LinkButton to="/about" variant="gold" className="mt-8">
              More About Us
            </LinkButton>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="grid h-[380px] grid-cols-5 gap-3 sm:h-[480px] sm:gap-4 lg:h-[520px]">
              <figure className="col-span-3 overflow-hidden rounded-[26px]">
                <img src={images.madinah} alt="Masjid an-Nabawi in Madinah in soft morning light" loading="lazy" className="sculpt-clip h-full w-full object-cover" />
              </figure>
              <div className="col-span-2 grid grid-rows-2 gap-3 sm:gap-4">
                <figure className="overflow-hidden rounded-[22px]">
                  <img src={images.mediaPhoto} alt="Photographer capturing a live event" loading="lazy" className="h-full w-full object-cover" />
                </figure>
                <figure className="overflow-hidden rounded-[22px]">
                  <img src={images.eventDecor} alt="Elegant event table setting with florals and candles" loading="lazy" className="h-full w-full object-cover" />
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our services */}
      <Section id="services" labelledBy="services-title" className="bg-cream-100">
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title={
          <>
              Three Divisions.
              <br />
              One Vision.
            </>
          }
          aside="Each division has its own team and its own page. Choose the one that fits your plans, or contact us if you need more than one." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {divisions.map((d, i) =>
          <Reveal key={d.title} delay={i * 0.08}>
              <ImageServiceCard
              item={d}
              footer={
              <Link
                to={d.to}
                className="flex items-center justify-between border-t border-cream-200 pt-4 text-[14.5px] font-semibold text-navy after:absolute after:inset-0 after:content-['']">
                
                    {d.linkLabel}
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-cream-300 text-gold-600 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
              }>
              
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${d.title} highlights`}>
                  {d.tags.map((t) =>
                <li key={t} className="rounded-full bg-cream-100 px-3 py-1 text-[12.5px] font-medium text-navy/80">
                      {t}
                    </li>
                )}
                </ul>
              </ImageServiceCard>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Featured work */}
      <Section labelledBy="featured-title">
        <SectionHeading id="featured-title" eyebrow="Featured work & activities" title="Moments That Inspire" className="mb-8" />
        <FilterGallery
          items={featuredWork}
          label="featured work"
          note="Representative imagery shown for illustration — to be replaced with AL-IRSHAAD project photography." />
        
      </Section>

      {/* Why choose */}
      <Section labelledBy="why-title" className="!pt-0">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="h-[340px] overflow-hidden rounded-[28px] sm:h-[460px]">
              <img src={images.teamMeeting} alt="AL-IRSHAAD style team discussing plans in a bright office" loading="lazy" className="sculpt-clip h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="eyebrow">Why choose AL-IRSHAAD</p>
            <h2 id="why-title" className="mt-3 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.6rem]">
              More Than Services.
              <br />
              <Accent>We Create Opportunities.</Accent>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">
              Our approach is simple: understand what you need, explain clearly how we can help, and coordinate the details so your plans move forward.
            </p>
            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {homeBenefits.map(({ title, description, icon: Icon }) =>
              <li key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream-200 text-gold-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold">{title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-muted">{description}</p>
                  </div>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Let’s work together"
        title="Ready to Connect?"
        text="Whether you need travel assistance, professional media services or help planning an event, tell us what you have in mind and our team will follow up."
        image={images.dubai}
        imageAlt="City skyline at dusk" />
      
    </>);

}