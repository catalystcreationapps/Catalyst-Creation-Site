import Link from 'next/link';
import { Cpu, CheckCircle2, ArrowRight, Layers, Tag, BookOpen, BarChart3, HelpCircle } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ArticleCta from '../../components/ArticleCta';
import RelatedArticles from '../../components/RelatedArticles';

export const metadata = {
  title: 'What Is a SKU? SKU Meaning, Examples & Guide',
  description: 'What is a SKU? Learn what SKU means, how SKUs work, SKU examples, SKU vs barcode, and how to create a SKU system for your Shopify store.',
  keywords: [
    'what is a SKU',
    'SKU meaning',
    'what does SKU stand for',
    'SKU examples',
    'SKU vs barcode',
    'SKU vs UPC',
    'Shopify SKU generator'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/blog/what-is-a-sku',
  },
  openGraph: {
    title: 'What Is a SKU? SKU Meaning, Examples & Guide',
    description: 'What is a SKU? Learn what SKU means, how SKUs work, SKU examples, SKU vs barcode, and how to create a SKU system for your Shopify store.',
    url: 'https://catalyst-creation-site.vercel.app/blog/what-is-a-sku',
    type: 'article',
  },
};

export default function WhatIsASkuPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is a SKU? SKU Meaning, Examples & Guide',
    description: 'What is a SKU? Learn what SKU means, how SKUs work, SKU examples, SKU vs barcode, and how to create a SKU system for your Shopify store.',
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
    datePublished: '2026-09-18T08:00:00+00:00',
    dateModified: '2026-09-28T08:00:00+00:00',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://catalyst-creation-site.vercel.app/blog/what-is-a-sku'
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
          { label: 'What Is a SKU?', href: '/blog/what-is-a-sku' }
        ]} />

        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.35rem 0.85rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.825rem', fontWeight: '700', marginBottom: '1rem' }}>
            <Cpu size={14} />
            <span>Ecommerce Fundamentals</span>
          </div>

          <h1 style={{
            fontSize: '2.75rem',
            fontWeight: '800',
            color: '#132937',
            lineHeight: '1.2',
            letterSpacing: '-0.03em',
            marginBottom: '1rem'
          }}>
            What Is a SKU?
          </h1>

          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
            By Catalyst Creation Engineering Team • 5 min read • Updated September 2026
          </p>
        </header>

        {/* Content Body */}
        <div style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p>
            Whether you are managing a boutique Shopify storefront or operating a multi-warehouse enterprise brand, understanding <strong>what is a SKU</strong> is the first step toward effective inventory management. SKUs allow merchants to track stock levels, avoid shipping errors, and analyze sales performance across diverse product variants.
          </p>

          <p>
            In this educational guide, we explain the meaning of SKU, what SKU stands for, how SKUs function in retail and ecommerce, the critical differences between SKUs, barcodes, and UPCs, and how to create an effective SKU numbering system for your store.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            What Does SKU Stand For? (SKU Meaning)
          </h2>
          <p>
            <strong>SKU</strong> stands for <strong>Stock Keeping Unit</strong>. Pronounced &quot;skew&quot;, it is a unique alphanumeric code assigned by a retailer or merchant to identify, track, and manage an individual product and each of its distinct variants.
          </p>
          <p>
            Unlike universal barcode numbers, a SKU is an <em>internal</em> identifier created specifically for and by your own business. You have complete freedom over its structure, length, and format.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            How SKUs Work in Retail and Ecommerce
          </h2>
          <p>
            In retail and ecommerce software like Shopify, every distinct item in your warehouse has an associated SKU. When a customer purchases a product, the platform references the SKU to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Deduct Stock Automatically:</strong> Reduce the available count for that specific variant at the correct fulfillment location.</li>
            <li><strong>Generate Warehouse Pick Lists:</strong> Direct fulfillment staff to the exact aisle, shelf, or bin containing the item.</li>
            <li><strong>Trigger Reorder Points:</strong> Notify procurement managers when a specific SKU falls below minimum inventory thresholds.</li>
            <li><strong>Track Financial Profitability:</strong> Calculate cost of goods sold (COGS) and margins on a per-variant basis.</li>
          </ul>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Practical SKU Examples Across Industries
          </h2>
          <p>
            A well-constructed SKU conveys key product traits through human-readable abbreviations:
          </p>

          <div style={{ overflowX: 'auto', margin: '0.75rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Industry</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Product & Options</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Sample SKU Code</th>
                  <th style={{ padding: '0.75rem 1rem' }}>SKU Breakdown</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Apparel</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Nike Air Tee, Black, Medium</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>NK-TEE-BLK-MD</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#64748b' }}>Brand (NK) + Item (TEE) + Color (BLK) + Size (MD)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Electronics</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Wireless Headphone, Silver, V2</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>AUD-WH-SLV-02</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#64748b' }}>Category (AUD) + Model (WH) + Color (SLV) + Rev (02)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Cosmetics</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Matte Lipstick, Ruby Red, 3.5g</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: '#3A925F', fontWeight: '700' }}>LIP-MAT-RBY-35</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#64748b' }}>Type (LIP) + Finish (MAT) + Shade (RBY) + Size (35)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            SKU vs. Barcode vs. UPC vs. GTIN: What is the Difference?
          </h2>
          <p>
            Many merchants confuse SKUs with barcodes and universal product identifiers. Here is how they differ:
          </p>

          <div style={{ overflowX: 'auto', margin: '0.75rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Code Type</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Scope</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Created By</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Format</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '700', color: '#3A925F' }}>SKU</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Internal to your business</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Merchant / Store Owner</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>Alphanumeric (8-16 chars)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '700' }}>UPC (Universal Product Code)</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Global standard (North America)</td>
                  <td style={{ padding: '0.75rem 1rem' }}>GS1 Standards Organization</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>12 numeric digits</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '700' }}>EAN / GTIN</td>
                  <td style={{ padding: '0.75rem 1rem' }}>International Global Trade Item</td>
                  <td style={{ padding: '0.75rem 1rem' }}>GS1 Standards Organization</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>13 or 14 numeric digits</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: '700' }}>Barcode</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Visual machine-readable format</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Encodes SKU or UPC</td>
                  <td style={{ padding: '0.75rem 1rem' }}>1D lines or 2D QR matrix</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            Why Shopify Stores Need a Consistent SKU System
          </h2>
          <p>
            When scaling an online store, a consistent SKU structure is vital for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Avoiding Duplicate SKUs:</strong> Preventing stock count collisions between similar products. Read more in our guide on <Link href="/blog/duplicate-skus-shopify" style={{ color: '#3A925F', fontWeight: '600' }}>fixing duplicate SKUs in Shopify</Link>.</li>
            <li><strong>Managing Variants Smoothly:</strong> Tracking inventory accurately across sizes, colors, and materials. See our guide on <Link href="/blog/shopify-variant-sku-generator" style={{ color: '#3A925F', fontWeight: '600' }}>Shopify variant SKUs</Link>.</li>
            <li><strong>Standardizing Naming Conventions:</strong> Ensuring every member of your team follows identical formulas. Review our <Link href="/blog/shopify-sku-naming-convention" style={{ color: '#3A925F', fontWeight: '600' }}>Shopify SKU naming convention best practices</Link>.</li>
          </ul>

          <ArticleCta
            title="Create and Manage Store SKUs Effortlessly"
            description="Use our Shopify SKU Generator to create custom rule patterns, generate thousands of SKUs in bulk, and automate SKU assignment on new products."
          />

          <h2 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#132937', marginTop: '1rem' }}>
            How to Create SKUs and Generate Them in Bulk
          </h2>
          <p>
            Creating a few SKUs manually is simple inside the Shopify Admin, but as your store grows to hundreds of products, manual entry becomes slow and prone to errors. Using a specialized <Link href="/shopify-sku-generator" style={{ color: '#3A925F', fontWeight: '600' }}>Shopify SKU generator</Link> allows you to define a formula once and generate compliant SKUs across your entire catalog in seconds. Learn how in our <Link href="/blog/how-to-generate-skus-in-shopify" style={{ color: '#3A925F', fontWeight: '600' }}>complete guide to generating SKUs in Shopify</Link>.
          </p>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentSlug="what-is-a-sku" />
      </div>
    </article>
  );
}
