import React from 'react';

/**
 * The shared AL-IRSHAAD sculpted silhouettes, defined once and referenced via
 * `.hero-clip` and `.sculpt-clip` (see index.css). Paths use objectBoundingBox
 * units so they scale with whatever element they clip.
 */
export function CurveDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="pointer-events-none absolute">
      <defs>
        {/* Desktop hero: diagonal sweep with a soft S-shaped tab of cream reaching into the photograph */}
        <clipPath id="al-hero-curve" clipPathUnits="objectBoundingBox">
          <path d="M0.32,0 H1 V1 H0.02 C0.06,0.9 0.08,0.8 0.12,0.72 C0.16,0.64 0.24,0.62 0.24,0.52 C0.24,0.42 0.16,0.4 0.17,0.3 C0.18,0.18 0.26,0.06 0.32,0 Z" />
        </clipPath>
        {/* Mobile hero: the same S-sweep rotated onto the top edge */}
        <clipPath id="al-hero-curve-mobile" clipPathUnits="objectBoundingBox">
          <path d="M0,0.2 C0.14,0.2 0.2,0.06 0.36,0.06 C0.5,0.06 0.56,0 0.7,0 H1 V1 H0 Z" />
        </clipPath>
        {/* Secondary images: a small sculpted step in the top-right corner */}
        <clipPath id="al-sculpt" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H0.72 C0.83,0 0.85,0.14 0.94,0.14 H1 V1 H0 Z" />
        </clipPath>
      </defs>
    </svg>);

}