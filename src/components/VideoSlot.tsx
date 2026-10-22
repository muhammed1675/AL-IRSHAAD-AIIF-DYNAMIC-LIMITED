import React from 'react';
import { Film } from 'lucide-react';
import { toYouTubeEmbed } from '../utils/youtube';

type VideoSlotProps = {
  title: string;
  image: string;
  imageAlt: string;
  url?: string;
  meta?: string;
  placeholderText?: string;
  size?: 'lg' | 'sm';
};

/** Embeds a YouTube video when a real URL is supplied; otherwise shows a clearly marked placeholder. */
export function VideoSlot({ title, image, imageAlt, url = '', meta, placeholderText = 'Video link to be added', size = 'lg' }: VideoSlotProps) {
  const embed = toYouTubeEmbed(url);

  if (size === 'sm') {
    return (
      <div className="flex items-center gap-4">
        <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-navy-900">
          {embed ?
          <iframe src={embed} title={title} loading="lazy" className="h-full w-full" allowFullScreen /> :

          <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover opacity-80" />
          }
        </div>
        <div className="min-w-0">
          <p className="font-display text-[15px] font-semibold leading-snug text-navy">{title}</p>
          <p className="mt-0.5 text-[12.5px] text-ink-soft">{embed ? meta : placeholderText}</p>
        </div>
      </div>);

  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-[22px] bg-navy-900">
      {embed ?
      <iframe
        src={embed}
        title={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen /> :


      <>
          <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40">
              <Film className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg font-semibold">{title}</p>
            <p className="mt-1 max-w-xs text-[13.5px] text-white/75">{placeholderText}</p>
          </div>
        </>
      }
    </div>);

}