'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Zap, Shield, Code, DollarSign } from 'lucide-react';

export default function FaqClient({ faqData }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqData.filter(cat => activeCategory === 'All' || cat.category === activeCategory);

  return (
    <div>
      {/* Search Input */}
      <div style={{ position: 'relative', maxWidth: '540px', margin: '2rem auto 2.5rem auto' }}>
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
          const itemsToDisplay = catSection.items.filter(item =>
            !searchQuery ||
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (itemsToDisplay.length === 0) return null;

          return (
            <div key={catIdx} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#3A925F', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
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
  );
}
