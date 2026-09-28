import Link from 'next/link';
import { Shield, Lock, Database, Eye, FileText } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | Catalyst Creation',
  description: 'Privacy Policy for Catalyst Creation and SKU Bulk Generator. Learn how we handle and protect merchant and Shopify store data.',
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Catalyst Creation',
    description: 'Privacy Policy for Catalyst Creation and SKU Bulk Generator. Learn how we handle and protect merchant and Shopify store data.',
    url: 'https://catalyst-creation-site.vercel.app/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />


        {/* Header Banner */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <Shield size={16} color="#3A925F" />
            <span>Merchant Data Protection</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem', lineHeight: '1.2' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Last Updated: August 25, 2026 • Catalyst Creations Apps
          </p>
        </div>

        {/* Content Card */}
        <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Lock size={20} color="#3A925F" /> 1. Overview & Commitment
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              Catalyst Creations Apps (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) builds high-performance Shopify applications and e-commerce engineering tools, including our flagship application <strong>SKU Bulk Generator</strong>. We respect merchant privacy and are committed to protecting all data obtained through your Shopify store integration.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Database size={20} color="#3A925F" /> 2. Information We Collect
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1rem' }}>
              When you install any application developed by Catalyst Creations Apps on your Shopify store, we access data via official Shopify Admin APIs strictly necessary to deliver app functions:
            </p>
            <ul style={{ color: '#334155', lineHeight: '1.8', paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
              <li><strong>Shopify Store Metadata:</strong> Shop domain, store owner email, store name, primary currency, and installed timezone.</li>
              <li><strong>Product & Variant Information:</strong> Product IDs, titles, variant IDs, existing SKU codes, option names, vendors, and product types.</li>
              <li><strong>App Settings & Configuration:</strong> Custom SKU rule templates, separator preferences, prefix/suffix values, and automated webhook triggers set up by the merchant.</li>
            </ul>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Eye size={20} color="#3A925F" /> 3. How We Use Your Data
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1rem' }}>
              We use collected information solely for providing and improving our services:
            </p>
            <ul style={{ color: '#334155', lineHeight: '1.8', paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
              <li>Executing requested bulk SKU updates across your Shopify product catalog.</li>
              <li>Listening to product creation webhooks to automatically generate SKUs for newly published items.</li>
              <li>Storing merchant preference rules so rule templates persist across app sessions.</li>
              <li>Providing customer support and troubleshooting catalog formatting issues.</li>
            </ul>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
              4. Data Sharing & Third-Party Services
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              We <strong>NEVER sell, rent, or trade merchant or customer data</strong> to third parties or advertising networks. Data is processed through enterprise cloud infrastructure partners protected by TLS encryption in transit and AES-256 encryption at rest.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
              5. Data Retention & Uninstall Procedures
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              If you uninstall SKU Bulk Generator from your Shopify store, Shopify emits an mandatory GDPR uninstall webhook. Upon receipt of this webhook, all stored access tokens, rule templates, and cached store metadata are permanently deleted from our primary databases within 48 hours.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FileText size={20} color="#3A925F" /> 6. Merchant Rights & GDPR/CCPA Compliance
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              Merchants located in the European Union (EU) or California have rights regarding data access, rectification, and erasure under GDPR and CCPA. To submit a data request or request complete erasure prior to uninstallation, contact our privacy compliance team at <strong>catalystcreationapps@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
