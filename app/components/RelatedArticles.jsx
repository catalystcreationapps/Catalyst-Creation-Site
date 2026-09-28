import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const ALL_ARTICLES = [
  {
    slug: 'how-to-generate-skus-in-shopify',
    title: 'How to Generate SKUs in Shopify: Complete Guide',
    desc: 'Step-by-step tutorial on creating manual, variant, and automated bulk SKUs for your Shopify store.',
    category: 'Guide'
  },
  {
    slug: 'bulk-sku-generator-shopify',
    title: 'Bulk SKU Generator for Shopify: Create SKUs Faster',
    desc: 'Create and update Shopify SKUs in bulk using custom rules, variant logic, and catalog filters.',
    category: 'Automation'
  },
  {
    slug: 'shopify-sku-naming-convention',
    title: 'Shopify SKU Naming Convention: Examples & Best Practices',
    desc: 'Frameworks and real-world examples for structuring brand, category, size, and color SKU formulas.',
    category: 'Best Practices'
  },
  {
    slug: 'shopify-variant-sku-generator',
    title: 'Shopify Variant SKUs: How to Create & Manage Them',
    desc: 'Generate unique, consistent SKUs for multi-option Shopify product variants without duplicate errors.',
    category: 'Variants'
  },
  {
    slug: 'duplicate-skus-shopify',
    title: 'Duplicate SKUs in Shopify: How to Find and Fix Them',
    desc: 'Understand why SKU collisions happen in Shopify, how to detect them, and how to fix duplicates.',
    category: 'Troubleshooting'
  },
  {
    slug: 'what-is-a-sku',
    title: 'What Is a SKU? SKU Meaning, Examples & Guide',
    desc: 'Comprehensive overview of Stock Keeping Units, SKU vs barcode vs UPC, and retail architecture.',
    category: 'Fundamentals'
  }
];

export default function RelatedArticles({ currentSlug }) {
  const filtered = ALL_ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 3);

  return (
    <section style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
        <BookOpen size={20} color="#3A925F" />
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#132937' }}>
          Related Shopify SKU Guides
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((item, idx) => (
          <Link key={idx} href={`/blog/${item.slug}`} style={{ textDecoration: 'none' }}>
            <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', color: '#3A925F', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.category}
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#132937', marginTop: '0.4rem', marginBottom: '0.6rem', lineHeight: '1.4' }}>
                {item.title}
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                {item.desc}
              </p>
              <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Read Guide <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
