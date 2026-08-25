import Link from 'next/link';
import { FileText, ArrowLeft, Terminal, Cpu, Database, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'SKU Bulk Generator Technical Documentation | Catalyst Creations Apps',
  description: 'Complete technical reference, token syntax, API webhooks, and rules specification for SKU Bulk Generator Shopify App.',
};

export default function SkuAppDocPage() {
  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '980px' }}>
        {/* Navigation back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <FileText size={16} color="#3A925F" />
            <span>App Technical Documentation</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem' }}>
            SKU Bulk Generator Specifications
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '680px' }}>
            Comprehensive guide to SKU pattern syntax, automatic webhook triggers, catalog batch limits, and Shopify API integration.
          </p>
        </div>

        {/* Technical Navigation / Sections Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href="#overview" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Cpu size={24} color="#3A925F" />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937' }}>1. System Overview</h3>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>App architecture & scopes</span>
              </div>
            </div>
          </a>

          <a href="#tokens" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Terminal size={24} color="#3A925F" />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937' }}>2. Token Syntax</h3>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Pattern placeholder variables</span>
              </div>
            </div>
          </a>

          <a href="#webhooks" style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <RefreshCw size={24} color="#3A925F" />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937' }}>3. Webhooks & Sync</h3>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Auto-generation triggers</span>
              </div>
            </div>
          </a>
        </div>

        {/* Section 1: Overview */}
        <div className="glass-card" id="overview" style={{ padding: '3rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Cpu size={24} color="#3A925F" /> 1. System Overview & Shopify Scopes
          </h2>
          <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1.25rem' }}>
            <strong>SKU Bulk Generator</strong> is built on Next.js, Node.js background workers, and PostgreSQL. It interfaces directly with Shopify via the official GraphQL Admin API (version 2026-07) to query catalog structures and mutate product variant SKU attributes.
          </p>

          <h4 style={{ color: '#132937', fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.75rem' }}>Required Shopify OAuth Scopes:</h4>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', marginBottom: '1.25rem' }}>
            <ul style={{ color: '#334155', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
              <li style={{ color: '#3A925F', fontWeight: '600' }}>✓ write_products (Used to update SKU strings on ProductVariants)</li>
              <li style={{ color: '#3A925F', fontWeight: '600' }}>✓ read_products (Used to query titles, options, vendors, and types)</li>
              <li style={{ color: '#3A925F', fontWeight: '600' }}>✓ read_inventory (Used to verify multi-location SKU alignment)</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Token Syntax */}
        <div className="glass-card" id="tokens" style={{ padding: '3rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Terminal size={24} color="#3A925F" /> 2. Rule Pattern Token Syntax Reference
          </h2>
          <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1.5rem' }}>
            You can combine tokens, custom literal strings, and separators (hyphen <code>-</code>, underscore <code>_</code>, slash <code>/</code>, or none) to form your SKU template.
          </p>

          {/* Token Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #cbd5e1', color: '#132937' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Token Syntax</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Description</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Sample Output</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{VENDOR}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>Product Vendor initials or name</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>URBAN</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{PRODUCT_TITLE}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>First N characters of Product Title</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>JACKET</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{OPTION_1}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>Value of 1st Variant Option (e.g. Size)</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>LARG</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{OPTION_2}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>Value of 2nd Variant Option (e.g. Color)</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>BLUE</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{AUTO_INC}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>Sequential counter with padding (0001)</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>0042</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', color: '#132937', fontWeight: '700' }}>{'{BARCODE}'}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>Existing barcode/UPC string</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#3A925F', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>8492048291</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Webhooks & Safety */}
        <div className="glass-card" id="webhooks" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#132937', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <RefreshCw size={24} color="#3A925F" /> 3. Automated Webhooks & Rate-Limit Safety
          </h2>
          <p style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.975rem', marginBottom: '1.25rem' }}>
            SKU Bulk Generator uses Shopify mandatory webhooks (<code>products/create</code>, <code>products/update</code>) registered via GraphQL webhook subscriptions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1' }}>
              <h4 style={{ color: '#132937', fontWeight: '700', marginBottom: '0.5rem' }}>GraphQL Leaky Bucket Safety</h4>
              <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Batch mutations automatically throttle according to Shopify cost limits (50 points/sec) to avoid rate limit HTTP 429 exceptions.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1' }}>
              <h4 style={{ color: '#132937', fontWeight: '700', marginBottom: '0.5rem' }}>1-Click Rollback Logs</h4>
              <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Every bulk update captures a pre-execution JSON snapshot of variant SKUs, enabling instant rollback if rules are misconfigured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
