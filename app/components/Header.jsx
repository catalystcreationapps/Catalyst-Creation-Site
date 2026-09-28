'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, Layers, Sparkles, BookOpen, Users, Mail, HelpCircle, FileText } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.94)',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)'
    }}>
      <div className="container-custom" style={{
        height: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', height: '56px', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo-with-text-1.png"
              alt="Catalyst Creation – Shopify Apps & Solutions"
              style={{ maxHeight: '56px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden-mobile">
          <Link href="/" style={{ color: '#132937', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            Home
          </Link>
          <Link href="/shopify-sku-generator" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            SKU Generator
          </Link>
          <Link href="/shopify-services" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            Shopify Services
          </Link>
          <Link href="/blog" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            Blog
          </Link>
          <Link href="/about" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            About
          </Link>
          <Link href="/contact" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://apps.shopify.com/sku-bulk-generator"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem' }}
          >
            <span>Install App</span>
            <ArrowRight size={15} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: '1px solid #cbd5e1',
              borderRadius: '0.5rem',
              color: '#132937',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'none'
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)'
        }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            Home
          </Link>
          <Link href="/shopify-sku-generator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            Shopify SKU Generator
          </Link>
          <Link href="/shopify-services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            Shopify Services
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            Blog & Guides
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            About Catalyst Creation
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            Contact Us
          </Link>
          <hr style={{ borderColor: '#e2e8f0', margin: '0.25rem 0' }} />
          <Link href="/sku-app-doc" onClick={() => setMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            SKU App Documentation
          </Link>
          <Link href="/tutorial" onClick={() => setMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            Tutorials
          </Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            FAQ
          </Link>
          <Link href="/privacy-policy" onClick={() => setMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" onClick={() => setMobileMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            Terms of Service
          </Link>
        </div>
      )}
    </header>
  );
}

