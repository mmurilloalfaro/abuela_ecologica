import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";

const BASE_URL = "https://abuelaecologica.org";

const localeCodes: Record<Locale, string> = {
  es: "es-CR",
  en: "en",
  de: "de",
  fr: "fr",
  pt: "pt",
};

export function getLocalizedAlternates(path: string) {
  const cleanPath = path
  ? path.startsWith("/")
    ? path
    : `/${path}`
  : "";

  const languages: Record<string, string> = {
    "es-CR": `${BASE_URL}/es${cleanPath}`,
    en: `${BASE_URL}/en${cleanPath}`,
    de: `${BASE_URL}/de${cleanPath}`,
    fr: `${BASE_URL}/fr${cleanPath}`,
    pt: `${BASE_URL}/pt${cleanPath}`,
    "x-default": `${BASE_URL}/es${cleanPath}`,
  };

  return {
    canonical: `${BASE_URL}/es${cleanPath}`,
    languages,
  };
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${BASE_URL}/${locale}${cleanPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates(cleanPath).languages,
    },
    openGraph: {
      type: "website",
      siteName: "Fundación Abuela Ecológica",
      title,
      description,
      url: canonical,
      locale: localeCodes[locale],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}