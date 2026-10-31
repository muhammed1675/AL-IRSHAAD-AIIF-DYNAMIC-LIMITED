import React from 'react';

type GlyphProps = { className?: string };

const svgProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false } as const;

function FacebookGlyph({ className }: GlyphProps) {
  return (
    <svg {...svgProps} fill="currentColor" className={className}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />
    </svg>
  );
}

function InstagramGlyph({ className }: GlyphProps) {
  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeGlyph({ className }: GlyphProps) {
  return (
    <svg {...svgProps} fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 9.2v5.6l4.8-2.8L10 9.2Z" />
    </svg>
  );
}

function TikTokGlyph({ className }: GlyphProps) {
  return (
    <svg {...svgProps} fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

/** Round social icon link. Falls back to the text label for networks without an icon. */
export function SocialIcon({ label, href }: { label: string; href: string }) {
  const cls = 'h-[18px] w-[18px]';
  const key = label.toLowerCase();
  const icon =
  key === 'facebook' ? <FacebookGlyph className={cls} /> :
  key === 'instagram' ? <InstagramGlyph className={cls} /> :
  key === 'youtube' ? <YouTubeGlyph className={cls} /> :
  key === 'tiktok' ? <TikTokGlyph className={cls} /> :
  null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 min-w-10 place-items-center rounded-full border border-white/20 px-3 text-white transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-white">
      {icon ?? <span className="text-[13px]">{label}</span>}
    </a>
  );
}
