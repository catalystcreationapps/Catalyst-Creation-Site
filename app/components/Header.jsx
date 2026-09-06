'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X, BookOpen, HelpCircle, FileText, History } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
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
          <div style={{ position: 'relative', height: '60px', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/logo-with-text-1.png"
              alt="Catalyst Creations Apps"
              style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
          <Link href="/" style={{ color: '#132937', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s' }}>
            Home
          </Link>
          <Link href="/sku-app-doc" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <FileText size={15} color="#3A925F" /> App Docs
          </Link>
          <Link href="/tutorial" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={15} color="#3A925F" /> Tutorial
          </Link>
          <Link href="/faq" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <HelpCircle size={15} color="#3A925F" /> FAQ
          </Link>
          <Link href="/changelog" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <History size={15} color="#3A925F" /> Changelog
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://apps.shopify.com/sku-bulk-generator"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
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
          <Link href="/sku-app-doc" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '600' }}>
            SKU App Documentation
          </Link>
          <Link href="/tutorial" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>
            Tutorial & Video Guides
          </Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>
            Frequently Asked Questions
          </Link>
          <Link href="/changelog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>
            Changelog & Roadmap
          </Link>
          <Link href="/privacy-policy" onClick={() => setMobileMenuOpen(false)} style={{ color: '#132937', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>
            Privacy Policy
          </Link>
        </div>
      )}
    </header>
  );
}
