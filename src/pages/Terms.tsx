import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Section } from '../components/Section';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../data/company';

export function Terms() {
  usePageMeta('Terms of Service', `Terms of Service for ${company.name}.`);

  return (
    <main>
      <section className="bg-navy-900 px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-site">
          <p className="eyebrow text-gold-300">Legal</p>
          <h1 className="mt-4 max-w-3xl text-[2.75rem] font-semibold leading-[1.05] sm:text-[4.5rem]">Terms of Service</h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">These terms explain the general conditions for using our website and engaging {company.name}.</p>
        </div>
      </section>

      <Section>
        <article className="prose prose-slate max-w-3xl prose-headings:font-display prose-headings:text-navy prose-a:text-gold-700">
          <p><strong>Last updated:</strong> October 22, 2026</p>
          <h2>1. About these terms</h2>
          <p>By using this website or contacting {company.name}, you agree to these Terms of Service. If you do not agree, please do not use the website.</p>
          <h2>2. Our services</h2>
          <p>We provide travel and tour assistance, media and television services, and events and entertainment services. Service availability, pricing, timelines and deliverables will be confirmed separately for each engagement.</p>
          <h2>3. Enquiries and bookings</h2>
          <p>Submitting an enquiry does not create a contract or guarantee a booking. A service becomes confirmed only after we have agreed the scope, price, payment terms and any required documentation with you in writing.</p>
          <h2>4. Client responsibilities</h2>
          <p>You agree to provide accurate information, respond promptly to reasonable requests, and provide any documents needed for your selected service. You are responsible for checking that names, dates and other submitted details are correct.</p>
          <h2>5. Travel services</h2>
          <p>Travel, visa, airline, accommodation and related services may depend on third-party providers and government decisions. We cannot guarantee visa approval, travel availability, entry permission or decisions made by third parties.</p>
          <h2>6. Payments, changes and cancellations</h2>
          <p>Any applicable deposits, balances, cancellation charges and refund conditions will be communicated before confirmation. Third-party fees may be non-refundable. Changes or cancellations should be requested as soon as possible.</p>
          <h2>7. Media and event services</h2>
          <p>For production, streaming, design and event engagements, the agreed proposal or invoice will define the deliverables, schedule, revision limits, equipment requirements and responsibility for venue or third-party arrangements.</p>
          <h2>8. Website content</h2>
          <p>We aim to keep the website accurate, but information may change without notice. Website content is provided for general information and should not be treated as professional, legal, immigration or financial advice.</p>
          <h2>9. Intellectual property</h2>
          <p>Unless otherwise stated, the website, branding, text, images and other materials belong to {company.name} or its licensors. You may not reproduce or commercially use them without written permission.</p>
          <h2>10. Limitation of liability</h2>
          <p>To the extent permitted by law, {company.name} is not liable for indirect losses, delays or failures caused by events outside our reasonable control, including third-party providers, weather, government action, network outages or incomplete information supplied by a client.</p>
          <h2>11. Privacy and contact</h2>
          <p>We handle personal information for responding to enquiries and providing agreed services. For questions about these terms, contact us through our <Link to="/contact">Contact Us</Link> page or WhatsApp at +234 810 844 1454.</p>
          <h2>12. Governing law</h2>
          <p>These terms are governed by the laws applicable in Nigeria. Any dispute will first be addressed in good faith between the parties before formal action is taken.</p>
          <p className="not-prose mt-10"><Link to="/" className="inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-600"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home</Link></p>
        </article>
      </Section>
    </main>
  );
}
