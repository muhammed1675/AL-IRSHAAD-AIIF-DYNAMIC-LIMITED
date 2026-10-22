import { Clapperboard, Layers, MessagesSquare, Plane, SlidersHorizontal, Sparkles, Users } from 'lucide-react';
import { images } from './images';
import type { Feature, GalleryItem, ServiceItem } from '../types/content';

export const divisions: (ServiceItem & {to: string;linkLabel: string;tags: string[];})[] = [
{
  title: 'Travels & Tours',
  description: 'Travel assistance, flight booking, study and work travel guidance, Hajj and Umrah packages, and tour experiences.',
  image: images.divTravel,
  imageAlt: 'Passenger aircraft flying above golden clouds at sunset',
  icon: Plane,
  to: '/travels-tours',
  linkLabel: 'Explore Travels & Tours',
  tags: ['Visa guidance', 'Flights', 'Hajj & Umrah', 'Tours']
},
{
  title: 'Media & TV',
  description:
  'Photography, videography, TV production, live streaming, graphic design, branding and video editing — through AL-IRSHAAD Dynamics Studios and AL-IRSHAAD TV.',
  image: images.divMedia,
  imageAlt: 'Professional cinema camera in a softly lit studio',
  icon: Clapperboard,
  to: '/media-tv',
  linkLabel: 'Explore Media & TV',
  tags: ['Production', 'Live streaming', 'Design']
},
{
  title: 'Events & Entertainment',
  description: 'Weddings, corporate events, conferences, decoration, entertainment and event logistics, planned around your occasion.',
  image: images.divEvents,
  imageAlt: 'Elegant conference ballroom with guests seated at round tables facing a stage',
  icon: Sparkles,
  to: '/events-entertainment',
  linkLabel: 'Explore Events & Entertainment',
  tags: ['Weddings', 'Corporate', 'Décor', 'Logistics']
}];


export const featuredWork: GalleryItem[] = [
{ title: 'Hajj & Umrah journeys', category: 'Travel', image: images.pilgrims, imageAlt: 'Pilgrims in white walking toward the Masjid al-Haram at dawn' },
{ title: 'Studio programme production', category: 'Media', image: images.tvStudio, imageAlt: 'Television studio set with two armchairs and warm lighting' },
{ title: 'Wedding receptions', category: 'Events', image: images.weddingCouple, imageAlt: 'Bride and groom entering a decorated reception hall' },
{ title: 'Heritage tours', category: 'Travel', image: images.istanbul, imageAlt: 'Istanbul skyline with mosques at sunset' },
{ title: 'Lecture live streaming', category: 'Media', image: images.mediaStream, imageAlt: 'Camera operator streaming a lecture in an auditorium' },
{ title: 'Evening celebrations', category: 'Events', image: images.eventOutdoor, imageAlt: 'Outdoor tent reception with chandeliers and string lights' },
{ title: 'Study-abroad travel', category: 'Travel', image: images.studyTravel, imageAlt: 'Two students with backpacks walking through an airport terminal' },
{ title: 'Live entertainment', category: 'Events', image: images.eventStage, imageAlt: 'Live band performing on a lit event stage' }];


export const homeBenefits: Feature[] = [
{
  title: 'Three complementary divisions',
  description: 'Travel, media and events under one company — one point of contact when your plans involve more than one.',
  icon: Layers
},
{
  title: 'Clear communication',
  description: 'Straightforward guidance on what we can help with, what you’ll need and what happens next.',
  icon: MessagesSquare
},
{
  title: 'Tailored to your needs',
  description: 'Every enquiry starts with your requirements, timeline and budget rather than a fixed template.',
  icon: SlidersHorizontal
},
{
  title: 'For individuals and organisations',
  description: 'Support for families, pilgrims, students, businesses, communities and institutions.',
  icon: Users
}];