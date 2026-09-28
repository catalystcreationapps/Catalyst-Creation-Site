import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://catalyst-creation-site.vercel.app'),
  title: {
    default: 'Catalyst Creation – Shopify Apps & Store Solutions',
    template: '%s | Catalyst Creation',
  },
  description: 'Shopify apps and solutions designed to simplify store management, automation, and everyday ecommerce tasks for growing Shopify stores.',
  keywords: [
    'Shopify SKU generator',
    'Shopify apps',
    'bulk SKU generator',
    'automatic SKU generator',
    'Shopify store management',
    'Shopify development',
    'Shopify variant SKU generator',
    'duplicate SKU Shopify'
  ],
  authors: [{ name: 'Catalyst Creation' }],
  creator: 'Catalyst Creation',
  publisher: 'Catalyst Creation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Catalyst Creation – Shopify Apps & Store Solutions',
    description: 'Shopify apps and solutions designed to simplify store management, automation, and everyday ecommerce tasks for growing Shopify stores.',
    url: 'https://catalyst-creation-site.vercel.app',
    siteName: 'Catalyst Creation',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-with-text.png',
        width: 1200,
        height: 630,
        alt: 'Catalyst Creation – Shopify Apps and Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalyst Creation – Shopify Apps & Store Solutions',
    description: 'Shopify apps and solutions designed to simplify store management, automation, and everyday ecommerce tasks for growing Shopify stores.',
    images: ['/images/logo-with-text.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Catalyst Creation',
    url: 'https://catalyst-creation-site.vercel.app',
    logo: 'https://catalyst-creation-site.vercel.app/images/logo-with-text.png',
    description: 'Shopify app developer and e-commerce solutions provider specializing in inventory catalog automation, SKU generation, and custom store development.',
    sameAs: [
      'https://apps.shopify.com/sku-bulk-generator'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'catalystcreationapps@gmail.com',
      contactType: 'customer support'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Catalyst Creation',
    url: 'https://catalyst-creation-site.vercel.app',
    description: 'Shopify apps and store solutions for high-growth ecommerce businesses.'
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <meta name="google-site-verification" content="pvHAv4Y6X8feSizATWU9NFTVr3zjAUhqA41jnYto-Ms" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

