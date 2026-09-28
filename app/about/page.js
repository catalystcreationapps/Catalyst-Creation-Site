import Link from 'next/link';
import { ShieldCheck, Cpu, Code2, Sparkles, CheckCircle2, ArrowRight, HeartHandshake, Layers, Mail } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export const metadata = {
  title: 'About Catalyst Creation | Shopify App Development & Engineering',
  description: 'Learn about Catalyst Creation, our 5+ years of hands-on Shopify development experience, our mission to automate ecommerce catalog operations, and our merchant-first philosophy.',
  keywords: [
    'About Catalyst Creation',
    'Shopify App Developer',
    'Shopify engineering team',
    'Shopify catalog automation',
    'SKU Bulk Generator developer'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/about',
  },
  openGraph: {
    title: 'About Catalyst Creation | Shopify App Development & Engineering',
    description: 'Learn about Catalyst Creation, our 5+ years of hands-on Shopify development experience, our mission to automate ecommerce catalog operations, and our merchant-first philosophy.',
    url: 'https://catalyst-creation-site.vercel.app/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Catalyst Creation',
    url: 'https://catalyst-creation-site.vercel.app/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      url: 'https://catalyst-creation-site.vercel.app',
      description: 'Specialized Shopify development team building high-performance apps and store automation tools for ecommerce merchants.',
      founder: {
        '@type': 'Person',
        name: 'Catalyst Creation Engineering Team'
      },
      foundingDate: '2021',
      sameAs: [
        'https://apps.shopify.com/sku-bulk-generator'
      ]
    }
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="container-custom" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <Sparkles size={16} color="#3A925F" />
            <span>Our Story & Mission</span>
          </span>
          <h1 style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            color: '#132937',
            letterSpacing: '-0.03em',
            marginTop: '0.75rem',
            lineHeight: '1.2'
          }}>
            About Catalyst Creation
          </h1>
          <p style={{
            color: '#475569',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '720px',
            margin: '0.75rem auto 0 auto'
          }}>
            We build simple, dependable Shopify apps and store solutions designed to eliminate repetitive ecommerce tasks and give store owners their time back.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1.25rem' }}>
            Who We Are
          </h2>
          <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            Catalyst Creation is an independent Shopify engineering team founded by developers and ecommerce operators with <strong>5+ years of active Shopify ecosystem experience</strong>. Having managed store catalogs and inventory pipelines ourselves, we intimately understand the daily operational headaches merchant teams face.
          </p>
          <p style={{ color: '#334155', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
            We started with a straightforward observation: managing product codes, catalog structure, and variant inventory in spreadsheets is tedious, risky, and error-prone. That realization led directly to the creation of our flagship tool, <Link href="/shopify-sku-generator" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>SKU Bulk Generator</Link>, which now automates millions of product variant SKUs for Shopify stores around the globe.
          </p>
        </div>

        {/* Principles Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em' }}>
              Our Core Principles
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={22} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Store Data Safety First</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Catalog mutations are destructive if misconfigured. We build pre-execution dry-run previews, collision checks, and 1-click snapshot rollbacks into every app we engineer.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Cpu size={22} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Shopify Native Architecture</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                We build directly on official Shopify GraphQL Admin APIs (2026-07) and App Bridge v3, adhering to official Shopify App Store security and performance guidelines.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <HeartHandshake size={22} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Merchant-First Support</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                When you contact our support, you communicate directly with senior software engineers who build and maintain our Shopify applications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', background: '#f8fafc', borderColor: '#cbd5e1' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#132937', marginBottom: '0.75rem' }}>
            Work With Us
          </h3>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 1.75rem auto', lineHeight: '1.6' }}>
            Whether you need to automate millions of catalog SKUs or require custom Shopify app development, we are ready to assist.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/shopify-sku-generator" className="btn-primary">
              <span>Explore SKU Generator</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>Contact Our Team</span>
              <Mail size={18} color="#3A925F" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
