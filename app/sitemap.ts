import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/news`, lastModified: new Date() },
    { url: `${baseUrl}/fixtures`, lastModified: new Date() },
    { url: `${baseUrl}/live`, lastModified: new Date() },
    { url: `${baseUrl}/tables`, lastModified: new Date() },
    { url: `${baseUrl}/teams`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() }
  ];
}
