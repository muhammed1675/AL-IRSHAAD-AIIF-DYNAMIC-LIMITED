import { Eye, Gem, Handshake, Layers, MessagesSquare, Target, UserCheck } from 'lucide-react';
import { images } from './images';
import type { Feature } from '../types/content';

export const missionVision = [
{
  label: 'Our Mission',
  icon: Target,
  text: 'To provide reliable, professional and well-coordinated services in travel, media and events that create real value for the people and organisations we serve.'
},
{
  label: 'Our Vision',
  icon: Eye,
  text: 'To be a respected multi-service company recognised for integrity, quality and service that makes a positive difference in our communities.'
}];


export const values = { label: 'Our Values', icon: Gem, items: ['Integrity', 'Professionalism', 'Customer focus', 'Excellence', 'Meaningful service'] };

export const aboutDivisions = [
{
  number: '01',
  title: 'Travels & Tours',
  text: 'Visa and flight booking assistance, study and work travel guidance, Hajj and Umrah packages, and domestic and international tours.',
  to: '/travels-tours',
  image: images.pilgrims,
  imageAlt: 'Pilgrims walking toward the Masjid al-Haram'
},
{
  number: '02',
  title: 'Media & TV',
  text: 'AL-IRSHAAD Dynamics Studios and AL-IRSHAAD TV — photography, videography, television production, live streaming, design and editing.',
  to: '/media-tv',
  image: images.tvStudio,
  imageAlt: 'Television studio set'
},
{
  number: '03',
  title: 'Events & Entertainment',
  text: 'Weddings, corporate events, conferences, decoration and styling, entertainment and event logistics.',
  to: '/events-entertainment',
  image: images.weddingCouple,
  imageAlt: 'Couple entering a decorated wedding reception'
}];


export const aboutApproach: Feature[] = [
{ title: 'One team, three specialisms', description: 'When a journey, production or event involves more than one service, you deal with one company.', icon: Layers },
{ title: 'Listening first', description: 'We start with your needs and constraints before suggesting a plan.', icon: UserCheck },
{ title: 'Clear, honest communication', description: 'We set realistic expectations and keep you informed.', icon: MessagesSquare },
{ title: 'Respect for every client', description: 'From pilgrims to corporate teams, every enquiry receives the same care.', icon: Handshake }];