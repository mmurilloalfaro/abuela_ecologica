import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import DonateHero from "@/components/donate/DonateHero";
import WhyDonate from "@/components/donate/WhyDonate";
import DonationImpact from "@/components/donate/DonationImpact";
import DonationMethods from "@/components/donate/DonationMethods";
import DonateCTA from "@/components/donate/DonateCTA";

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <WhyDonate />
      <DonationImpact />
      <DonationMethods />
      <DonateCTA />
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
    path: "/donate",
    title: dict.donate.hero.title,
    description: dict.donate.hero.description,
  });
}
