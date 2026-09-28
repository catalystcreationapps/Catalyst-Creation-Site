'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm({ defaultService = 'Shopify Store Management' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    service: defaultService,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', storeUrl: '', service: defaultService, message: '' });
      } else {
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('Connection error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2.5rem', background: 'rgba(58, 146, 95, 0.1)', border: '1px solid rgba(58, 146, 95, 0.3)', borderRadius: '1rem' }}>
        <CheckCircle2 size={48} color="#3A925F" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>Thank You for Reaching Out!</h3>
        <p style={{ color: '#475569', marginTop: '0.5rem', fontSize: '0.95rem' }}>
          We have received your message and a senior Shopify engineer will respond to your inquiry within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Your Name *</label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', fontSize: '0.95rem' }}
          />
        </div>
        <div>
          <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Email Address *</label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="jane@yourstore.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', fontSize: '0.95rem' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label htmlFor="contact-store" style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Shopify Store URL (Optional)</label>
          <input
            id="contact-store"
            type="text"
            placeholder="my-store.myshopify.com"
            value={formData.storeUrl}
            onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
            style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', fontSize: '0.95rem' }}
          />
        </div>
        <div>
          <label htmlFor="contact-service" style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Primary Interest / Service</label>
          <select
            id="contact-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', fontSize: '0.95rem' }}
          >
            <option value="SKU Bulk Generator Inquiries">SKU Bulk Generator Inquiries</option>
            <option value="Shopify Store Management">Shopify Store Management</option>
            <option value="Custom Shopify App Development">Custom Shopify App Development</option>
            <option value="Shopify Store Customization">Shopify Store Customization</option>
            <option value="Catalog & Migration Consulting">Catalog & Migration Consulting</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Project Details or Questions *</label>
        <textarea
          id="contact-message"
          rows={4}
          required
          placeholder="Tell us about your store requirements, catalog challenges, or custom app specs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', resize: 'vertical', fontSize: '0.95rem' }}
        />
      </div>

      {submitError && (
        <div style={{ color: '#ef4444', background: '#fef2f2', border: '1px solid #fecaca', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem' }}>
          {submitError}
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1, padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
        <span>{submitting ? 'Sending...' : 'Send Message'}</span>
        <Send size={18} />
      </button>
    </form>
  );
}
