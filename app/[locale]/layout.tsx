
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { DictionaryProvider } from "@/data/context/DictionaryProvider";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "pt" },
    { locale: "zh" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;

  if (!isValidLocale(requestedLocale)) {
    notFound();
  }

  const locale = requestedLocale;
  const dict = getDictionary(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://abuelaecologica.org/#organization",
    name: "Fundación Abuela Ecológica",
    alternateName: "Abuela Ecológica",
    url: "https://abuelaecologica.org",
    foundingDate: "2018",
    description:
      "Organización costarricense dedicada a la educación ambiental, restauración ecológica, conservación de la biodiversidad y fortalecimiento comunitario.",
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    knowsAbout: [
      "Educación ambiental",
      "Restauración ecológica",
      "Reforestación con especies nativas",
      "Conservación de la biodiversidad",
      "Protección de fuentes de agua",
      "Desarrollo comunitario",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://abuelaecologica.org/#website",
    name: "Fundación Abuela Ecológica",
    url: "https://abuelaecologica.org",
    publisher: {
      "@id": "https://abuelaecologica.org/#organization",
    },
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <DictionaryProvider dictionary={dict}>
        <Navbar locale={locale} dictionary={dict.nav} />
        {children}
        <Footer locale={locale} dictionary={dict.footer} />
      </DictionaryProvider>
    </>
  );
}
