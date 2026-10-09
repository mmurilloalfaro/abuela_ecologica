//Idiomas soportados
export const locales = ["en", "es", "de", "fr", "pt"] as const;

export type Locale = (typeof locales)[number];

//Idioma por defecto
export const defaultLocale: Locale = "es";


//Verifica si un string es un locale válido
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}