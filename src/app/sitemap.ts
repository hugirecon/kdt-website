import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://knightdivisiontactical.com';

  const servicePages = [
    '/services/wildlife-mitigation',
    '/services/direct-action',
    '/services/counter-trafficking',
    '/services/reconnaissance',
    '/services/maritime-operations',
  ];

  const teamPages = [
    '/team/michael-schulz',
    '/team/matthew-mccalla',
    '/team/nicholas-norman',
    '/team/bogdan-modzolewski',
    '/team/santiago-telleria',
  ];

  const careerSlugs = [
    'knight',
    'medical-element',
    'communications-element',
    'intelligence-unit',
    'pilot',
    'drone-operator',
    'account-executive',
    'propagandist',
    'legal-unit',
    'construction-maintenance',
    'manufacturing-unit',
    'engineering-unit',
    'logistics',
    'ai-developer',
    'blockchain-developer',
    'programmer',
    'hacker',
  ];

  const trainingCourses = [
    'small-arms',
    'tactical-medicine',
    'executive-protection',
    'crisis-response',
  ];

  const blogPosts = [
    'kdt-need-for-psc',
    'technology-enabled-security',
    'path-to-knighthood',
  ];

  const allUrls: MetadataRoute.Sitemap = [
    // Homepage — priority 1.0
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // High-priority pages — 0.8
    ...['/about', '/services', '/careers', '/training', '/hire', '/contact', '/team'].map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Blog, store — 0.7
    ...['/blog', '/store'].map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),

    // Individual service pages — 0.6
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Team pages — 0.6
    ...teamPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Career pages — 0.6
    ...careerSlugs.map((slug) => ({
      url: `${baseUrl}/careers/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),

    // Training courses — 0.6
    ...trainingCourses.map((slug) => ({
      url: `${baseUrl}/training/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Blog posts — 0.5
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),

    // Contact sub-pages — 0.5
    ...['/contact/services', '/contact/careers', '/contact/partnerships'].map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),

    // Legal pages — 0.3
    ...['/terms', '/privacy'].map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];

  return allUrls;
}
