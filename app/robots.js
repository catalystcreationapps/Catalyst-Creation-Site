export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://catalyst-creation-site.vercel.app/sitemap.xml',
  };
}
