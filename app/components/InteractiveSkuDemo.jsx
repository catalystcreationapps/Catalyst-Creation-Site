'use client';

import { useState } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export default function InteractiveSkuDemo() {
  const [productTitle, setProductTitle] = useState('Classic Denim Jacket');
  const [vendor, setVendor] = useState('UrbanFit');
  const [prefix, setPrefix] = useState('CAT-');
  const [separator, setSeparator] = useState('-');

  const generatePreviewSku = (index, optionName) => {
    const pTitlePart = productTitle.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'PROD';
    const vendorPart = vendor.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'VEND';
    let bodyVal = String(index + 1).padStart(4, '0');
    const sep = separator === 'none' ? '' : separator;
    const cleanPrefix = prefix.trim();
    const parts = [cleanPrefix, vendorPart, pTitlePart, optionName.toUpperCase(), bodyVal].filter(Boolean);
    return parts.join(sep);
  };

  return (
    <div id="demo" style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #cbd5e1', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
        <span style={{ fontWeight: '700', fontSize: '1rem', color: '#132937', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sliders size={18} color="#3A925F" /> Live Interactive SKU Rule Builder
        </span>
        <span style={{ fontSize: '0.75rem', color: '#3A925F', fontWeight: '600', background: 'rgba(58,146,95,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px' }}>
          Interactive Simulator
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="sku-product-title" style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Product Title</label>
          <input
            id="sku-product-title"
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div>
            <label htmlFor="sku-vendor" style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Vendor</label>
            <input
              id="sku-vendor"
              type="text"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
            />
          </div>
          <div>
            <label htmlFor="sku-prefix" style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Prefix</label>
            <input
              id="sku-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="sku-separator" style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Separator</label>
          <select
            id="sku-separator"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
          >
            <option value="-">Hyphen (-)</option>
            <option value="_">Underscore (_)</option>
            <option value="/">Forward Slash (/)</option>
            <option value="none">None</option>
          </select>
        </div>

        <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px dashed #cbd5e1' }}>
          <div style={{ fontSize: '0.8rem', color: '#3A925F', fontWeight: '700', marginBottom: '0.5rem' }}>Live Generated Variant SKUs:</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Small / Blue', 'Medium / Black', 'Large / Red'].map((variant, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f1f5f9', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#475569', fontWeight: '500' }}>{variant}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#132937' }}>
                  {generatePreviewSku(idx, variant.split('/')[0].trim())}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
