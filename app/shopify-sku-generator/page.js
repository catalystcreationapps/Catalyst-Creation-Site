import Link from 'next/link';
import {
  Zap,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  History,
  ShieldAlert,
  Search,
  Check,
  RefreshCw,
  HelpCircle,
  BookOpen,
  ArrowUpRight,
  Cpu,
  FileSpreadsheet
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import InteractiveSkuDemo from '../components/InteractiveSkuDemo';

export const metadata = {
  title: 'Shopify SKU Generator – Create SKUs in Bulk',
  description: 'Generate consistent SKUs for Shopify products and variants. Create SKUs in bulk with custom rules, prefixes, suffixes, and automatic SKU generation.',
  keywords: [
    'Shopify SKU generator',
    'bulk SKU generator',
    'automatic SKU generator',
    'Shopify product SKU generator',
    'Shopify variant SKU generator',
    'bulk SKU generator Shopify',
    'generate SKUs in Shopify',
    'Shopify SKU naming convention',
    'duplicate SKU Shopify'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/shopify-sku-generator',
  },
  openGraph: {
    title: 'Shopify SKU Generator – Create SKUs in Bulk',
    description: 'Generate consistent SKUs for Shopify products and variants. Create SKUs in bulk with custom rules, prefixes, suffixes, and automatic SKU generation.',
    url: 'https://catalyst-creation-site.vercel.app/shopify-sku-generator',
    type: 'website',
  },
};

const FAQ_ITEMS = [
  {
    q: 'What is a Shopify SKU generator?',
    a: 'A Shopify SKU generator is a dedicated application or tool that creates standardized, readable Stock Keeping Unit (SKU) codes across your Shopify products and variants. It replaces manual data entry by using automated naming rules based on product titles, vendors, variant options (size, color), and sequential numbers.'
  },
  {
    q: 'Can I generate SKUs in bulk in Shopify?',
    a: 'Yes. With SKU Bulk Generator, you can select your entire product catalog, specific collections, or filter by product tags to create or update thousands of product and variant SKUs in a single batch operation without CSV exports.'
  },
  {
    q: 'Can I generate SKUs for Shopify variants?',
    a: 'Absolutely. The app dynamically pulls variant attributes like {OPTION_1} (e.g. Size), {OPTION_2} (e.g. Color), and {OPTION_3} (e.g. Material) into the SKU string to ensure every variant receives a unique, systematic SKU code.'
  },
  {
    q: 'Can Shopify SKUs be generated automatically?',
    a: 'Yes. By enabling the automatic webhook generator feature, the app listens to Shopify product creation events. Whenever you or your team create a new product in Shopify Admin or via an inventory feed, matching SKUs are generated instantly in real time.'
  },
  {
    q: 'Can I customize my SKU format?',
    a: 'Yes. You can build custom template patterns combining vendor codes, product title fragments, category initials, variant option values, custom static prefixes, suffixes, separators (hyphen, underscore, slash), and padded auto-increment counters.'
  },
  {
    q: 'How do I avoid duplicate SKUs?',
    a: 'SKU Bulk Generator includes built-in duplicate SKU detection. It runs a pre-execution collision check across your active catalog, flags potential SKU duplicates before they are applied, and offers auto-increment tokens ({AUTO_INC}) to guarantee 100% SKU uniqueness.'
  }
];

export default function ShopifySkuGeneratorPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SKU Bulk Generator for Shopify',
    operatingSystem: 'Shopify Platform',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    url: 'https://apps.shopify.com/sku-bulk-generator',
    description: 'Automated SKU generation and bulk catalog management app for Shopify merchants.',
    author: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      url: 'https://catalyst-creation-site.vercel.app'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Shopify SKU Generator', href: '/shopify-sku-generator' }]} />

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.4rem 1rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1.25rem' }}>
            <Zap size={16} />
            <span>Shopify Catalog Automation Suite</span>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#132937',
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            maxWidth: '900px',
            margin: '0 auto 1.5rem auto'
          }}>
            Shopify SKU Generator
          </h1>

          <p style={{
            color: '#475569',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto'
          }}>
            Generate consistent, standardized SKUs for your Shopify products and variants. Create SKUs in bulk with custom rules, prefixes, suffixes, and automated real-time generation.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://apps.shopify.com/sku-bulk-generator"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}
            >
              <span>Try SKU Bulk Generator on Shopify</span>
              <ExternalLink size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
              <span>How It Works</span>
              <ArrowRight size={18} color="#3A925F" />
            </a>
          </div>
        </div>

        {/* Live Interactive SKU Rule Builder Preview */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="glass-card" style={{ padding: '3rem', background: '#f8fafc', borderColor: '#e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <span className="badge-glow" style={{ marginBottom: '1rem' }}>
                  <Sliders size={16} color="#3A925F" />
                  <span>Rule Engine Architecture</span>
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#132937', marginBottom: '1rem', lineHeight: '1.25' }}>
                  Create Custom SKU Formats
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.25rem', fontSize: '1rem' }}>
                  A clear SKU naming system is critical for warehouse fulfillment, barcode scanning, multichannel inventory syncing, and customer support. With our pattern rule engine, you combine dynamic attributes to construct predictable SKU formulas:
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span><strong>Prefix & Suffix:</strong> Brand codes, supplier IDs, or department initials</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span><strong>Product Attributes:</strong> Title letters, Vendor initials, Product Type</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span><strong>Variant Modifiers:</strong> Size codes, Color abbreviations, Material codes</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span><strong>Auto-Increment Counters:</strong> Zero-padded sequential series (0001, 0002)</span>
                  </li>
                </ul>

                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Learn more in our detailed guide on <Link href="/blog/shopify-sku-naming-convention" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>Shopify SKU naming conventions</Link>.
                </p>
              </div>

              {/* Interactive Demo */}
              <InteractiveSkuDemo />
            </div>
          </div>
        </div>

        {/* Feature Grid Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '5rem' }}>
          {/* Feature 1: Bulk SKU Generation */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <FileSpreadsheet size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Generate SKUs for Shopify Products in Bulk
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Manual SKU entry in Shopify spreadsheets is prone to typos, formatting discrepancies, and duplicate codes. SKU Bulk Generator connects directly via official Shopify GraphQL APIs to update hundreds or thousands of products in a single background batch.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem' }}>
                  Filter your batch updates by collection, product vendor, tag, or status. You can target only items with missing/empty SKUs to avoid altering established codes, or run a comprehensive storewide SKU restructuring. Read our breakdown on <Link href="/blog/bulk-sku-generator-shopify" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>bulk SKU generation for Shopify</Link>.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '1rem' }}>Bulk Generation Advantages:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={18} color="#3A925F" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>No risky CSV file exports, column mapping, or re-import corruptions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={18} color="#3A925F" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>Process 10,000+ variants smoothly with rate-limit protected queue workers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <Check size={18} color="#3A925F" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>Choose overwrite mode or fill empty SKUs only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Automatic Webhook SKU Generation */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <RefreshCw size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Automatically Generate SKUs for New Products
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Eliminate onboarding friction when adding new products. When you toggle automatic SKU generation on, our cloud webhook worker listens for <code>products/create</code> events in real time.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem' }}>
                  Whether your staff publishes new products manually through the Shopify Admin, mobile app, or dropshipping catalog sync, SKU Bulk Generator immediately evaluates your default template rule and populates compliant SKU codes within seconds.
                </p>
              </div>

              <div style={{ order: 1, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#132937' }}>
                  <div style={{ color: '#3A925F', fontWeight: '700', marginBottom: '0.5rem' }}>// Automated Webhook Workflow</div>
                  <div style={{ background: '#ffffff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', marginBottom: '0.5rem' }}>
                    1. Merchant adds &quot;Leather Crossbody Bag&quot;
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', marginBottom: '0.5rem' }}>
                    2. Webhook triggers: <code>products/create</code>
                  </div>
                  <div style={{ background: '#ffffff', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', color: '#3A925F', fontWeight: '700' }}>
                    3. SKU assigned: <code>BAG-LEATH-BRN-0104</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Variant SKU Generation */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Layers size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Generate SKUs for Product Variants
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Products with multiple options (size, color, material, bundle count) require unique SKU identifiers for accurate fulfillment and inventory management.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem' }}>
                  SKU Bulk Generator maps option values directly into your SKU pattern structure. For example, a shirt available in Small, Medium, and Large in Navy and Olive can automatically generate <code>SHIRT-NVY-S</code>, <code>SHIRT-NVY-M</code>, and <code>SHIRT-OLV-L</code>. Check out our guide on <Link href="/blog/shopify-variant-sku-generator" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>Shopify variant SKUs</Link>.
                </p>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '1.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#132937' }}>
                      <th style={{ padding: '0.5rem' }}>Variant</th>
                      <th style={{ padding: '0.5rem' }}>Option Values</th>
                      <th style={{ padding: '0.5rem' }}>Generated SKU</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.6rem 0.5rem', fontWeight: '600' }}>T-Shirt</td>
                      <td style={{ padding: '0.6rem 0.5rem', color: '#64748b' }}>S / Black</td>
                      <td style={{ padding: '0.6rem 0.5rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TSH-BLK-SM</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.6rem 0.5rem', fontWeight: '600' }}>T-Shirt</td>
                      <td style={{ padding: '0.6rem 0.5rem', color: '#64748b' }}>M / Black</td>
                      <td style={{ padding: '0.6rem 0.5rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TSH-BLK-MD</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.6rem 0.5rem', fontWeight: '600' }}>T-Shirt</td>
                      <td style={{ padding: '0.6rem 0.5rem', color: '#64748b' }}>L / White</td>
                      <td style={{ padding: '0.6rem 0.5rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TSH-WHT-LG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Feature 4: Find and Manage Duplicate SKUs */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <ShieldAlert size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Find and Manage Duplicate SKUs
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Shopify allows duplicate SKUs by default, but duplicate SKU codes cause severe inventory synchronization errors across ERPs, third-party logistics (3PL) providers, Amazon/TikTok sales channels, and POS systems.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem' }}>
                  Our duplicate detection scanner audits your entire catalog, highlights collisions across different products or variants, and lets you resolve duplicates automatically with auto-increment sequencing. Read our complete guide to <Link href="/blog/duplicate-skus-shopify" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>fixing duplicate SKUs in Shopify</Link>.
                </p>
              </div>

              <div style={{ order: 1, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#dc2626', fontWeight: '700', marginBottom: '0.75rem' }}>
                  <ShieldAlert size={20} />
                  <span>Duplicate Collision Engine</span>
                </div>
                <p style={{ color: '#991b1b', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  2 products share the identical SKU: <code>JEAN-SLIM-01</code>
                </p>
                <div style={{ background: '#ffffff', border: '1px solid #fecaca', borderRadius: '0.5rem', padding: '0.75rem', fontSize: '0.85rem', color: '#334155' }}>
                  Auto-Resolved via Increment Rule: <br />
                  Item 1 → <code style={{ color: '#3A925F', fontWeight: '700' }}>JEAN-SLIM-01-001</code><br />
                  Item 2 → <code style={{ color: '#3A925F', fontWeight: '700' }}>JEAN-SLIM-01-002</code>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Preview Your SKU Changes Before Applying Them */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <div style={{ width: '3.25rem', height: '3.25rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Search size={26} color="#3A925F" />
                </div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
                  Preview Your SKU Changes Before Applying Them
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  Never commit changes blind. Before updating live Shopify catalog data, SKU Bulk Generator generates a complete dry-run preview table showing side-by-side comparisons of Current SKU vs New Generated SKU.
                </p>
                <p style={{ color: '#475569', lineHeight: '1.65', fontSize: '1rem' }}>
                  Furthermore, each batch update creates an encrypted pre-execution snapshot in your SKU history logs, enabling 1-click rollback if you ever need to restore previous SKU values.
                </p>
              </div>

              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Dry-Run Comparison Preview:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.825rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: '#ffffff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#ef4444' }}>- (empty)</span>
                    <span style={{ color: '#3A925F', fontWeight: '700' }}>+ HOOD-BLK-SM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: '#ffffff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#64748b' }}>- OLD_123</span>
                    <span style={{ color: '#3A925F', fontWeight: '700' }}>+ HOOD-BLK-MD</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: '#ffffff', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}>
                    <span style={{ color: '#64748b' }}>- RANDOM_SKU</span>
                    <span style={{ color: '#3A925F', fontWeight: '700' }}>+ HOOD-BLK-LG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Use a Shopify SKU Generator? Section */}
        <section style={{ marginBottom: '5.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
              <Cpu size={16} color="#3A925F" />
              <span>Operational Efficiency</span>
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
              Why Use a Shopify SKU Generator?
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '680px', margin: '0.5rem auto 0 auto' }}>
              A systematic SKU naming convention is the backbone of efficient ecommerce operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>
                Faster Warehouse Fulfillment
              </h3>
              <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Readable SKUs allow warehouse pickers and packing staff to immediately identify brand, style, color, and size directly from the pick list, minimizing mis-picks.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>
                Flawless Multichannel Sync
              </h3>
              <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Amazon, eBay, TikTok Shop, Google Merchant Center, and ERP systems use SKU codes as the primary match key for stock levels.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>
                Eliminate Hours of Manual Entry
              </h3>
              <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Save your operations team hundreds of hours each month by automating SKU creation for new seasonal drops and inventory catalogs.
              </p>
            </div>
          </div>
        </section>

        {/* How Our Shopify SKU Generator Works Section */}
        <section id="how-it-works" style={{ marginBottom: '5.5rem' }}>
          <div className="glass-card" style={{ padding: '3.5rem', background: '#ffffff' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
                <History size={16} color="#3A925F" />
                <span>Simple 3-Step Process</span>
              </span>
              <h2 style={{ fontSize: '2.35rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                How Our Shopify SKU Generator Works
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
              <div>
                <div style={{ background: '#3A925F', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Define Your Rule Formula</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Choose tokens like <code>{'{VENDOR}'}</code>, <code>{'{TITLE}'}</code>, <code>{'{OPTION_1}'}</code>, select your delimiter, and preview generated codes in real time.
                </p>
              </div>

              <div>
                <div style={{ background: '#3A925F', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Preview & Run Bulk Batch</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Filter products by collection or tag, review the dry-run comparison table, and launch the bulk update with 100% confidence.
                </p>
              </div>

              <div>
                <div style={{ background: '#3A925F', color: 'white', width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '1.25rem', fontSize: '1.1rem' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>Enable Auto-Generation</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Switch on automatic creation so every newly added product or variant automatically inherits your SKU structure via background webhooks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section style={{ marginBottom: '5.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
              <HelpCircle size={16} color="#3A925F" />
              <span>Merchant Answers</span>
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '840px', margin: '0 auto' }}>
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginBottom: '0.65rem' }}>
                  {item.q}
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Resources & Related Guides */}
        <section style={{ marginBottom: '5.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em' }}>
              Learn More About Shopify SKU Management
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Explore our in-depth guides and best practice frameworks for Shopify merchants.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <Link href="/blog/how-to-generate-skus-in-shopify" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>
                  How to Generate SKUs in Shopify
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  Complete tutorial on manual, variant, and bulk SKU generation workflows.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link href="/blog/shopify-sku-naming-convention" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>
                  Shopify SKU Naming Convention
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  How to structure category, brand, and option codes without confusing warehouse staff.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link href="/blog/duplicate-skus-shopify" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginBottom: '0.5rem' }}>
                  Duplicate SKUs in Shopify
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  Diagnose inventory sync problems caused by identical SKU codes and fix them.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="glass-card" style={{ padding: '3.5rem', textAlign: 'center', background: '#f8fafc', borderColor: '#cbd5e1' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#132937', marginBottom: '1rem' }}>
            Ready to Automate Your Store SKUs?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            Try SKU Bulk Generator on Shopify today to create clean, consistent SKUs in bulk across your entire catalog.
          </p>
          <a
            href="https://apps.shopify.com/sku-bulk-generator"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '1.05rem' }}
          >
            <span>Try SKU Bulk Generator on Shopify</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
