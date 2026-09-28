import Link from 'next/link';
import { Layers, CheckCircle2, ArrowRight, Sliders, Zap, Check, AlertCircle } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleCta from '../../components/ArticleCta';
import RelatedArticles from '../../components/RelatedArticles';

export const metadata = {
  title: 'Shopify Variant SKUs: How to Create & Manage Them',
  description: 'Learn how to create unique SKUs for Shopify product variants such as size, color, material, and other options.',
  keywords: [
    'Shopify variant SKU',
    'Shopify variant SKU generator',
    'Shopify product variants SKU',
    'variant SKU format Shopify',
    'bulk SKU generator Shopify',
    'Shopify SKU generator'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/blog/shopify-variant-sku-generator',
  },
  openGraph: {
    title: 'Shopify Variant SKUs: How to Create & Manage Them',
    description: 'Learn how to create unique SKUs for Shopify product variants such as size, color, material, and other options.',
    url: 'https://catalyst-creation-site.vercel.app/blog/shopify-variant-sku-generator',
    type: 'article',
  },
};

export default function ShopifyVariantSkuGeneratorPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Shopify Variant SKUs: How to Create & Manage Them',
    description: 'Learn how to create unique SKUs for Shopify product variants such as size, color, material, and other options.',
    author: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      url: 'https://catalyst-creation-site.vercel.app'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Catalyst Creation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://catalyst-creation-site.vercel.app/images/logo-with-text.png'
      }
    },
    datePublished: '2026-09-12T08:00:00+00:00',
    dateModified: '2026-09-28T08:00:00+00:00',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://catalyst-creation-site.vercel.app/blog/shopify-variant-sku-generator'
    }
  };

  return (
    <article style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container-custom" style={{ maxWidth: '860px' }}>
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Shopify Variant SKUs', href: '/blog/shopify-variant-sku-generator' }
        ]} />

        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.35rem 0.85rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.825rem', fontWeight: '700', marginBottom: '1rem' }}>
            <Layers size={14} />
            <span>Variant Operations</span>
          </div>

          <h1 style={{
            fontSize: '2.75rem',
            fontWeight: '800',
            color: '#132937',
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            marginBottom: '1rem'
          }}>
            How to Create SKUs for Shopify Product Variants
          </h1>

          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
            By Catalyst Creation Engineering Team • 6 min read • Updated September 2026
          </p>
        </header>

        {/* Content Body */}
        <div style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            In ecommerce, a single product listing often represents dozens of distinct purchasable items. When a customer selects a specific size, color, or material combination, your warehouse and inventory software need a precise identifier. Managing a <strong>Shopify variant SKU</strong> system ensures that every option combination is tracked, stocked, and fulfilled accurately.
          </p>

          <p>
            In this guide, we explain what product variants are in Shopify, why every variant needs a distinct SKU, how to format multi-option variant codes, and how to automate variant SKU generation.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            What is a Product Variant in Shopify?
          </h2>
          <p>
            In Shopify, a <strong>Product Variant</strong> represents a specific version of a parent product differentiated by options such as:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li><strong>Option 1 (Size):</strong> Small, Medium, Large, XL</li>
            <li><strong>Option 2 (Color):</strong> Heather Grey, Navy, Black, Forest Green</li>
            <li><strong>Option 3 (Material / Fit):</strong> Cotton, Slim Fit, Relaxed Fit</li>
          </ul>
          <p>
            A product with 4 sizes and 3 colors results in <strong>12 unique variants</strong> (4 × 3 = 12). In Shopify, each individual variant has its own price, barcode, inventory quantity, and <strong>SKU string</strong>.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Why Each Variant Must Have a Unique SKU
          </h2>
          <p>
            Some merchants mistakenly give all variants of a product the same parent SKU. This creates serious inventory breakdown:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Fulfillment Collisions:</strong> If a Black Medium and a White Small have the same SKU <code>SHIRT-001</code>, warehouse pickers will frequently ship the incorrect variant.</li>
            <li><strong>Inventory Tracking Failure:</strong> When stock sells out in Black Medium, the system cannot decrement that specific item if all colors share one SKU.</li>
            <li><strong>Channel Sync Errors:</strong> Amazon and TikTok Shop reject listings if multiple variant children share identical SKU codes.</li>
          </ul>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Variant SKU Formula Examples
          </h2>

          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginTop: '0.5rem' }}>
            Single-Option Variants (Size SKUs)
          </h3>
          <p>For products with only one option (e.g. Size):</p>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            Formula: [PRODUCT_CODE]-[SIZE]<br />
            • Small → <code>JCKT-DENIM-SM</code><br />
            • Medium → <code>JCKT-DENIM-MD</code><br />
            • Large → <code>JCKT-DENIM-LG</code>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginTop: '0.5rem' }}>
            Two-Option Matrix (Size + Color SKUs)
          </h3>
          <p>For products with two options, arrange color before size for clean warehouse grouping:</p>
          <div style={{ overflowX: 'auto', margin: '0.75rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
                  <th style={{ padding: '0.65rem 1rem' }}>Product Title</th>
                  <th style={{ padding: '0.65rem 1rem' }}>Color</th>
                  <th style={{ padding: '0.65rem 1rem' }}>Size</th>
                  <th style={{ padding: '0.65rem 1rem' }}>Variant SKU</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.65rem 1rem' }}>Tech Fleece Hoodie</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Black (BLK)</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Small (SM)</td>
                  <td style={{ padding: '0.65rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TFH-BLK-SM</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.65rem 1rem' }}>Tech Fleece Hoodie</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Black (BLK)</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Medium (MD)</td>
                  <td style={{ padding: '0.65rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TFH-BLK-MD</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.65rem 1rem' }}>Tech Fleece Hoodie</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Olive (OLV)</td>
                  <td style={{ padding: '0.65rem 1rem' }}>Large (LG)</td>
                  <td style={{ padding: '0.65rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>TFH-OLV-LG</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ArticleCta
            title="Generate Unique SKUs for All Variants Automatically"
            description="Our Shopify SKU Generator evaluates your product variant matrix in real time, mapping option names to clean abbreviations without duplicate errors."
          />

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Bulk Variant SKU Generation
          </h2>
          <p>
            When adding multi-option products with 20+ variants, manually typing each variant SKU in the Shopify Admin table is tedious. Using a <Link href="/shopify-sku-generator" style={{ color: '#3A925F', fontWeight: '600' }}>Shopify SKU generator</Link>, you can assign rule tokens such as <code>{'{TITLE}-{OPTION_1}-{OPTION_2}'}</code> to populate the entire matrix in one click.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Preventing Duplicate Variant Codes
          </h2>
          <p>
            If different products share similar variant names, incorporate unique tokens like <code>{'{VENDOR}'}</code> or <code>{'{AUTO_INC}'}</code> to guarantee 100% uniqueness across the catalog. If duplicate codes already exist in your store, read our troubleshooting guide on <Link href="/blog/duplicate-skus-shopify" style={{ color: '#3A925F', fontWeight: '600' }}>fixing duplicate SKUs in Shopify</Link>.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Automating Variant SKU Creation on New Products
          </h2>
          <p>
            By activating background webhook auto-generation, every time you add a new variant to an existing product or publish a new multi-variant line, your custom naming rules are evaluated immediately. Learn more in our <Link href="/blog/how-to-generate-skus-in-shopify" style={{ color: '#3A925F', fontWeight: '600' }}>complete guide to generating SKUs in Shopify</Link>.
          </p>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentSlug="shopify-variant-sku-generator" />
      </div>
    </article>
  );
}
