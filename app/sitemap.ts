import { MetadataRoute } from 'next';
import { posts } from './blog/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://proto-visual.com";
  
  const blogPosts = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    ...blogPosts,
  ];
}