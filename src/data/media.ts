import { Camera, Film, PenTool, Radio, Tv, Video } from 'lucide-react';
import { images } from './images';
import type { GalleryItem, ServiceItem } from '../types/content';

export const mediaServices: ServiceItem[] = [
{
  title: 'Photography',
  description: 'Event, portrait, product and corporate photography, edited and delivered ready to use.',
  image: images.mediaPhoto,
  imageAlt: 'Photographer capturing an event with a professional camera',
  icon: Camera
},
{
  title: 'Videography',
  description: 'Event coverage, interviews, documentaries and promotional films.',
  image: images.divMedia,
  imageAlt: 'Professional cinema camera in a studio',
  icon: Video
},
{
  title: 'Television Production',
  description: 'Studio and location production for educational, religious and community programming.',
  image: images.tvStudio,
  imageAlt: 'Talk-show studio set with armchairs and a blue backdrop',
  icon: Tv
},
{
  title: 'Live Streaming',
  description: 'Streaming of lectures, conferences, ceremonies and programmes to your audience online.',
  image: images.mediaStream,
  imageAlt: 'Camera operator live-streaming a lecture',
  icon: Radio
},
{
  title: 'Graphic Design',
  description: 'Print and digital design for campaigns, social media, publications and events.',
  image: images.mediaDesign,
  imageAlt: 'Designer workstation with colour swatches and layouts',
  icon: PenTool
},
{
  title: 'Branding & Video Editing',
  description: 'Brand identity, motion graphics and post-production editing for finished, consistent content.',
  image: images.mediaEditing,
  imageAlt: 'Video editing suite with timelines on two monitors',
  icon: Film
}];


export const mediaPortfolio: GalleryItem[] = [
{ title: 'Studio programmes', category: 'TV Programmes', image: images.tvStudio, imageAlt: 'Television studio set prepared for a programme' },
{ title: 'Conference coverage', category: 'Event Coverage', image: images.divEvents, imageAlt: 'Conference audience facing a stage' },
{ title: 'Pilgrimage documentary', category: 'Documentary', image: images.pilgrims, imageAlt: 'Pilgrims walking toward the Masjid al-Haram' },
{ title: 'Wedding photography', category: 'Photography', image: images.weddingCouple, imageAlt: 'Bride and groom entering a reception hall' },
{ title: 'Destination promotion', category: 'Promotional', image: images.dubai, imageAlt: 'Dubai skyline at dusk' },
{ title: 'Live performance coverage', category: 'Event Coverage', image: images.eventStage, imageAlt: 'Band performing on stage under lights' },
{ title: 'Brand & print design', category: 'Branding', image: images.mediaDesign, imageAlt: 'Brand design materials on a desk' },
{ title: 'Corporate profile film', category: 'Promotional', image: images.teamMeeting, imageAlt: 'Team meeting in a bright office' }];


export const tvCategories = ['Islamic lectures', 'Tafsir', 'Religious programmes', 'Interviews', 'Community features'];

/** Add real YouTube URLs to `url` to turn each placeholder into a working embed. */
export const tvFeatured = {
  title: 'AL-IRSHAAD TV — featured programme',
  url: '',
  image: images.tvStudio,
  imageAlt: 'AL-IRSHAAD TV style studio set'
};

export const tvLatest = [
{ title: 'Tafsir series', url: '', image: images.mediaStream, imageAlt: 'Lecture being recorded in an auditorium' },
{ title: 'Islamic lecture', url: '', image: images.madinah, imageAlt: 'Masjid an-Nabawi in Madinah' },
{ title: 'Interview programme', url: '', image: images.divMedia, imageAlt: 'Studio camera ready for an interview' }];