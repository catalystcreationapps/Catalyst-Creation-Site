import Link from 'next/link';
import { BookOpen, ArrowRight, Tag, Sparkles, Layers, FileSpreadsheet, ShieldAlert, Cpu } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export const metadata = {
  title: 'Shopify SKU & Catalog Management Blog | Catalyst Creation',
  description: 'In-depth guides, SKU naming convention frameworks, variant SKU strategies, and catalog automation best practices for Shopify store owners.',
  keywords: [
    'Shopify SKU blog',
    'Shopify SKU generator guide',
    'bulk SKU generator Shopify',
    'Shopify SKU naming convention',
    'duplicate SKU Shopify',
    'Shopify variant SKUs'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/blog',
  },
  openGraph: {
    title: 'Shopify SKU & Catalog Management Blog | Catalyst Creation',
    description: 'In-depth guides, SKU naming convention frameworks, variant SKU strategies, and catalog automation best practices for Shopify store owners.',
    url: 'https://catalyst-creation-site.vercel.app/blog',
    type: 'website',
  },
};

const ARTICLES = [
  {
    slug: 'how-to-generate-skus-in-shopify',
    title: 'How to Generate SKUs in Shopify: Complete Guide',
    desc: 'Learn how to create SKUs in Shopify, choose a SKU format, manage product variants, avoid duplicates, and automate SKU generation for your store.',
    category: 'Complete Guide',
    icon: BookOpen,
    readTime: '7 min read',
    date: 'Updated September 2026'
  },
  {
    slug: 'bulk-sku-generator-shopify',
    title: 'Bulk SKU Generator for Shopify: Create SKUs Faster',
    desc: 'Create and update Shopify SKUs in bulk using custom rules. Learn how bulk SKU generation works for products, variants, and large catalogs.',
    category: 'Bulk Automation',
    icon: FileSpreadsheet,
    readTime: '6 min read',
    date: 'Updated September 2026'
  },
  {
    slug: 'shopify-sku-naming-convention',
    title: 'Shopify SKU Naming Convention: Examples & Best Practices',
    desc: 'Learn how to create a consistent Shopify SKU naming convention with examples for products, variants, categories, brands, colors, and sizes.',
    category: 'Best Practices',
    icon: Tag,
    readTime: '8 min read',
    date: 'Updated September 2026'
  },
  {
    slug: 'shopify-variant-sku-generator',
    title: 'Shopify Variant SKUs: How to Create & Manage Them',
    desc: 'Learn how to create unique SKUs for Shopify product variants such as size, color, material, and other options without duplicate errors.',
    category: 'Variant Management',
    icon: Layers,
    readTime: '6 min read',
    date: 'Updated September 2026'
  },
  {
    slug: 'duplicate-skus-shopify',
    title: 'Duplicate SKUs in Shopify: How to Find and Fix Them',
    desc: 'Learn why duplicate SKUs happen in Shopify, how to find duplicate SKUs, and how to create a consistent SKU system to prevent duplicates.',
    category: 'Troubleshooting',
    icon: ShieldAlert,
    readTime: '7 min read',
    date: 'Updated September 2026'
  },
  {
    slug: 'what-is-a-sku',
    title: 'What Is a SKU? SKU Meaning, Examples & Guide',
    desc: 'What is a SKU? Learn what SKU means, how SKUs work, SKU examples, SKU vs barcode, and how to create a SKU system for your Shopify store.',
    category: 'Fundamentals',
    icon: Cpu,
    readTime: '5 min read',
    date: 'Updated September 2026'
  }
];

export default function BlogHubPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Catalyst Creation Shopify Blog',
    url: 'https://catalyst-creation-site.vercel.app/blog',
    description: 'Expert tutorials, SKU naming frameworks, and store catalog operations guides for Shopify merchants.',
    blogPost: ARTICLES.map(article => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.desc,
      url: `https://catalyst-creation-site.vercel.app/blog/${article.slug}`,
      author: {
        '@type': 'Organization',
        name: 'Catalyst Creation'
      }
    }))
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="container-custom">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <BookOpen size={16} color="#3A925F" />
            <span>Ecommerce Knowledge Base</span>
          </span>
          <h1 style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            color: '#132937',
            letterSpacing: '-0.03em',
            marginTop: '0.75rem',
            lineHeight: '1.2'
          }}>
            Shopify SKU & Store Management Blog
          </h1>
          <p style={{
            color: '#475569',
            fontSize: '1.15rem',
            lineHeight: '1.6',
            maxWidth: '680px',
            margin: '0.75rem auto 0 auto'
          }}>
            Actionable guides, structured SKU naming formulas, variant management strategies, and catalog automation best practices written for Shopify merchants.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {ARTICLES.map((article, idx) => {
            const IconComp = article.icon;
            return (
              <Link key={idx} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '2.25rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.35rem 0.85rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.8rem', fontWeight: '700' }}>
                      <IconComp size={14} />
                      <span>{article.category}</span>
                    </div>
                    <span style={{ fontSize: '0.825rem', color: '#64748b' }}>{article.readTime}</span>
                  </div>

                  <h2 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                    {article.title}
                  </h2>

                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6', flex: 1, marginBottom: '1.5rem' }}>
                    {article.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{article.date}</span>
                    <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
