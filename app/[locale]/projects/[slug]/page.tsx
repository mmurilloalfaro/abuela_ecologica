import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { isValidLocale, defaultLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;

  const locale = isValidLocale(requestedLocale)
    ? requestedLocale
    : defaultLocale;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const dict = getDictionary(locale);
  const content =
  dict.projects.items[
    project.slug as keyof typeof dict.projects.items
  ];

  return buildPageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: content.title,
    description: content.summary || content.description,
  });
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug).trim();
  const project = projects.find(
    (item) => item.slug === normalizedSlug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}