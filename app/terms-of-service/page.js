import Link from 'next/link';
import { FileText, ArrowLeft, Shield, CheckCircle2, Lock, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | Catalyst Creation Apps',
  description: 'Terms of Service and merchant usage conditions for Catalyst Creation Apps and SKU Bulk Generator.',
  keywords: [
    'Terms of Service Catalyst Creation',
    'SKU Bulk Generator terms',
    'Shopify app terms of service'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Catalyst Creation Apps',
    description: 'Terms of Service and merchant usage conditions for Catalyst Creation Apps and SKU Bulk Generator.',
    url: 'https://catalyst-creation-site.vercel.app/terms-of-service',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms-of-service' }]} />

        {/* Header Banner */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <FileText size={16} color="#3A925F" />
            <span>Merchant Agreement</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem', lineHeight: '1.2' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            Last Updated: September 2026 • Catalyst Creation
          </p>
        </div>

        {/* Content Card */}
        <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Shield size={20} color="#3A925F" /> 1. Acceptance of Terms
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              By installing, accessing, or using any application or service created by Catalyst Creation (including <strong>SKU Bulk Generator</strong>), you agree to be bound by these Terms of Service. If you do not agree, please do not install or use our Shopify applications.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Lock size={20} color="#3A925F" /> 2. Shopify Integration & App Permissions
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1rem' }}>
              Our applications operate within the official Shopify ecosystem via Shopify OAuth and GraphQL Admin APIs. You authorize us to access catalog data strictly required for the application to function (e.g. read and write product variant SKUs). We never request or store sensitive customer financial or payment data.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
              3. Billing, Free Trials & Cancellation
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1rem' }}>
              All app subscription charges and recurring billing are processed securely through Shopify Billing API and billed directly on your Shopify store invoice. You may cancel your subscription at any time simply by uninstalling the app from your Shopify store admin.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
              4. Merchant Responsibility & Data Safety
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1rem' }}>
              Merchants are responsible for reviewing SKU generation rules and inspecting live dry-run previews prior to executing large bulk updates. Catalyst Creation provides automated snapshot logging and rollback capabilities, but merchants maintain ultimate responsibility for their catalog configuration.
            </p>
          </section>

          <hr style={{ borderColor: '#e2e8f0' }} />

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
              5. Contact & Merchant Support
            </h2>
            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem' }}>
              If you have questions regarding these Terms of Service or need technical assistance with your Shopify store integration, please contact our support team at <strong>catalystcreationapps@gmail.com</strong> or via our <Link href="/contact" style={{ color: '#3A925F', fontWeight: '600' }}>Contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
