import "server-only";

import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";
import de from "./dictionaries/de.json";
import fr from "./dictionaries/fr.json";
import pt from "./dictionaries/pt.json";

import { Locale, defaultLocale, isValidLocale } from "./config";

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  de,
  fr,
  pt,
};

export function getDictionary(locale: string): Dictionary {
  if (!isValidLocale(locale)) {
    return dictionaries[defaultLocale];
  }

  return dictionaries[locale];
}