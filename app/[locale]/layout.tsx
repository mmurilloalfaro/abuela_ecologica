import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { DictionaryProvider } from "@/context/DictionaryProvider";
import { Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "pt" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const dict = getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dict}>
      <Navbar
        locale={locale}
        dictionary={dict.nav}
      />

      {children}

      <Footer
        locale={locale}
        dictionary={dict.footer}
      />
    </DictionaryProvider>
  );
}