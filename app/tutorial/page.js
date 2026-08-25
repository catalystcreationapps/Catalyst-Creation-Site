import Link from 'next/link';
import { BookOpen, ArrowLeft, PlayCircle, CheckCircle2, Sliders, Zap, RefreshCw, ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Step-by-Step Tutorials & Setup Guides | SKU Bulk Generator',
  description: 'Learn how to set up SKU Bulk Generator, configure automated SKU rule templates, bulk update Shopify product variants, and avoid duplicate SKUs.',
};

export default function TutorialPage() {
  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '960px' }}>
        {/* Navigation back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <BookOpen size={16} color="#3A925F" />
            <span>Merchant Onboarding & Guides</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem' }}>
            SKU Bulk Generator Tutorials
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '640px' }}>
            Step-by-step instructions to master your store&apos;s SKU catalog formatting, rule templates, and automatic webhook synchronization.
          </p>
        </div>

        {/* Tutorial Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Tutorial 1 */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ background: '#3A925F', color: 'white', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                1
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>
                Installing the App & Connecting Your Shopify Store
              </h2>
            </div>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Installing SKU Bulk Generator takes less than 60 seconds and integrates seamlessly into your Shopify Admin navigation.
            </p>

            <div style={{ background: '#f8fafc', borderRadius: '0.85rem', padding: '1.5rem', border: '1px solid #cbd5e1', marginBottom: '1.5rem' }}>
              <ol style={{ color: '#334155', paddingLeft: '1.25rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                <li>Click <strong>Install App</strong> on the official Shopify App Store page.</li>
                <li>Review the requested scope permissions (<code>write_products</code> is required to write updated SKU codes).</li>
                <li>Approve the installation. You will be redirected directly to the SKU Bulk Generator Embedded Dashboard inside your store admin.</li>
              </ol>
            </div>
          </div>

          {/* Tutorial 2 */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ background: '#3A925F', color: 'white', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                2
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>
                Designing Your First Custom SKU Rule Template
              </h2>
            </div>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Define standard SKU rules using dynamic placeholder tokens to generate consistent, readable SKU codes for fulfillment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1.25rem', borderRadius: '0.75rem' }}>
                <code style={{ color: '#3A925F', fontWeight: '700' }}>{'{VENDOR}'}</code>
                <p style={{ color: '#475569', fontSize: '0.875rem', marginTop: '0.35rem' }}>Extracts vendor initials or name (e.g., URN for UrbanFit).</p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1.25rem', borderRadius: '0.75rem' }}>
                <code style={{ color: '#3A925F', fontWeight: '700' }}>{'{PRODUCT_TITLE}'}</code>
                <p style={{ color: '#475569', fontSize: '0.875rem', marginTop: '0.35rem' }}>Truncates product title to first N letters (e.g., DENIM).</p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1.25rem', borderRadius: '0.75rem' }}>
                <code style={{ color: '#3A925F', fontWeight: '700' }}>{'{OPTION_1}'}</code>
                <p style={{ color: '#475569', fontSize: '0.875rem', marginTop: '0.35rem' }}>Appends variant option value (e.g. S, M, L, XL).</p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '1.25rem', borderRadius: '0.75rem' }}>
                <code style={{ color: '#3A925F', fontWeight: '700' }}>{'{AUTO_INC}'}</code>
                <p style={{ color: '#475569', fontSize: '0.875rem', marginTop: '0.35rem' }}>Sequential number counter (e.g. 0001, 0002) for unique SKUs.</p>
              </div>
            </div>

            <div style={{ background: 'rgba(58, 146, 95, 0.1)', border: '1px solid rgba(58, 146, 95, 0.3)', padding: '1.25rem', borderRadius: '0.75rem', color: '#334155', fontSize: '0.9rem' }}>
              <strong>Pro Tip:</strong> Use the live SKU Rule Builder preview on our <Link href="/#demo" style={{ color: '#3A925F', textDecoration: 'underline' }}>homepage</Link> to test how your pattern behaves before applying it to your live Shopify products.
            </div>
          </div>

          {/* Tutorial 3 */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ background: '#3A925F', color: 'white', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                3
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>
                Executing Bulk Updates & Product Collection Filters
              </h2>
            </div>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Run batch updates across your entire inventory or narrow scope to specific products.
            </p>

            <ul style={{ color: '#334155', paddingLeft: '1.25rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li><strong>Target All Products:</strong> Generates SKUs across your entire store catalog in one operation.</li>
              <li><strong>Target Missing SKUs Only:</strong> Preserves existing custom SKUs and only populates products/variants with blank SKU fields.</li>
              <li><strong>Filter by Collection or Vendor:</strong> Run dedicated rule patterns for specific apparel brands or supplier lines.</li>
            </ul>
          </div>

          {/* Tutorial 4 */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ background: '#3A925F', color: 'white', width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                4
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>
                Enabling Real-time Auto-Generation for New Products
              </h2>
            </div>
            <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Keep your store SKU structure 100% compliant automatically whenever staff or app feeds add new items.
            </p>

            <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.95rem' }}>
              In your app settings, toggle <strong>&quot;Auto-Generate SKUs on Product Creation&quot;</strong> to ON. Our webhooks handle background processing instantly whenever a new product draft or active listing is saved in Shopify.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card" style={{ marginTop: '3.5rem', padding: '2.5rem', textAlign: 'center', background: '#f8fafc', borderColor: '#cbd5e1' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#132937', marginBottom: '0.75rem' }}>
            Ready to Automate Your Store SKUs?
          </h3>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
            Install SKU Bulk Generator today and save hours of manual data entry on Shopify.
          </p>
          <a href="https://sku-bulk-generator.onrender.com" target="_blank" rel="noreferrer" className="btn-primary">
            <span>Get Started Free</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
