/**
 * Central company configuration.
 * Fill in confirmed details before launch — every empty value is shown on the
 * site as a clearly marked placeholder (or the related control is hidden).
 */
export const company = {
  name: 'AL-IRSHAAD AIIF DYNAMIC LIMITED',
  shortName: 'AL-IRSHAAD',
  subName: 'AIIF DYNAMIC LIMITED',
  description:
  'A multi-service company working across travels and tours, media and television, and events and entertainment — helping individuals, families and organisations plan journeys, tell stories and host meaningful occasions.',
  /** International format, digits only — e.g. "2348031234567". Leave empty until confirmed. */
  whatsappNumber: '',
  /** Display format — e.g. "+234 803 123 4567". */
  phone: '',
  email: '',
  address: '',
  hours: '',
  /** Optional Google Maps link for the confirmed office address. */
  mapUrl: '',
  socials: [] as {label: string;href: string;}[],
  /** AL-IRSHAAD TV YouTube channel URL. */
  youtubeChannelUrl: '',
  /** YouTube live or video URL used in the live-streaming area. */
  liveStreamUrl: ''
};

export const isWhatsAppConfigured = company.whatsappNumber.replace(/\D/g, '').length >= 10;