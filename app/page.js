import Link from 'next/link';
import {
  Rocket,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  BookOpen,
  HelpCircle,
  History,
  Layers,
  Wrench,
  ShieldCheck,
  Code2,
  Mail,
  Cpu,
  Star,
  ExternalLink,
  ArrowUpRight,
  Database,
  BarChart3
} from 'lucide-react';
import InteractiveSkuDemo from './components/InteractiveSkuDemo';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: 'Catalyst Creation – Shopify Apps & Store Solutions',
  description: 'Shopify apps and solutions designed to simplify store management, automation, and everyday ecommerce tasks for growing Shopify stores.',
  alternates: {
    canonical: 'https://catalyst-creation-site.vercel.app',
  },
  openGraph: {
    title: 'Catalyst Creation – Shopify Apps & Store Solutions',
    description: 'Shopify apps and solutions designed to simplify store management, automation, and everyday ecommerce tasks for growing Shopify stores.',
    url: 'https://catalyst-creation-site.vercel.app',
    siteName: 'Catalyst Creation',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <span className="badge-glow">
              <Sparkles size={16} color="#3A925F" />
              <span>Shopify Apps & Store Management Solutions</span>
            </span>
          </div>

          <h1 style={{
            fontSize: '3.25rem',
            fontWeight: '800',
            lineHeight: '1.15',
            letterSpacing: '-0.035em',
            marginBottom: '1.5rem',
            maxWidth: '920px',
            margin: '0 auto 1.5rem auto',
            color: '#132937'
          }}>
            Simple Shopify Tools for Store Management & Automation
          </h1>

          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#475569',
            maxWidth: '760px',
            margin: '0 auto 2.5rem auto'
          }}>
            Catalyst Creation builds reliable Shopify apps and provides tailored store management services. We help high-growth ecommerce merchants streamline catalog workflows, eliminate repetitive data entry, and scale with confidence.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/shopify-sku-generator" className="btn-primary">
              <span>Explore Shopify SKU Generator</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/shopify-services" className="btn-secondary">
              <span>Shopify Store Services</span>
              <Code2 size={18} color="#3A925F" />
            </Link>
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
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Shopify Engineering Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#3A925F' }}>10M+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Catalog SKUs Automated</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#132937' }}>Hands-On</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Store Management Practice</div>
            </div>
            <div>
              <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#3A925F' }}>99.9%</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem' }}>Cloud Webhook Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent SKU Generator Section */}
      <section id="sku-generator" style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-glow">
              <Zap size={16} color="#3A925F" />
              <span>Flagship Application</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', color: '#132937', letterSpacing: '-0.02em' }}>
              Automate Catalog SKUs with Our Shopify SKU Generator
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '680px', margin: '0.75rem auto 0 auto' }}>
              Generate, format, and organize SKUs across thousands of Shopify products and variants in seconds.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '3rem', background: '#f8fafc', borderColor: '#e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(58, 146, 95, 0.1)', padding: '0.4rem 1rem', borderRadius: '999px', color: '#3A925F', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                  <Star size={14} fill="#3A925F" />
                  <span>SKU Bulk Generator for Shopify</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#132937', lineHeight: '1.25' }}>
                  Smart SKU Automation for Products and Variants
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Managing store inventory without a clear SKU pattern leads to fulfillment errors and duplicate SKU chaos. Our dedicated <Link href="/shopify-sku-generator" style={{ color: '#3A925F', fontWeight: '600', textDecoration: 'underline' }}>Shopify SKU Generator</Link> app empowers merchants to create uniform SKU structures using automated rule templates, custom prefixes, vendor codes, and variant option values.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Generate SKUs in bulk across existing product catalogs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Automatic SKU generation via webhooks for newly created products</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Variant-level formatting for size, color, material, and auto-increment</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155', fontSize: '0.95rem', fontWeight: '500' }}>
                    <CheckCircle2 size={18} color="#3A925F" />
                    <span>Built-in duplicate SKU detection and safety snapshot rollback</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://apps.shopify.com/sku-bulk-generator" target="_blank" rel="noreferrer" className="btn-primary">
                    <span>Try SKU Bulk Generator</span>
                    <ExternalLink size={18} />
                  </a>
                  <Link href="/shopify-sku-generator" className="btn-secondary">
                    <span>Explore Features & Guide</span>
                    <ArrowRight size={18} color="#3A925F" />
                  </Link>
                </div>
              </div>

              {/* Interactive Demo Box */}
              <InteractiveSkuDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Services Section */}
      <section id="services" style={{ padding: '5.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-glow">
              <Layers size={16} color="#3A925F" />
              <span>Professional Services</span>
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', color: '#132937', letterSpacing: '-0.02em' }}>
              Shopify Store Management & Custom Development
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '640px', margin: '0.75rem auto 0 auto' }}>
              Beyond our public apps, Catalyst Creation provides hands-on technical solutions for merchants needing specialized store enhancements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Database size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Store Management & Catalog Ops</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                Complete catalog audits, bulk product reclassification, inventory migration, and SKU structuring for large enterprise inventories.
              </p>
              <Link href="/shopify-services" style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Learn About Store Management <ArrowRight size={16} />
              </Link>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Custom Private Shopify Apps</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                Dedicated private apps connecting Shopify Admin with custom ERPs, warehouse management systems (WMS), suppliers, and internal automation.
              </p>
              <Link href="/shopify-services" style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Explore Custom Apps <ArrowRight size={16} />
              </Link>
            </div>

            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.75rem', background: 'rgba(58, 146, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Wrench size={24} color="#3A925F" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#132937', marginBottom: '0.75rem' }}>Theme Customization & Functions</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                Shopify Functions for custom checkout discounts, theme section extensions, performance speed optimization, and custom merchant workflows.
              </p>
              <Link href="/shopify-services" style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                View Development Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Blog & Resources Section */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-glow" style={{ marginBottom: '0.75rem' }}>
                <BookOpen size={16} color="#3A925F" />
                <span>Ecommerce Knowledge Base</span>
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                Shopify SKU & Catalog Strategy Guides
              </h2>
            </div>
            <Link href="/blog" className="btn-secondary" style={{ padding: '0.5rem 1.15rem', fontSize: '0.875rem' }}>
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <Link href="/blog/how-to-generate-skus-in-shopify" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#3A925F', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Comprehensive Guide</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginTop: '0.5rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  How to Generate SKUs in Shopify: Complete Guide
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  Learn how to create SKUs in Shopify, choose a SKU format, manage product variants, and avoid duplicate codes.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link href="/blog/shopify-sku-naming-convention" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#3A925F', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best Practices</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginTop: '0.5rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  Shopify SKU Naming Convention: Examples & Rules
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  A complete framework for building consistent SKU naming systems across brands, categories, colors, and sizes.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            <Link href="/blog/duplicate-skus-shopify" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: '#3A925F', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Inventory Audit</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#132937', marginTop: '0.5rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                  Duplicate SKUs in Shopify: How to Find and Fix Them
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.5', flex: 1 }}>
                  Understand why SKU collisions happen, the problems they create in inventory sync, and how to fix them permanently.
                </p>
                <span style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.85rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation / App Documentation Cards */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#132937', letterSpacing: '-0.02em' }}>
              App Resources & Merchant Documentation
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
              Everything you need to master our Shopify tools and optimize store operations.
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>Technical Specifications</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  In-depth documentation for SKU pattern tokens, Shopify GraphQL API rate safety, and webhook subscriptions.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Read Documentation <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            <Link href="/tutorial" style={{ textDecoration: 'none' }}>
              <div className="glass-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(58, 146, 95, 0.1)', width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={22} color="#3A925F" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#132937' }}>Setup Tutorials</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                  Step-by-step onboarding walkthroughs, rule template creation, and batch generation instructions.
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
                  Clear answers regarding Shopify scopes, billing, duplicate avoidance, and privacy protection.
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
                  Release notes, API compatibility upgrades, and feature improvements for our Shopify apps.
                </p>
                <div style={{ color: '#3A925F', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  See Release Notes <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 0 6rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge-glow" style={{ marginBottom: '1rem' }}>
                <Mail size={16} color="#3A925F" />
                <span>Get In Touch</span>
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginTop: '0.75rem', color: '#132937', letterSpacing: '-0.02em' }}>
                Connect With Our Shopify Team
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                Have questions about SKU Bulk Generator or want to discuss custom store development? Send us a message below.
              </p>
            </div>

            <ContactForm defaultService="Shopify Store Management" />
          </div>
        </div>
      </section>
    </div>
  );
}
