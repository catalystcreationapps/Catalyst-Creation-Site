'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Rocket,
  Zap,
  Sliders,
  Check,
  Star,
  ExternalLink,
  Code2,
  Store,
  ShieldCheck,
  Cpu,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  BookOpen,
  HelpCircle,
  History,
  Layers,
  CheckSquare,
  Wrench
} from 'lucide-react';

export default function Home() {
  const [productTitle, setProductTitle] = useState('Classic Denim Jacket');
  const [vendor, setVendor] = useState('UrbanFit');
  const [prefix, setPrefix] = useState('CAT-');
  const [separator, setSeparator] = useState('-');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    service: 'Custom Shopify App',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const generatePreviewSku = (index, optionName) => {
    const pTitlePart = productTitle.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'PROD';
    const vendorPart = vendor.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'VEND';
    let bodyVal = String(index + 1).padStart(4, '0');
    const sep = separator === 'none' ? '' : separator;
    const cleanPrefix = prefix.trim();
    const parts = [cleanPrefix, vendorPart, pTitlePart, optionName.toUpperCase(), bodyVal].filter(Boolean);
    return parts.join(sep);
  };

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
        setFormData({ name: '', email: '', storeUrl: '', service: 'Custom Shopify App', message: '' });
      } else {
        setSubmitError(data.error || 'Failed to send. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSubmitError('Connection error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <span className="badge-glow">
              <Sparkles size={16} color="#3A925F" />
              <span>5+ Years Shopify Engineering & Merchant Operations Experience</span>
            </span>
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            lineHeight: '1.15',
            letterSpacing: '-0.035em',
            marginBottom: '1.5rem',
            maxWidth: '920px',
            margin: '0 auto 1.5rem auto',
            color: '#132937'
          }}>
            We Build High-Performance <br />
            <span className="text-gradient">Shopify Apps & Custom Solutions</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#475569',
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto'
          }}>
            Engineered by senior Shopify developers and store owners. We combine <strong>5+ years of custom Shopify app development</strong> with hands-on store management expertise to solve real merchant challenges.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#apps" className="btn-primary">
              <span>Explore Our Apps</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Request Custom Solution</span>
              <Code2 size={18} color="#3A925F" />
            </a>
          </div>

          {/* Core Metrics */}
          <div className="glass-card" style={{
            marginTop: '4rem',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '4rem auto 0 auto'
          }}>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#132937' }}>5+ Years</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Shopify Development</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#3A925F' }}>10M+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>SKUs Automated</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#132937' }}>Store Managed</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Real Merchant Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#3A925F' }}>99.9%</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Cloud Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation / Documentation Cards */}
      <section style={{ padding: '2rem 0 4rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em' }}>
              Explore App Resources & Support
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Everything you need to master our apps and streamline your Shopify operations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            <Link href="/sku-app-doc" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(58, 146, 95, 0.1)', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={22} color="#3A925F" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>SKU App Documentation</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  In-depth technical guides for SKU Bulk Generator rule tokens, pattern structures, and Shopify catalog sync.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Specs <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/tutorial" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(58, 146, 95, 0.1)', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={22} color="#3A925F" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>Step-by-Step Tutorials</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  Visual onboarding tutorials, SKU rule setup walk-throughs, and best practices for catalog management.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Tutorials <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/faq" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(58, 146, 95, 0.1)', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HelpCircle size={22} color="#3A925F" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>Merchant FAQ</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  Answers to common merchant questions regarding Shopify permissions, billing, custom rules, and safety.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Browse FAQs <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/changelog" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(58, 146, 95, 0.1)', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <History size={22} color="#3A925F" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>Changelog & Updates</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  Track our latest app feature releases, performance enhancements, and future Shopify engineering roadmap.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  See What's New <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship App Section */}
      <section id="apps" style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-glow">
              <Zap size={16} color="#3A925F" />
              <span>Flagship Shopify App</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', color: '#132937', letterSpacing: '-0.02em' }}>
              SKU Bulk Generator for Shopify
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '640px', margin: '0.75rem auto 0 auto' }}>
              The complete automated SKU management suite for Shopify merchants. Generate, format, clean up, and audit SKUs in bulk.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '3rem', background: '#f8fafc', borderColor: '#e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.4rem 1rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                  <Star size={14} fill="#3A925F" />
                  <span>Top-Rated Merchant Tool</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#132937', lineHeight: '1.25' }}>
                  Automate Store SKUs in Bulk & On New Product Creation
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Stop spending hours manually typing SKU codes or fixing duplicate SKU errors. SKU Bulk Generator automates your entire catalog using smart rule templates based on product titles, vendors, types, and variant options.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Auto-generate SKUs when new products are created</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Custom token syntax: Vendor, Title, Variant Options, Auto-Increment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Duplicate detection and safety rollback controls</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://sku-bulk-generator.onrender.com" target="_blank" rel="noreferrer" className="btn-primary">
                    <span>Install SKU Bulk Generator</span>
                    <ExternalLink size={18} />
                  </a>
                  <Link href="/sku-app-doc" className="btn-secondary">
                    <span>View Documentation</span>
                    <FileText size={18} color="#3A925F" />
                  </Link>
                </div>
              </div>

              {/* Interactive Demo Box */}
              <div id="demo" style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #cbd5e1', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontWeight: '700', fontSize: '1rem', color: '#132937', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sliders size={18} color="#3A925F" /> Live Interactive SKU Rule Builder
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Product Title</label>
                    <input
                      type="text"
                      value={productTitle}
                      onChange={(e) => setProductTitle(e.target.value)}
                      style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Vendor</label>
                      <input
                        type="text"
                        value={vendor}
                        onChange={(e) => setVendor(e.target.value)}
                        style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Prefix</label>
                      <input
                        type="text"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                        style={{ width: '100%', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: '#132937', fontSize: '0.9rem', fontWeight: '500' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#475569', fontWeight: '600', marginBottom: '0.35rem' }}>Separator</label>
                    <select
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
                    <div style={{ fontSize: '0.8rem', color: '#3A925F', fontWeight: '700', marginBottom: '0.5rem' }}>Generated Live Variant SKU Previews:</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section id="services" style={{ padding: '5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-glow">
              <Code2 size={16} color="#3A925F" />
              <span>Custom Shopify Development</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', color: '#132937', letterSpacing: '-0.02em' }}>
              Tailored Shopify Engineering & Apps
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '620px', margin: '0.75rem auto 0 auto' }}>
              Need a bespoke public/private Shopify app or automated backend logic for your store?
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Layers size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Custom Private Shopify Apps</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We build dedicated, secure Shopify apps integrated directly with your store's APIs, inventory systems, ERPs, and fulfillment workflows.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Catalog & Data Automation</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Automate complex inventory syncing, price rules, product tagging, metafield management, and order processing across thousands of SKUs.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Wrench size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Theme Extensions & Functions</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Build high-converting checkout extensions, Shopify Functions for custom discount logic, dynamic cart upsells, and custom store blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 0 6rem 0', background: '#f8fafc' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge-glow" style={{ marginBottom: '1rem' }}>
                <Mail size={16} color="#3A925F" />
                <span>Get In Touch</span>
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.75rem', color: '#132937', letterSpacing: '-0.02em' }}>
                Work With Experienced Shopify Engineers
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                Have questions about our apps or want to build custom features? Send us a message below.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem', background: 'rgba(58, 146, 95, 0.1)', border: '1px solid rgba(58, 146, 95, 0.3)', borderRadius: '1rem' }}>
                <CheckCircle2 size={48} color="#3A925F" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#132937' }}>Thank You!</h3>
                <p style={{ color: '#64748b', marginTop: '0.5rem' }}>We have received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@yourstore.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Shopify Store URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="my-store.myshopify.com"
                    value={formData.storeUrl}
                    onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                    style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#334155', fontWeight: '600', marginBottom: '0.4rem' }}>Project Details / Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your Shopify store or custom app requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: '#132937', resize: 'vertical' }}
                  />
                </div>

                {submitError && (
                  <div style={{ color: '#ef4444', background: '#fef2f2', border: '1px solid #fecaca', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem' }}>
                    {submitError}
                  </div>
                )}

                <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}>
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
