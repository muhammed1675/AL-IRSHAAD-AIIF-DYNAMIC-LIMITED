/**
 * Central company configuration.
 * Fill in confirmed details before launch — every empty value is shown on the
 * site as a clearly marked placeholder (or the related control is hidden).
 */
export const company = {
  name: 'AL-IRSHAAD AIIF DYNAMIC LIMITED',
  shortName: 'AL-IRSHAAD',
  /** Confirmed Corporate Affairs Commission registration number. */
  cacRegistrationNumber: 'RC 9933483',
  subName: 'AIIF DYNAMIC LIMITED',
  description:
  'A multi-service company working across travels and tours, media and television, and events and entertainment — helping individuals, families and organisations plan journeys, tell stories and host meaningful occasions.',
  /** International format, digits only — e.g. "2348031234567". Leave empty until confirmed. */
  whatsappNumber: '2348108441454',
  /** Display format — e.g. "+234 803 123 4567". */
  phone: '+2348108441454',
  email: '',
  address: 'Behind Nature-Nuture School, Ajegunle Market, Oyo, Oyo, Nigeria, 211101',
  hours: '',
  /** Optional Google Maps link for the confirmed office address. */
  mapUrl: '',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/share/1J2iEJhyTV/?mibextid=wwXIfr' },
    { label: 'YouTube', href: 'https://youtube.com/@alirshaadtv?si=qFmvvq4LGc11F_FR' },
    { label: 'Instagram', href: 'https://www.instagram.com/alirshaad_dynamics?rpxt=MWZjZDB3MGU9uam5sOQ==' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@alirshaad.dynamic?_r=1&_t=ZS-9AlpjRMxKfE' },
  ] as {label: string;href: string;}[],
  /** AL-IRSHAAD TV YouTube channel URL. */
  youtubeChannelUrl: 'https://youtube.com/@alirshaadtv?si=qFmvvq4LGc11F_FR',
  /** YouTube live or video URL used in the live-streaming area. */
  liveStreamUrl: ''
};

export const isWhatsAppConfigured = company.whatsappNumber.replace(/\D/g, '').length >= 10;
