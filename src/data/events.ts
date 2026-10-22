import { Camera, ClipboardCheck, Flower2, Heart, HeartHandshake, Lightbulb, MessagesSquare, Music, Palette, PartyPopper, Presentation, Truck, Users, Wallet } from 'lucide-react';
import { images } from './images';
import type { Feature, FormField, GalleryItem, ProcessStep, ServiceItem } from '../types/content';

export const eventServices: ServiceItem[] = [
{
  title: 'Wedding Planning & Coordination',
  description: 'Planning, supplier coordination and on-the-day management, shaped around your style and culture.',
  image: images.weddingCouple,
  imageAlt: 'Bride and groom entering a decorated reception',
  icon: Heart
},
{
  title: 'Corporate Events & Conferences',
  description: 'Conferences, seminars, launches and corporate gatherings, organised with professional structure.',
  image: images.divEvents,
  imageAlt: 'Conference ballroom with a stage and seated guests',
  icon: Presentation
},
{
  title: 'Decoration & Styling',
  description: 'Florals, table styling, backdrops and lighting designed to suit your venue and theme.',
  image: images.eventDecor,
  imageAlt: 'Table setting with gold-rimmed plates and ivory flowers',
  icon: Flower2
},
{
  title: 'Entertainment & Performers',
  description: 'Live music, MCs, performers and sound arranged to fit the tone of your occasion.',
  image: images.eventStage,
  imageAlt: 'Band performing on a lit stage',
  icon: Music
},
{
  title: 'Logistics & Equipment',
  description: 'Coordination of sound, lighting, staging, seating and on-site setup.',
  image: images.eventLogistics,
  imageAlt: 'Crew setting up lighting and sound equipment in a ballroom',
  icon: Truck
},
{
  title: 'Photography & Video Coverage',
  description: 'Event coverage from our Media & TV division, so your occasion is captured properly.',
  image: images.mediaPhoto,
  imageAlt: 'Photographer capturing a live event',
  icon: Camera
}];


export const eventHighlights: Feature[] = [
{ title: 'Creative planning', description: '', icon: Lightbulb },
{ title: 'Coordinated team', description: '', icon: Users },
{ title: 'Considered styling', description: '', icon: Palette },
{ title: 'Attentive support', description: '', icon: HeartHandshake }];


export const eventSteps: ProcessStep[] = [
{ title: 'Initial consultation', description: 'Tell us about your occasion, date, venue ideas and guest numbers.', icon: MessagesSquare },
{ title: 'Requirements & budget', description: 'We agree the services you need and a plan that fits your budget.', icon: Wallet },
{ title: 'Planning & coordination', description: 'We coordinate décor, suppliers, entertainment and logistics.', icon: ClipboardCheck },
{ title: 'Delivery & support', description: 'Our team manages the details on the day so you can be present.', icon: PartyPopper }];


export const eventGallery: GalleryItem[] = [
{ title: 'Reception hall styling', category: 'Weddings', image: images.eventsHero, imageAlt: 'Wedding reception hall with chandeliers and florals' },
{ title: 'Wedding entrance', category: 'Weddings', image: images.weddingCouple, imageAlt: 'Couple entering their wedding reception' },
{ title: 'Conference setup', category: 'Conferences', image: images.divEvents, imageAlt: 'Ballroom conference with stage' },
{ title: 'Table décor', category: 'Weddings', image: images.eventDecor, imageAlt: 'Elegant table centrepiece with candles' },
{ title: 'Production & staging', category: 'Corporate', image: images.eventLogistics, imageAlt: 'Crew preparing stage lighting and sound' },
{ title: 'Live entertainment', category: 'Corporate', image: images.eventStage, imageAlt: 'Band performing for guests' },
{ title: 'Garden reception', category: 'Outdoor', image: images.eventOutdoor, imageAlt: 'Outdoor tent reception at dusk' }];


export const eventFormFields: FormField[] = [
{ name: 'fullName', label: 'Full name', type: 'text', required: true, placeholder: 'Your full name', autoComplete: 'name' },
{ name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: 'e.g. 0803 123 4567', autoComplete: 'tel' },
{ name: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
{
  name: 'eventType',
  label: 'Type of event',
  type: 'select',
  required: true,
  placeholder: 'Select event type',
  options: ['Wedding', 'Corporate event', 'Conference / seminar', 'Birthday or private celebration', 'Religious or community event', 'Other']
},
{ name: 'eventDate', label: 'Proposed date', type: 'date' },
{ name: 'location', label: 'Location / venue', type: 'text', placeholder: 'City or venue name' },
{ name: 'guests', label: 'Estimated guest count', type: 'number', placeholder: 'e.g. 150' },
{
  name: 'services',
  label: 'Services required',
  type: 'checkboxes',
  options: ['Planning & coordination', 'Decoration & styling', 'Entertainment', 'Logistics & equipment', 'Photography & video', 'Not sure yet']
},
{ name: 'message', label: 'Additional requirements', type: 'textarea', placeholder: 'Theme, style, timings or anything else we should know…' }];