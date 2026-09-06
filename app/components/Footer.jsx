'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e2e8f0',
      padding: '4rem 0 2.5rem 0',
      background: '#ffffff',
      marginTop: 'auto'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src="/images/logo-with-text-1.png"
                alt="Catalyst Creations Apps"
                style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '320px' }}>
              High-performance Shopify app solutions and custom e-commerce engineering. Built by store owners with 5+ years of active Shopify development experience.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', fontSize: '0.825rem', fontWeight: '600' }}>
              <ShieldCheck size={16} />
              <span>Verified Shopify App Partner</span>
            </div>
          </div>

          {/* Quick Links: Apps & Docs */}
          <div>
            <h4 style={{ color: '#132937', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Apps & Documentation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a
                  href="https://apps.shopify.com/sku-bulk-generator"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', transition: 'color 0.2s', fontWeight: '500' }}
                >
                  SKU Bulk Generator <ArrowUpRight size={14} color="#3A925F" />
                </a>
              </li>
              <li>
                <Link href="/sku-app-doc" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  SKU App Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorial" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Step-by-Step Tutorials
                </Link>
              </li>
              <li>
                <Link href="/faq" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Merchant FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 style={{ color: '#132937', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Company & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/changelog" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Changelog & Updates
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#contact" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support info */}
          <div>
            <h4 style={{ color: '#132937', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Merchant Support
            </h4>
            <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Have custom Shopify app requirements or need assistance with SKU catalog migration?
            </p>
            <a
              href="mailto:catalystcreationapps@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#3A925F',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              <Mail size={24} color="#3A925F" style={{ flexShrink: 0 }} />
              <span>catalystcreationapps@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/images/small-logo.png" alt="Logo Mark" style={{ height: '22px', width: 'auto' }} />
            <span style={{ fontWeight: '700', color: '#132937', fontSize: '0.875rem' }}>Catalyst Creations Apps</span>
          </div>

          <p style={{ color: '#64748b', fontSize: '0.825rem' }}>
            © 2026 Catalyst Creations Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
