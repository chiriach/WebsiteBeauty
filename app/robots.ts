import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://alexandramarcut.ro/sitemap.xml',
    host: 'https://alexandramarcut.ro',
  };
}
