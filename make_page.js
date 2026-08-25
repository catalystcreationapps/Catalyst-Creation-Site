const fs = require('fs');
const path = require('path');

const pageContent = 'use client';
import { useState } from 'react';
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
  Sparkles
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

  const generatePreviewSku = (index, optionName) => {
    const pTitlePart = productTitle.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'PROD';
    const vendorPart = vendor.replace(/\s+/g, '').substring(0, 4).toUpperCase() || 'VEND';
    let bodyVal = String(index + 1).padStart(4, '0');
    const sep = separator === 'none' ? '' : separator;
    const cleanPrefix = prefix.trim();
    const parts = [cleanPrefix, vendorPart, pTitlePart, optionName.toUpperCase(), bodyVal].filter(Boolean);
    return parts.join(sep);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(8, 12, 20, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className= container-custom style={{
          height: '4.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
            }}>
              <Rocket size={20} color=white />
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#f3f4f6' }}>
                Catalyst <span className=text-gradient>Creations</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.7rem', color: '#9ca3af', textTransform: 'uppercase' }}>
                Apps & E-Commerce Engineering
              </span>
            </div>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href=#apps style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Our Apps</a>
            <a href=#demo style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Live Demo</a>
            <a href=#experience style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Why Us</a>
            <a href=#services style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Services</a>
          </nav>

          <a href=#contact className=btn-primary style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
            <span>Book Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <section style={{ padding: '5rem 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
          <div className=container-custom style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className=badge-glow>
                <Sparkles size={16} color=#a5b4fc />
                <span>5+ Years Shopify Engineering & Merchant Operations Experience</span>
              </span>
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto'
            }}>
              We Build High-Performance <br />
              <span className=text-gradient>Shopify Apps & Custom Solutions</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: '#9ca3af',
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto'
            }}>
              Engineered by experienced store owners and senior developers. We combine <strong>5+ years of custom Shopify app development</strong> with hands-on store management expertise to solve complex merchant challenges.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href=#apps className=btn-primary>
                <span>Explore Our Apps</span>
                <ArrowRight size={18} />
              </a>
              <a href=#contact className=btn-secondary>
                <span>Request Custom Solution</span>
                <Code2 size={18} />
              </a>
            </div>

            <div className=glass-card style={{
              marginTop: '4rem',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '4rem auto 0 auto'
            }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#6366f1' }}>5+ Years</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.25rem' }}>Shopify Engineering</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#38bdf8' }}>10M+</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.25rem' }}>SKUs Automated</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#a855f7' }}>Store Managed</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.25rem' }}>Real Merchant Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#34d399' }}>99.9%</div>
                <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.25rem' }}>Cloud Uptime</div>
              </div>
            </div>
          </div>
        </section>

        <section id=apps style={{ padding: '5rem 0', background: 'rgba(15, 23, 42, 0.4)' }}>
          <div className=container-custom>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className=badge-glow>
                <Zap size={16} color=#a5b4fc />
                <span>Flagship Shopify App</span>
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem' }}>
                SKU Bulk Generator for Shopify
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
                The complete automated SKU management suite for Shopify merchants. Generate, format, and audit SKUs in bulk.
              </p>
            </div>

            <div className=glass-card style={{ padding: '3rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99,102,241,0.15)', padding: '0.4rem 1rem', borderRadius: '999px', color: '#818cf8', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                    <Star size={14} fill=#818cf8 />
                    <span>Top-Rated App</span>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Automate Your Store SKUs in Bulk & On New Product Creation
                  </h3>
                  <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    Stop spending hours manually typing SKU codes or fixing duplicate SKU errors. SKU Bulk Generator automates your entire catalog using smart rule templates based on product titles, vendors, types, and variant options.
                  </p>

                  <a href=https://sku-bulk-generator.onrender.com target=_blank rel=noreferrer className=btn-primary>
                    <span>Install SKU Bulk Generator</span>
                    <ExternalLink size={18} />
                  </a>
                </div>

                <div id=demo style={{ background: '#090d16', borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontWeight: '700', fontSize: '1rem', color: '#a5b4fc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sliders size={18} /> Live Interactive SKU Rule Builder
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.35rem' }}>Product Title</label>
                      <input
                        type=text
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: 'white', fontSize: '0.9rem' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.35rem' }}>Vendor</label>
                        <input
                          type=text
                          value={vendor}
                          onChange={(e) => setVendor(e.target.value)}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: 'white', fontSize: '0.9rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.35rem' }}>Prefix</label>
                        <input
                          type=text
                          value={prefix}
                          onChange={(e) => setPrefix(e.target.value)}
                          style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.5rem', padding: '0.5rem 0.75rem', color: 'white', fontSize: '0.9rem' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: '0.5rem' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#9ca3af', marginBottom: '0.5rem' }}>Generated SKUs Output:</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {['Small / Blue', 'Medium / Red', 'Large / Black'].map((opt, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '0.5rem', padding: '0.6rem 0.85rem' }}>
                            <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{opt}</span>
                            <span style={{ fontFamily: 'monospace', fontWeight: '700', color: '#38bdf8', fontSize: '0.9rem' }}>
                              {generatePreviewSku(i, opt.split('/')[0].trim())}
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

        <section id=experience style={{ padding: '5rem 0' }}>
          <div className=container-custom>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className=badge-glow>
                <Store size={16} color=#a5b4fc />
                <span>Our Core Advantage</span>
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem' }}>
                Engineered by Store Owners, for Store Owners
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className=glass-card style={{ padding: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Code2 size={24} color=#6366f1 />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>5+ Years Shopify Engineering</h3>
                <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Deep expertise in Shopify GraphQL APIs, Webhooks, Remix/React Router architectures, Redis queues, and database scaling.
                </p>
              </div>

              <div className=glass-card style={{ padding: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Store size={24} color=#a855f7 />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>Real Store Managed Experience</h3>
                <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  We operate our own stores! We understand inventory syncing, catalog organization, warehouse fulfillment, and daily merchant friction firsthand.
                </p>
              </div>

              <div className=glass-card style={{ padding: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(56,189,248,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <ShieldCheck size={24} color=#38bdf8 />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.75rem' }}>Enterprise Reliability & Safety</h3>
                <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Our apps feature fail-safe transaction rollbacks, background worker queue fallbacks, and multi-region cloud deployment for 99.9% uptime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id=services style={{ padding: '5rem 0', background: 'rgba(15, 23, 42, 0.4)' }}>
          <div className=container-custom>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className=badge-glow>
                <Cpu size={16} color=#a5b4fc />
                <span>Custom Solutions</span>
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem' }}>
                Need a Custom Solution for Your Store?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Custom Public & Private Apps', desc: 'Bespoke Shopify apps engineered specifically for your business workflow.' },
                { title: 'ERP & Warehouse API Sync', desc: 'Bi-directional real-time inventory and order sync with your 3PL or ERP.' },
                { title: 'Checkout & Cart Customization', desc: 'Custom discount rules, checkout validation, and custom UI extensions.' },
                { title: 'Bulk Automation Workflows', desc: 'Automate pricing updates, product tags, metafields, and inventory rules.' },
              ].map((srv, idx) => (
                <div key={idx} className=glass-card style={{ padding: '1.75rem' }}>
                  <div style={{ color: '#6366f1', fontWeight: '800', fontSize: '1.25rem', marginBottom: '0.5rem' }}>0{idx + 1}.</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>{srv.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5' }}>{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id=contact style={{ padding: '5rem 0' }}>
          <div className=container-custom style={{ maxWidth: '800px' }}>
            <div className=glass-card style={{ padding: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className=badge-glow>
                  <Mail size={16} color=#a5b4fc />
                  <span>Get In Touch</span>
                </span>
                <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '1rem' }}>
                  Let's Build Something Great Together
                </h2>
              </div>

              {submitted ? (
                <div style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color=#34d399 style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color=#34d399, marginBottom: '0.5rem' }}>Message Received!</h3>
                  <p style={{ color: '#d1d5db' }}>Thank you for reaching out to Catalyst Creations Apps. Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#d1d5db', marginBottom: '0.4rem' }}>Your Name *</label>
                      <input
                        type=text
                        required
                        placeholder=John Doe
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: 'white' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#d1d5db', marginBottom: '0.4rem' }}>Email Address *</label>
                      <input
                        type=email
                        required
                        placeholder=john@yourstore.com
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: 'white' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#d1d5db', marginBottom: '0.4rem' }}>Project Details / Questions</label>
                    <textarea
                      rows={4}
                      placeholder=Tell us about your store requirements...
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '0.75rem', padding: '0.75rem 1rem', color: 'white', resize: 'vertical' }}
                    />
                  </div>

                  <button type=submit className=btn-primary style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0', background: 'rgba(8,12,20,0.95)' }}>
        <div className=container-custom style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Rocket size={18} color=#6366f1 />
            <span style={{ fontWeight: '700', color: '#f3f4f6' }}>Catalyst Creations Apps</span>
          </div>

          <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Catalyst Creations Apps. Built by store owners with 5+ years of Shopify engineering experience.
          </p>
        </div>
      </footer>
    </div>
  );
}
;

fs.writeFileSync(path.join(__dirname, 'app', 'page.js'), pageContent);
console.log('app/page.js written successfully');
