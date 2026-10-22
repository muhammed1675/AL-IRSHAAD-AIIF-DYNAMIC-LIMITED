import React from 'react';
import { Clapperboard, MonitorPlay, PlayCircle, Radio, Tv, Users } from 'lucide-react';
import { CurvedHero } from '../components/CurvedHero';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { Accent, SectionHeading } from '../components/SectionHeading';
import { ImageServiceCard } from '../components/ImageServiceCard';
import { FilterGallery } from '../components/FilterGallery';
import { VideoSlot } from '../components/VideoSlot';
import { CtaBand } from '../components/CtaBand';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../hooks/usePageMeta';
import { images } from '../data/images';
import { company } from '../data/company';
import { mediaPortfolio, mediaServices, tvCategories, tvFeatured, tvLatest } from '../data/media';

export function MediaTV() {
  usePageMeta(
    'Media & TV',
    'Photography, videography, TV production, live streaming, graphic design and video editing from AL-IRSHAAD Dynamics Studios and AL-IRSHAAD TV.'
  );

  return (
    <>
      <CurvedHero
        eyebrow="Media & TV"
        lines={[{ text: 'Stories That Inspire.' }, { text: 'Content That', accent: true }, { text: 'Makes an Impact.' }]}
        intro="AL-IRSHAAD Dynamics Studios and AL-IRSHAAD TV deliver media production, Islamic programming, live streaming and creative content that informs, educates and inspires."
        actions={
        <>
            <LinkButton to="#media-services">Explore Our Services</LinkButton>
            <LinkButton to="#al-irshaad-tv" variant="light" icon={PlayCircle}>
              Watch Our Programmes
            </LinkButton>
          </>
        }
        image={images.mediaHero}
        imageAlt="Broadcast camera in a warmly lit television studio"
        imagePosition="65% 50%"
        caption={{ icon: Tv, title: 'AL-IRSHAAD TV', text: 'Lectures, Tafsir and religious programmes.' }} />
      

      <Section id="media-services" labelledBy="media-services-title">
        <SectionHeading
          id="media-services-title"
          eyebrow="Our services"
          title={
          <>
              Professional <Accent>Media Solutions</Accent>
            </>
          }
          aside="From concept to final delivery, we provide media services for individuals, businesses, institutions and communities." />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaServices.map((s, i) =>
          <Reveal key={s.title} delay={i % 3 * 0.06}>
              <ImageServiceCard item={s} imageAspect="aspect-[16/9]" />
            </Reveal>
          )}
        </div>
      </Section>

      <section aria-labelledby="portfolio-title" className="px-3 sm:px-5">
        <div className="mx-auto max-w-site rounded-[32px] bg-navy-900 px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <SectionHeading
            id="portfolio-title"
            tone="light"
            eyebrow="Featured work"
            title="Portfolio Highlights"
            aside="Browse the kinds of work we produce. Select an image to view it larger."
            className="mb-10" />
          
          <FilterGallery
            items={mediaPortfolio}
            label="portfolio"
            tone="dark"
            note="Sample imagery shown by category — to be replaced with AL-IRSHAAD Dynamics Studios portfolio work." />
          
        </div>
      </section>

      <Section id="al-irshaad-tv" labelledBy="tv-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">AL-IRSHAAD TV</p>
            <h2 id="tv-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              Programmes That <Accent>Inform & Inspire</Accent>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-muted">
              AL-IRSHAAD TV shares Islamic lectures, Tafsir, religious programmes and conversations that serve and educate the wider community.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Programme categories">
              {tvCategories.map((c) =>
              <li key={c} className="rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-[13px] font-medium text-navy">
                  {c}
                </li>
              )}
            </ul>
            {company.youtubeChannelUrl &&
            <LinkButton to={company.youtubeChannelUrl} icon={MonitorPlay} className="mt-8">
                Visit Our YouTube Channel
              </LinkButton>
            }
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.06}>
            <VideoSlot
              title={tvFeatured.title}
              url={tvFeatured.url}
              image={tvFeatured.image}
              imageAlt={tvFeatured.imageAlt}
              placeholderText="Add a YouTube link to show the featured programme here." />
            
          </Reveal>
          <Reveal className="lg:col-span-3" delay={0.12}>
            <div className="h-full rounded-[22px] border border-cream-300/70 bg-white p-5 shadow-soft">
              <h3 className="text-[17px] font-semibold">Latest Programmes</h3>
              <ul className="mt-5 space-y-4">
                {tvLatest.map((v) =>
                <li key={v.title}>
                    <VideoSlot size="sm" title={v.title} url={v.url} image={v.image} imageAlt={v.imageAlt} placeholderText="Episode link to be added" />
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="live-streaming" labelledBy="live-title" className="!pt-0">
        <div className="grid items-center gap-10 rounded-[30px] bg-cream-100 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div>
            <p className="eyebrow">Live streaming</p>
            <h2 id="live-title" className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem]">
              Broadcast Your Moments, <Accent>Live</Accent>
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-muted">
              AL-IRSHAAD TV broadcasts will appear here when a live stream is scheduled. We also stream lectures, conferences and ceremonies for clients.
            </p>
            <ul className="mt-8 space-y-5">
              {[
              { icon: Radio, title: 'AL-IRSHAAD TV broadcasts', text: 'Live lectures and programmes on our YouTube channel.' },
              { icon: Users, title: 'Streaming for your event', text: 'Reach remote family, members or attendees online.' },
              { icon: Clapperboard, title: 'Recorded for later', text: 'Edited recordings available after the live event.' }].
              map(({ icon: Icon, title, text }) =>
              <li key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-gold-600 shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[16.5px] font-semibold">{title}</h3>
                    <p className="mt-0.5 text-[14.5px] text-ink-muted">{text}</p>
                  </div>
                </li>
              )}
            </ul>
            <LinkButton to="/contact#enquiry" variant="gold" className="mt-9">
              Ask About Live Streaming
            </LinkButton>
          </div>
          <VideoSlot
            title="Live stream area"
            url={company.liveStreamUrl}
            image={images.mediaStream}
            imageAlt="Camera operator streaming a lecture"
            placeholderText="A live broadcast will appear here once a YouTube live link is added." />
          
        </div>
      </Section>

      <CtaBand
        eyebrow="Let’s create together"
        title="Let’s Create Impact Together"
        text="Need photography, video production, event coverage, branding or a programme feature on AL-IRSHAAD TV? Tell us about your project."
        image={images.mediaEditing}
        imageAlt="Video editing suite" />
      
    </>);

}