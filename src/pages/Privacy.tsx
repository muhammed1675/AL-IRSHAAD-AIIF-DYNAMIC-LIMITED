import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Section } from '../components/Section';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../data/company';

export function Privacy() {
  usePageMeta('Privacy Policy', `Privacy Policy for ${company.name}.`);

  return (
    <main>
      <section className="bg-navy-900 px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-site">
          <p className="eyebrow text-gold-300">Legal</p>
          <h1 className="mt-4 max-w-3xl text-[2.75rem] font-semibold leading-[1.05] sm:text-[4.5rem]">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">How {company.name} collects, uses and protects information shared through this website.</p>
        </div>
      </section>

      <Section>
        <article className="prose prose-slate max-w-3xl prose-headings:font-display prose-headings:text-navy prose-a:text-gold-700">
          <p><strong>Last updated:</strong> October 22, 2026</p>
          <h2>1. Information we collect</h2>
          <p>We may collect your name, email address, phone number, service preferences and message when you contact us through our enquiry form, phone, email or WhatsApp. We may also receive information you choose to provide when discussing a booking or service.</p>
          <h2>2. How we use information</h2>
          <p>We use information to respond to enquiries, prepare quotations, provide requested travel, media or event services, communicate about an engagement, and improve our website and customer experience.</p>
          <h2>3. WhatsApp, email and third parties</h2>
          <p>If you choose to contact us through WhatsApp, email or a social media platform, your information is also processed by that provider under its own privacy policy. Some services we arrange may require sharing relevant information with airlines, accommodation providers, event suppliers, authorities or other service partners.</p>
          <h2>4. Cookies and website technology</h2>
          <p>Our website may use essential browser technology to operate correctly and may use basic analytics or embedded media where enabled. You can control cookies through your browser settings. Disabling some cookies may affect website functionality.</p>
          <h2>5. Retention and security</h2>
          <p>We keep information only for as long as reasonably necessary for the purpose it was collected, legal obligations, record keeping and resolving disputes. We take reasonable administrative and technical steps to protect personal information, but no online transmission or storage system can be guaranteed completely secure.</p>
          <h2>6. Your choices</h2>
          <p>You may ask us to correct inaccurate information, explain how your information is being used, or request deletion where legally appropriate. We may need to retain certain records where required by law or necessary to establish, exercise or defend a legal claim.</p>
          <h2>7. Children</h2>
          <p>Our website is not directed at children. Please do not submit personal information on behalf of a child unless you are authorised to do so.</p>
          <h2>8. Changes to this policy</h2>
          <p>We may update this policy when our services, technology or legal obligations change. The latest version will be published on this page with its updated date.</p>
          <h2>9. Contact us</h2>
          <p>For privacy questions or requests, contact us through our <Link to="/contact">Contact Us</Link> page or WhatsApp at {company.phone}.</p>
          <p className="not-prose mt-10"><Link to="/" className="inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-600"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home</Link></p>
        </article>
      </Section>
    </main>
  );
}
