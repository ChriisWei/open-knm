import { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';
import { locales } from '@/lib/i18n';

const BASE_URL = 'https://open-knm.vercel.app'; // Replace with your actual domain later

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static routes for each locale
  const staticRoutes = ['', '/knm', '/society', '/resources', '/life', '/about'];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  // 2. Article routes for each locale
  for (const article of articles) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/articles/${article.slug}`,
        lastModified: new Date(), // Ideally this comes from article data
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return sitemapEntries;
}

