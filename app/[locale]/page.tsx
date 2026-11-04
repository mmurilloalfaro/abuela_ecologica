import HomeHero from "@/components/home/HomeHero";
import HomeStory from "@/components/home/HomeStory";
import HomeImpact from "@/components/home/HomeImpact";
import HowToHelp from "@/components/home/HowToHelp";
import HomeCTA from "@/components/home/HomeCTA";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";


export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; 

  const dict = await getDictionary(locale);

  return (
    <main className="pt-20">
      <HomeHero />
      <HomeStory />
      <HomeImpact />
      <HowToHelp dictionary={dict.howToHelp} />
      <HomeCTA dictionary={dict.cta} />
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
    path: "",
    title: dict.home.heroTitle,
    description: dict.home.heroSubtitle,
  });
}