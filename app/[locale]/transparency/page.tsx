import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import TransparencyHero from "@/components/transparency/TransparencyHero";
import Board from "@/components/transparency/Board";
import Founders from "@/components/transparency/Founders";
import Reports from "@/components/transparency/Reports";

export default function TransparencyPage() {
  return (
    <main className="pt-32">
      <TransparencyHero />
      <Board />
      <Founders />
      <Reports />
    </main>
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isValidLocale(requestedLocale)
    ? requestedLocale
    : defaultLocale;

  const dict = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/transparency",
    title: dict.transparency.hero.title,
    description: dict.transparency.hero.description,
  });
}
