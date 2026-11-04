import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales } from "@/lib/i18n/config";

const BASE_URL = "https://abuelaecologica.org";

const localeCodes: Record<string, string> = {
  es: "es-CR",
  en: "en",
  de: "de",
  fr: "fr",
  pt: "pt",
  zh: "zh",
};

const staticPages = [
  "",
  "/about",
  "/projects",
  "/nursery",
  "/donate",
  "/transparency",
];

function getAlternates(path: string) {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[localeCodes[locale]] = `${BASE_URL}/${locale}${path}`;
  }

  languages["x-default"] = `${BASE_URL}/es${path}`;

  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  for (const path of staticPages) {
    for (const locale of locales) {
      pages.push({
        url: `${BASE_URL}/${locale}${path}`,
        alternates: getAlternates(path),
      });
    }
  }

  for (const project of projects) {
    const path = `/projects/${project.slug}`;

    for (const locale of locales) {
      pages.push({
        url: `${BASE_URL}/${locale}${path}`,
        alternates: getAlternates(path),
      });
    }
  }

  return pages;
}