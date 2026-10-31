import { company } from './company';

export type FaqItem = { question: string; answer: string };

/** Edit freely — each entry becomes one accordion item on the home page. */
export const faqs: FaqItem[] = [
{
  question: 'What services does AL-IRSHAAD offer?',
  answer:
  'We work across three divisions: Travels & Tours (visa guidance, flights, study and work travel, Hajj and Umrah packages, tours), Media & TV (photography, videography, TV production, live streaming, design and editing) and Events & Entertainment (weddings, corporate events, décor and logistics).'
},
{
  question: 'How do I make an enquiry?',
  answer:
  'Use the enquiry form on the Contact page or on any division page. Your details are prepared as a message that opens in WhatsApp, and you decide whether to send it. You can also call or email us using the details on our Contact page.'
},
{
  question: 'Do you guarantee visa approval?',
  answer:
  'No. Visa decisions are made by the relevant embassy or consulate. We guide you on requirements, document preparation and the application steps, and explain clearly what depends on the embassy.'
},
{
  question: 'Do you organise Hajj and Umrah?',
  answer:
  'Yes. We offer Hajj and Umrah packages with guidance before and during the journey. Send us an enquiry and our team will share current details and what is needed from you.'
},
{
  question: 'How much do your services cost?',
  answer:
  'It depends on what you need — destination, dates and number of travellers for travel, scope for media work, and size and style for events. Tell us your requirements and our team will respond with the next steps.'
},
{
  question: 'Can one team handle both my event and its media coverage?',
  answer:
  'Yes. Our divisions work together, so an event can be planned with photography, video or live streaming coordinated alongside it, with one point of contact.'
},
{
  question: 'Is it safe to share my details in the form?',
  answer:
  'Please share only the basics we ask for. Do not include passport numbers, bank details or other sensitive documents in the form — our team will tell you what is needed and how to send it when they follow up. See our Privacy Policy for how information is handled.'
},
{
  question: 'Where are you located?',
  answer: `Our office is at ${company.address}.`
}];
