import Link from 'next/link';
import {
  Code2,
  Database,
  Wrench,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Mail,
  Headphones,
  Settings,
  BarChart3
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Shopify Store Management & Development Services | Catalyst Creation',
  description: 'Shopify store management, customization, development, and ongoing support for merchants who need help improving and maintaining their online store.',
  keywords: [
    'Shopify store management',
    'Shopify store customization',
    'Shopify development',
    'Shopify store support',
    'Shopify maintenance',
    'Shopify custom apps',
    'Shopify ERP integration'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/shopify-services',
  },
  openGraph: {
    title: 'Shopify Store Management & Development Services | Catalyst Creation',
    description: 'Shopify store management, customization, development, and ongoing support for merchants who need help improving and maintaining their online store.',
    url: 'https://catalyst-creation-site.vercel.app/shopify-services',
    type: 'website',
  },
};

export default function ShopifyServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Catalyst Creation Shopify Development & Store Management',
    url: 'https://catalyst-creation-site.vercel.app/shopify-services',
    description: 'Professional Shopify store management, custom app development, catalog automation, and maintenance services for ecommerce brands.',
    provider: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      url: 'https://catalyst-creation-site.vercel.app',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Shopify Engineering & Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify Store Management & Catalog Operations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Private Shopify App Engineering'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify Theme Customization & Performance Optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ongoing Shopify Support & Maintenance'
          }
        }
      ]
    }
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container-custom">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Shopify Services', href: '/shopify-services' }]} />

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.4rem 1rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.25rem' }}>
            <Sparkles size={16} />
            <span>Dedicated Shopify Engineering</span>
          </div>

          <h1 style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            color: '#132937',
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            maxWidth: '920px',
            margin: '0 auto 1.5rem auto'
          }}>
            Shopify Store Management & Development Services
          </h1>

          <p style={{
            color: '#475569',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '760px',
            margin: '0 auto 2.5rem auto'
          }}>
            From day-to-day store operations and massive catalog migrations to custom private apps and checkout extensions, Catalyst Creation delivers technical expertise that keeps your Shopify store running smoothly.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
              <span>Request Service Quote</span>
              <ArrowRight size={18} />
            </a>
            <a href="#services-list" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* Services List Section */}
        <div id="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
          {/* Service 1: Store Management & Catalog Ops */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Database size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Shopify Store Management & Catalog Operations
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Managing a store with thousands of products demands rigorous operational precision. We handle ongoing product uploads, collection architecture, metadata organization, barcode alignment, and inventory management.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Catalog auditing, cleansing, and multi-location inventory alignment</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Bulk SKU structuring (also see our dedicated <Link href="/shopify-sku-generator" style={{ color: '#3A925F', fontWeight: '600' }}>Shopify SKU Generator</Link>)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Metafields and variant matrix restructuring for apparel & complex goods</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>Key Deliverables:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Full catalog health audit report
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Automated sync rules for supplier feeds
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Zero-downtime catalog migration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Custom Shopify App Development */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Cpu size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Custom Private Shopify App Development
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  When off-the-shelf apps don&apos;t meet your unique workflow needs, we build secure, dedicated private Shopify apps. Integrated via GraphQL Admin APIs, custom webhooks, and modern serverless workers.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>ERP, WMS, and 3PL fulfillment bi-directional data integrations</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Custom batch automation pipelines for order & pricing rules</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Dedicated secure hosting with 99.9% uptime and API rate protection</span>
                  </li>
                </ul>
              </div>

              <div style={{ order: 1, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>App Capabilities:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Shopify GraphQL Admin API 2026-07 ready
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Embedded Shopify App Bridge UI
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Webhook event processing & retry queues
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Theme Customization & Functions */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Wrench size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Shopify Store Customization & Theme Development
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Transform your storefront into a high-converting, blazing fast shopping experience. We build custom Liquid sections, theme extensions, dynamic cart upsells, and custom Shopify Functions.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Custom Shopify Functions for tiered volume discounts & bundling</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Checkout UI extensions and post-purchase upsell widgets</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Core Web Vitals speed optimization and script trimming</span>
                  </li>
                </ul>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>Technical Standards:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Shopify Online Store 2.0 architecture
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ 90+ Google PageSpeed Core Web Vitals target
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Seamless mobile responsiveness
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Ongoing Shopify Support & Maintenance */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Headphones size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Shopify Store Support & Ongoing Maintenance
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Peace of mind for growing brands. We act as your on-demand Shopify engineering team to troubleshoot app conflicts, update theme dependencies, fix checkout bugs, and resolve technical challenges.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Rapid emergency troubleshooting and app conflict resolution</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Quarterly Shopify API version updates & deprecation auditing</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Direct Slack/Email communication with senior engineers</span>
                  </li>
                </ul>
              </div>

              <div style={{ order: 1, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>Support Retainer Perks:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#475569' }}>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Guaranteed response SLA under 4 hours
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Dedicated sandbox development staging environment
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                    ✓ Monthly store performance & conversion reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge-glow" style={{ marginBottom: '1rem' }}>
                <Mail size={16} color="#3A925F" />
                <span>Let&apos;s Build Together</span>
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.75rem', color: '#132937', letterSpacing: '-0.02em' }}>
                Request Shopify Services Consultation
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                Tell us about your Shopify store requirements, catalog needs, or custom app specs.
              </p>
            </div>

            <ContactForm defaultService="Shopify Store Management" />
          </div>
        </div>
      </div>
    </div>
  );
}
