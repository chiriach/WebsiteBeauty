import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alexandramarcut.ro';
  const routes = [
    '/',
    '/despre-mine',
    '/cursuri/plasma-pen',
    '/servicii/consult_scalp',
    '/servicii/hyaluronpen',
    '/servicii/indepartare_chimica',
    '/servicii/Lipoliza_non_injectabila',
    '/servicii/Mezoterapie_virtuala',
    '/servicii/Microneedling',
    '/servicii/Micropigmentare',
    '/servicii/Micropigmentare/Buze',
    '/servicii/Micropigmentare/Eyeliner',
    '/servicii/Micropigmentare/sprancene',
    '/servicii/plasma-pen',
    '/servicii/Tratamente_faciale',
    '/servicii/tratamente_scalp',
    '/servicii/tricopigmentare',
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: index === 0 ? 1 : 0.8,
  }));
}
