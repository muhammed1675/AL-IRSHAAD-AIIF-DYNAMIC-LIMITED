import React from 'react';
import { Film, Play } from 'lucide-react';
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

/** Embeds the featured YouTube video and shows YouTube thumbnails on small programme cards. */
export function VideoSlot({
  title,
  image,
  imageAlt,
  url = '',
  meta,
  placeholderText = 'Video link to be added',
  size = 'lg'
}: VideoSlotProps) {
  const embed = toYouTubeEmbed(url);
  const videoId = embed?.match(/\/embed\/([^?&/]+)/)?.[1];
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : image;

  if (size === 'sm') {
    const preview = (
      <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-navy-900">
        <img
          src={thumbnail}
          alt={imageAlt || title}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = image;
          }}
        />
        {embed && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20" aria-hidden="true">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-white shadow-lg">
              <Play className="h-4 w-4 fill-current" />
            </span>
          </span>
        )}
      </div>
    );

    return (
      <div className="flex items-center gap-4">
        {embed ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${title} on YouTube`}
            className="block shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          >
            {preview}
          </a>
        ) : preview}

        <div className="min-w-0">
          <p className="font-display text-[13px] font-semibold leading-snug text-navy line-clamp-3">
            {title}
          </p>
          {embed ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-[12px] text-ink-soft hover:text-green-800"
            >
              Watch on YouTube →
            </a>
          ) : (
            <p className="mt-0.5 text-[12px] text-ink-soft">{placeholderText}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-[22px] bg-navy-900">
      {embed ? (
        <iframe
          src={embed}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40">
              <Film className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg font-semibold">{title}</p>
            <p className="mt-1 max-w-xs text-[13.5px] text-white/75">{placeholderText}</p>
          </div>
        </>
      )}
    </div>
  );
}
