import Link from 'next/link';
import { History, ArrowLeft, Tag, Sparkles, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Changelog & Product Updates | Catalyst Creations Apps',
  description: 'Track the latest features, releases, and Shopify integration updates for SKU Bulk Generator and Catalyst Creations Apps.',
};

const RELEASES = [
  {
    version: 'v2.4.0',
    date: 'August 20, 2026',
    tag: 'Latest Release',
    title: 'Shopify Admin API 2026-07 Compatibility & Enhanced Token Rules',
    highlights: [
      'Added support for custom metafield tokens in SKU pattern syntax (e.g. {METAFIELD:namespace.key}).',
      'Upgraded to Shopify GraphQL Admin API 2026-07 version for faster batch variant mutations.',
      'Added automated SKU generation support for Shopify Combined Listings & Bundles.',
      'Improved bulk process job recovery logic for store catalogs with 50,000+ variants.'
    ]
  },
  {
    version: 'v2.3.0',
    date: 'June 12, 2026',
    tag: 'Feature Update',
    title: 'Duplicate SKU Collision Engine & Rollback History',
    highlights: [
      'Introduced pre-execution dry-run collision auditor that flags duplicate SKUs before committing to Shopify.',
      'Added 1-Click Rollback Snapshot allowing merchants to revert SKU changes within 14 days of bulk updates.',
      'Added regex transformation rules (uppercase, lowercase, sanitize special characters, trim spaces).',
      'Enhanced UI responsive performance for mobile merchant catalog management.'
    ]
  },
  {
    version: 'v2.2.0',
    date: 'March 28, 2026',
    tag: 'Performance Update',
    title: 'Real-time Webhook Auto-Generation & Multi-Location Support',
    highlights: [
      'Engineered sub-second webhook processing pipeline using Render cloud background workers.',
      'Auto-generate SKUs seamlessly when products are added via Shopify Mobile App or third-party POS systems.',
      'Added multi-option pattern variables ({OPTION_1}, {OPTION_2}, {OPTION_3}) for clothing size & color matrix formatting.'
    ]
  },
  {
    version: 'v2.0.0',
    date: 'January 10, 2026',
    tag: 'Major Release',
    title: 'SKU Bulk Generator 2.0 Rebuilt with Next.js App Router',
    highlights: [
      'Complete frontend overhaul introducing interactive live SKU previewer sandbox.',
      'Redesigned merchant dashboard with real-time job progress bar and error reporting logs.',
      'Integrated official Shopify App Bridge v3 for native embedded merchant experience.'
    ]
  }
];

export default function ChangelogPage() {
  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '900px' }}>
        {/* Navigation back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <History size={16} color="#3A925F" />
            <span>Product Development Timeline</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem' }}>
            Changelog & Release Notes
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem' }}>
            Continuous improvements, feature releases, and Shopify API updates for SKU Bulk Generator and custom merchant tools.
          </p>
        </div>

        {/* Release Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
          {RELEASES.map((rel, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#3A925F', fontFamily: 'var(--font-mono)' }}>
                    {rel.version}
                  </span>
                  <span style={{
                    background: idx === 0 ? 'rgba(58, 146, 95, 0.12)' : '#f1f5f9',
                    color: idx === 0 ? '#3A925F' : '#475569',
                    border: '1px solid #cbd5e1',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {rel.tag}
                  </span>
                </div>
                <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                  Released: {rel.date}
                </span>
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>
                {rel.title}
              </h2>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                {rel.highlights.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#334155', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <CheckCircle2 size={18} color="#3A925F" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
