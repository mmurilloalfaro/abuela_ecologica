import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";

import ProjectsGrid from "@/components/projects/ProjectsGrid";

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
    path: "/projects",
    title: dict.projects.hero.title,
    description: dict.projects.hero.description,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative px-6 py-32 bg-green-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />

        <div className="relative max-w-5xl mx-auto space-y-8">
          <span className="inline-block text-sm tracking-wide uppercase text-emerald-300">
            {dict.projects.hero.eyebrow}
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {dict.projects.hero.title}
          </h1>

          <span className="block w-16 h-1 bg-emerald-500 rounded-full" />

          <p className="text-lg text-white/90 max-w-3xl">
            {dict.projects.hero.description}
          </p>
        </div>
      </section>

      <main className="pt-32">
        <ProjectsGrid />
      </main>
    </>
  );
}