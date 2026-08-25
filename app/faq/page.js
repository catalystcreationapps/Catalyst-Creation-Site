'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowLeft, ChevronDown, ChevronUp, Search, Zap, Shield, Code, DollarSign } from 'lucide-react';

const FAQ_DATA = [
  {
    category: 'SKU Bulk Generator',
    icon: Zap,
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
    icon: Shield,
    items: [
      {
        q: 'Is my store data safe with Catalyst Creations Apps?',
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
    icon: Code,
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
    icon: DollarSign,
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
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = FAQ_DATA.filter(cat => activeCategory === 'All' || cat.category === activeCategory);

  return (
    <div style={{ padding: '4rem 0 6rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '960px' }}>
        {/* Navigation back */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={16} color="#3A925F" />
            <span>Merchant Support Center</span>
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#132937', marginTop: '0.75rem' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            Find quick answers regarding SKU Bulk Generator setup, custom app development, security, and Shopify catalog automation.
          </p>

          {/* Search Input */}
          <div style={{ position: 'relative', maxWidth: '540px', margin: '2rem auto 0 auto' }}>
            <Search size={20} color="#64748b" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search questions (e.g. duplicate SKUs, webhooks, private apps)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '0.85rem',
                padding: '0.85rem 1rem 0.85rem 3.25rem',
                color: '#132937',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {['All', 'SKU Bulk Generator', 'Security & Shopify Compliance', 'Custom Engineering Services', 'Pricing & Billing'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? '#3A925F' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                border: activeCategory === cat ? '1px solid #3A925F' : '1px solid #cbd5e1',
                borderRadius: '0.65rem',
                padding: '0.5rem 1.15rem',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredCategories.map((catSection, catIdx) => {
            const IconComponent = catSection.icon;
            const itemsToDisplay = catSection.items.filter(item =>
              !searchQuery ||
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (itemsToDisplay.length === 0) return null;

            return (
              <div key={catIdx} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#3A925F', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                  <IconComponent size={22} />
                  <h2 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937' }}>{catSection.category}</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {itemsToDisplay.map((item, itemIdx) => {
                    const key = `${catIdx}-${itemIdx}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={itemIdx}
                        style={{
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '0.75rem',
                          overflow: 'hidden'
                        }}
                      >
                        <button
                          onClick={() => toggleItem(catIdx, itemIdx)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '1.15rem 1.25rem',
                            background: 'none',
                            border: 'none',
                            color: '#132937',
                            fontWeight: '600',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            gap: '1rem'
                          }}
                        >
                          <span>{item.q}</span>
                          {isOpen ? <ChevronUp size={20} color="#3A925F" /> : <ChevronDown size={20} color="#64748b" />}
                        </button>

                        {isOpen && (
                          <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', color: '#334155', lineHeight: '1.6', fontSize: '0.95rem', borderTop: '1px solid #e2e8f0' }}>
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
