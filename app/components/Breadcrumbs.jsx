import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://catalyst-creation-site.vercel.app',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `https://catalyst-creation-site.vercel.app${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: '1.75rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '0.875rem',
        color: '#64748b'
      }}>
        <li>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#64748b',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ChevronRight size={14} color="#94a3b8" />
              {isLast || !item.href ? (
                <span style={{ color: '#132937', fontWeight: '600' }} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: '#64748b',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
