'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e2e8f0',
      padding: '4.5rem 0 2.5rem 0',
      background: '#ffffff',
      marginTop: 'auto'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/" style={{ display: 'inline-block' }}>
              <img
                src="/images/logo-with-text-1.png"
                alt="Catalyst Creation – Shopify Apps & Solutions"
                style={{ maxHeight: '54px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '300px' }}>
              Shopify apps and store solutions designed to simplify store management, catalog automation, and everyday ecommerce operations.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3A925F', fontSize: '0.825rem', fontWeight: '600' }}>
              <ShieldCheck size={16} />
              <span>Shopify App Developer</span>
            </div>
          </div>

          {/* Shopify Apps & Tools */}
          <div>
            <h4 style={{ color: '#132937', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Shopify Apps & Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/shopify-sku-generator" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Shopify SKU Generator
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.shopify.com/sku-bulk-generator"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#3A925F', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', transition: 'color 0.2s', fontWeight: '600' }}
                >
                  SKU Bulk Generator on Shopify <ArrowUpRight size={14} color="#3A925F" />
                </a>
              </li>
              <li>
                <Link href="/shopify-services" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Shopify Store Services
                </Link>
              </li>
              <li>
                <Link href="/sku-app-doc" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  App Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorial" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Setup Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Guides */}
          <div>
            <h4 style={{ color: '#132937', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              Resources & Blog
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/blog" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  All Guides & Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-generate-skus-in-shopify" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  How to Generate SKUs
                </Link>
              </li>
              <li>
                <Link href="/blog/shopify-sku-naming-convention" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  SKU Naming Convention
                </Link>
              </li>
              <li>
                <Link href="/blog/duplicate-skus-shopify" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Fix Duplicate SKUs
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
                <Link href="/about" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  About Catalyst Creation
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Contact Support
                </Link>
              </li>
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
                <Link href="/terms-of-service" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s', fontWeight: '500' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/images/small-logo.png" alt="Catalyst Creation" style={{ height: '22px', width: 'auto' }} />
            <span style={{ fontWeight: '700', color: '#132937', fontSize: '0.875rem' }}>Catalyst Creation</span>
          </div>

          <p style={{ color: '#64748b', fontSize: '0.825rem' }}>
            © {new Date().getFullYear()} Catalyst Creation. All rights reserved. Shopify is a trademark of Shopify Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}

