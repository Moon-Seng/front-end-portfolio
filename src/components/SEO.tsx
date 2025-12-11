import { useEffect } from "react";
import {
  personalInfo,
  seo as seoConfig,
  socialLinks,
} from "../portfolio-config";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = seoConfig.title,
  description = seoConfig.description,
  image = "/og-image.jpg",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta("description", description);
    updateMeta("keywords", seoConfig.keywords);

    // Open Graph tags
    updateProperty("og:title", title);
    updateProperty("og:description", description);
    updateProperty("og:image", image);
    updateProperty("og:url", url);
    updateProperty("og:type", type);

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      url: url,
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.email],
    };

    let script = document.querySelector(
      "#structured-data"
    ) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [title, description, image, url, type]);

  return null;
}
