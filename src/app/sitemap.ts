import { MetadataRoute } from "next";
import { projects } from "@/lib";

type SitemapType = MetadataRoute.Sitemap;

export default function sitemap(): SitemapType {
   const baseUrl = "https://angkushsahu.vercel.app";

   const projectSitemap: SitemapType = projects.map((project) => ({
      url: `${baseUrl}${project.url}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
   }));

   const rootPageSitemap: SitemapType = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: "daily",
         priority: 1,
      },
      {
         url: `${baseUrl}/projects`,
         lastModified: new Date(),
         changeFrequency: "daily",
         priority: 1,
      },
      {
         url: `${baseUrl}/about`,
         lastModified: new Date(),
         changeFrequency: "daily",
         priority: 0.5,
      },
      {
         url: `${baseUrl}/contact`,
         lastModified: new Date(),
         changeFrequency: "daily",
         priority: 0.5,
      },
   ];

   return [...rootPageSitemap, ...projectSitemap];
}
