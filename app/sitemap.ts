import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codeamateur.com/",
      lastModified: new Date(),
    },
    {
      url: "https://codeamateur.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://codeamateur.com/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://codeamateur.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://codeamateur.com/careers",
      lastModified: new Date(),
    },
    {
      url: "https://codeamateur.com/contact",
      lastModified: new Date(),
    },
  ];
}
