import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import AboutValues from "@/components/about/AboutValues";
import AboutPrinciples from "@/components/about/AboutPrinciples";

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
    path: "/about",
    title: dict.aboutHero.title,
    description: dict.aboutHero.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main className="pt-20">
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <AboutValues />
      <AboutPrinciples />

      <section className="relative px-6 py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-900 leading-relaxed">
            {dict.aboutClosing.quote}
          </h3>

          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />

          <p className="text-gray-600">
            {dict.aboutClosing.description}
          </p>
        </div>
      </section>
    </main>
  );
}