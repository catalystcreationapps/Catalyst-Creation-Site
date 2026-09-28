import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqClient from './FaqClient';

export const metadata = {
  title: 'Merchant FAQ | Catalyst Creation',
  description: 'Frequently asked questions regarding SKU Bulk Generator setup, custom Shopify app development, data safety, duplicate SKUs, and Shopify billing.',
  keywords: [
    'Shopify SKU FAQ',
    'SKU Bulk Generator questions',
    'Shopify app safety',
    'Shopify duplicate SKU fix'
  ],
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app/faq',
  },
  openGraph: {
    title: 'Merchant FAQ | Catalyst Creation',
    description: 'Frequently asked questions regarding SKU Bulk Generator setup, custom Shopify app development, data safety, duplicate SKUs, and Shopify billing.',
    url: 'https://catalyst-creation-site.vercel.app/faq',
    type: 'website',
  },
};

const FAQ_DATA = [
  {
    category: 'SKU Bulk Generator',
    items: [
      {
        q: 'How does SKU Bulk Generator create SKUs for my Shopify store?',
        a: 'SKU Bulk Generator uses flexible token templates (e.g. {VENDOR}-{TITLE}-{VARIANT}-{AUTO_INC}). You define your desired pattern, test it using live instant previews, and run a bulk update across selected collections, tags, or your entire store catalog.'
      },
      {
        q: 'Will SKU Bulk Generator overwrite existing product SKUs?',
        a: 'Only if you explicitly choose to! You can configure the app to only target products with missing/empty SKUs, or you can run a complete catalog overwrite if you are restructuring your SKU numbering scheme.'
      },
      {
        q: 'Does the app automatically generate SKUs for new products?',
        a: 'Yes! SKU Bulk Generator listens to Shopify product creation webhooks. When you or your team add a new product or variant, the app applies your active default rule pattern within seconds.'
      },
      {
        q: 'What happens if two variants end up with duplicate SKUs?',
        a: 'Our smart duplicate detection engine flags potential collisions before updating Shopify. You can enable auto-increment numbering ({AUTO_INC}) to guarantee 100% unique SKUs across every variant.'
      }
    ]
  },
  {
    category: 'Security & Shopify Compliance',
    items: [
      {
        q: 'Is my store data safe with Catalyst Creation?',
        a: 'Absolutely. We strictly adhere to official Shopify App Store security standards. We only request minimum necessary API permissions (write_products) and use encrypted TLS 1.3 connections for all data transfer.'
      },
      {
        q: 'Do you store customer order details or payment data?',
        a: 'No. Our apps focus entirely on product catalog engineering and SKU management. We never request access to customer details, credit cards, or order financial records.'
      },
      {
        q: 'What happens when I uninstall the app?',
        a: 'Upon uninstallation, Shopify sends an automated GDPR compliance webhook. All store API tokens, custom rules, and cached shop metadata are permanently purged from our servers within 48 hours.'
      }
    ]
  },
  {
    category: 'Custom Engineering Services',
    items: [
      {
        q: 'Can you build custom private Shopify apps for our business?',
        a: 'Yes! With 5+ years of dedicated Shopify engineering experience, we build custom private apps, ERP/WMS inventory integrations, custom checkout extensions, and Shopify Functions tailored to your exact workflow.'
      },
      {
        q: 'How do custom development requests work?',
        a: 'You can contact us via our contact form or email (catalystcreationapps@gmail.com). We schedule a scoping call to review requirements, provide a fixed project timeline and quote, and handle full development, QA, and deployment.'
      }
    ]
  },
  {
    category: 'Pricing & Billing',
    items: [
      {
        q: 'How is SKU Bulk Generator billed?',
        a: 'All app subscriptions are managed securely directly through your Shopify store billing invoice. No external credit card entry is required.'
      },
      {
        q: 'Is there a free trial available?',
        a: 'Yes! All plans include a free trial period allowing you to test rule generation, preview SKUs, and perform bulk updates risk-free.'
      }
    ]
  }
];

export default function FAQPage() {
  const faqList = FAQ_DATA.flatMap(cat => cat.items);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map(item => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom" style={{ maxWidth: '960px' }}>
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={16} color="#3A925F" />
            <span>Merchant Support Center</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem', lineHeight: '1.2' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            Find quick answers regarding SKU Bulk Generator setup, custom app development, security, and Shopify catalog automation.
          </p>
        </div>

        <FaqClient faqData={FAQ_DATA} />
      </div>
    </div>
  );
}
