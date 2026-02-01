import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://knightdivisiontactical.com';
  
  const staticPages = [
    '',
    '/home',
    '/about',
    '/services',
    '/careers',
    '/training',
    '/hire',
    '/contact',
    '/team',
    '/blog',
    '/terms',
    '/privacy',
  ];
  
  const teamPages = [
    '/team/michael-schulz',
    '/team/matthew-mccalla',
    '/team/nicholas-norman',
    '/team/bogdan-modzolewski',
    '/team/devin-medrano',
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
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    })),
    
    // Team pages
    ...teamPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    
    // Career pages
    ...careerSlugs.map((slug) => ({
      url: `${baseUrl}/careers/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    
    // Training courses
    ...trainingCourses.map((slug) => ({
      url: `${baseUrl}/training/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    
    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
  
  return allUrls;
}
