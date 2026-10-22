import { Briefcase, ClipboardList, Compass, FileCheck2, GraduationCap, Headphones, HeartHandshake, ListChecks, Map, MessageCircle, MoonStar, Plane, ShieldCheck } from 'lucide-react';
import { images } from './images';
import type { Feature, FormField, ProcessStep, ServiceItem } from '../types/content';

export const travelServices: ServiceItem[] = [
{
  title: 'Visa Application Assistance',
  description: 'Guidance on requirements, document preparation and application steps for your destination. Decisions rest with the relevant embassy.',
  image: images.travelDocs,
  imageAlt: 'Passport and boarding pass on a desk beside a laptop',
  icon: FileCheck2
},
{
  title: 'Flight Booking Assistance',
  description: 'Help comparing suitable domestic and international flight options and arranging your booking.',
  image: images.divTravel,
  imageAlt: 'Aircraft flying above clouds at sunset',
  icon: Plane
},
{
  title: 'Study-Abroad Guidance',
  description: 'Support researching programmes, preparing admission applications and planning travel for study.',
  image: images.studyTravel,
  imageAlt: 'Students with backpacks in an airport terminal',
  icon: GraduationCap
},
{
  title: 'Work-Travel Assistance',
  description: 'Guidance on travel planning and documentation for people travelling or relocating for work.',
  image: images.workTravel,
  imageAlt: 'Professional with a suitcase looking out at aircraft from an airport window',
  icon: Briefcase
},
{
  title: 'Hajj & Umrah Packages',
  description: 'Organised pilgrimage packages with guidance before and during your journey, handled with care and respect.',
  image: images.madinah,
  imageAlt: 'Masjid an-Nabawi in Madinah with its green dome and minarets',
  icon: MoonStar
},
{
  title: 'Domestic & International Tours',
  description: 'Leisure and heritage tour experiences for individuals, families and groups.',
  image: images.tourTraveller,
  imageAlt: 'Traveller overlooking a historic city of domes and minarets at golden hour',
  icon: Map
}];


export const destinations = [
{ name: 'Saudi Arabia', focus: 'Hajj & Umrah', image: images.homeHero, imageAlt: 'Masjid al-Haram in Makkah', position: '55% 70%' },
{ name: 'Türkiye', focus: 'History & culture', image: images.istanbul, imageAlt: 'Istanbul skyline with the Blue Mosque at sunset', position: '60% 40%' },
{ name: 'United Arab Emirates', focus: 'Leisure & business', image: images.dubai, imageAlt: 'Dubai skyline with the Burj Khalifa at dusk', position: '50% 40%' },
{ name: 'United Kingdom', focus: 'Study & work', image: images.london, imageAlt: 'Westminster and Elizabeth Tower in London', position: '50% 40%' },
{ name: 'Malaysia', focus: 'Tourism & culture', image: images.kualaLumpur, imageAlt: 'Petronas Twin Towers in Kuala Lumpur at blue hour', position: '50% 40%' }];


export const travelSteps: ProcessStep[] = [
{ title: 'Choose a service', description: 'Select the travel service you’d like help with.', icon: ListChecks },
{ title: 'Share your details', description: 'Tell us a little about your plans in the short form.', icon: ClipboardList },
{ title: 'Continue to WhatsApp', description: 'If you wish, send your prepared enquiry directly on WhatsApp.', icon: MessageCircle },
{ title: 'Our team follows up', description: 'We discuss your requirements, what’s needed and the next steps.', icon: Headphones }];


export const travelApproach: Feature[] = [
{ title: 'Honest expectations', description: 'We explain what we can assist with and what depends on embassies, institutions or airlines.', icon: ShieldCheck },
{ title: 'Guidance at each stage', description: 'From your first question to departure, you’ll know what comes next.', icon: Compass },
{ title: 'Respectful pilgrimage support', description: 'Hajj and Umrah enquiries handled with the care these journeys deserve.', icon: HeartHandshake }];


export const travelFormFields: FormField[] = [
{ name: 'fullName', label: 'Full name', type: 'text', required: true, placeholder: 'Your full name', autoComplete: 'name' },
{ name: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: 'e.g. 0803 123 4567', autoComplete: 'tel' },
{ name: 'service', label: 'Service of interest', type: 'select', required: true, placeholder: 'Select a service', options: travelServices.map((s) => s.title) },
{
  name: 'destination',
  label: 'Destination',
  type: 'select',
  placeholder: 'Select a destination',
  options: [...destinations.map((d) => d.name), 'Other / not sure yet']
},
{ name: 'travelDate', label: 'Preferred travel date', type: 'date' },
{ name: 'travellers', label: 'Number of travellers', type: 'number', placeholder: 'e.g. 2' },
{ name: 'message', label: 'Additional information', type: 'textarea', placeholder: 'Tell us more about your travel plans…' }];