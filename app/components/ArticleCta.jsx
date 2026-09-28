import Link from 'next/link';
import { Zap, ArrowRight, ExternalLink } from 'lucide-react';

export default function ArticleCta({
  title = "Automate Your Shopify SKUs in Bulk",
  description = "Managing a large Shopify catalog? SKU Bulk Generator helps you create and update SKUs in bulk using customizable rule templates, variant logic, and real-time auto-generation."
}) {
  return (
    <div className="glass-card" style={{
      padding: '2.25rem',
      margin: '3rem 0',
      background: 'linear-gradient(135deg, rgba(58, 146, 95, 0.06) 0%, rgba(19, 41, 55, 0.03) 100%)',
      border: '1px solid rgba(58, 146, 95, 0.25)',
      borderRadius: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#3A925F', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0 }}>
          <Zap size={20} />
        </div>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#132937', marginBottom: '0.5rem' }}>
            {title}
          </h4>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://apps.shopify.com/sku-bulk-generator"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
            >
              <span>Try SKU Bulk Generator →</span>
            </a>
            <Link
              href="/shopify-sku-generator"
              style={{ color: '#3A925F', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              Explore SKU Generator Features <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
