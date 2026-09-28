import Link from 'next/link';
import { Mail, MessageSquare, ShieldCheck, ArrowRight, HelpCircle, FileText, Headphones } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact Catalyst Creation | Shopify App Support & Custom Development',
  description: 'Get in touch with the Catalyst Creation Shopify engineering team for SKU Bulk Generator support, custom app development, or catalog automation consultations.',
  keywords: [
    'Contact Catalyst Creation',
    'Shopify App Support',
    'SKU Bulk Generator support',
    'Custom Shopify app inquiry',
    'Shopify engineering consultation'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Catalyst Creation | Shopify App Support & Custom Development',
    description: 'Get in touch with the Catalyst Creation Shopify engineering team for SKU Bulk Generator support, custom app development, or catalog automation consultations.',
    url: 'https://catalyst-creation-site.vercel.app/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Catalyst Creation',
    url: 'https://catalyst-creation-site.vercel.app/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      url: 'https://catalyst-creation-site.vercel.app',
      email: 'catalystcreationapps@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'catalystcreationapps@gmail.com',
        contactType: 'customer support',
        availableLanguage: 'English'
      }
    }
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="container-custom" style={{ maxWidth: '960px' }}>
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <Headphones size={16} color="#3A925F" />
            <span>Direct Merchant Support</span>
          </span>
          <h1 style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            color: '#132937',
            letterSpacing: '-0.03em',
            marginTop: '0.75rem',
            lineHeight: '1.2'
          }}>
            Contact Our Shopify Engineering Team
          </h1>
          <p style={{
            color: '#475569',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '680px',
            margin: '0.75rem auto 0 auto'
          }}>
            Have a question about SKU Bulk Generator, need help with a custom rule template, or want to discuss a dedicated Shopify store development project? We are here to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          {/* Form Card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#132937', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare size={20} color="#3A925F" /> Send Us a Message
            </h2>
            <ContactForm defaultService="SKU Bulk Generator Inquiries" />
          </div>

          {/* Direct Channels & Resources */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email Card */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} color="#3A925F" /> Direct Email
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                For merchant inquiries, bug reports, and partnership opportunities:
              </p>
              <a
                href="mailto:catalystcreationapps@gmail.com"
                style={{ color: '#3A925F', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}
              >
                catalystcreationapps@gmail.com
              </a>
            </div>

            {/* Quick Self-Serve Resources */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HelpCircle size={18} color="#3A925F" /> Looking for Quick Answers?
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Browse our documentation and frequently asked merchant questions:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <Link href="/faq" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={15} color="#3A925F" /> Frequently Asked Questions <ArrowRight size={14} color="#3A925F" />
                  </Link>
                </li>
                <li>
                  <Link href="/sku-app-doc" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <FileText size={15} color="#3A925F" /> SKU Token Documentation <ArrowRight size={14} color="#3A925F" />
                  </Link>
                </li>
                <li>
                  <Link href="/tutorial" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={15} color="#3A925F" /> Step-by-Step Setup Guides <ArrowRight size={14} color="#3A925F" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
