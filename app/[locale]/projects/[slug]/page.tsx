import { projects } from "@/data/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  console.log("PARAM SLUG:", slug);
  console.log("PROJECT SLUGS:", projects.map((p) => p.slug));

  const normalizedSlug = decodeURIComponent(slug).trim();

  const project = projects.find(
    (p) => p.slug === normalizedSlug
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
