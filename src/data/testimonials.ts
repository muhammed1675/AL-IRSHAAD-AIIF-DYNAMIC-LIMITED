export type Testimonial = { quote: string; name: string; detail: string };

/**
 * Set to true once real client feedback has been added below.
 * While false, the testimonials section is not shown on the site.
 */
export const testimonialsEnabled = false;

/** PLACEHOLDERS — replace each entry with a real, approved client testimonial. */
export const testimonials: Testimonial[] = [
{ quote: 'Client testimonial goes here.', name: 'Client name', detail: 'Travels & Tours' },
{ quote: 'Client testimonial goes here.', name: 'Client name', detail: 'Media & TV' },
{ quote: 'Client testimonial goes here.', name: 'Client name', detail: 'Events & Entertainment' }];
