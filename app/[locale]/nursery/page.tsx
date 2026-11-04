import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import NurseryHero from "@/components/nursery/NurseryHero";
import NurseryIntro from "@/components/nursery/NurseryIntro";
import NurseryStats from "@/components/nursery/NurseryStats";
import NurseryGallery from "@/components/nursery/NurseryGallery";
import NurseryServices from "@/components/nursery/NurseryServices";
import NurserySchedule from "@/components/nursery/NurserySchedule";

export default function NurseryPage() {
  return (
    <main className="pt-20">

      <NurseryHero />
      <NurseryIntro />
      <NurseryStats />
      <NurseryGallery />
      <NurseryServices />
      <NurserySchedule />
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
    path: "/nursery",
    title: `${dict.nursery.hero.title} ${dict.nursery.hero.highlight}`,
    description: dict.nursery.hero.description,
  });
}
