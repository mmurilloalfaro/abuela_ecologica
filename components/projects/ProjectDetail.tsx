"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { useDictionary } from "@/context/DictionaryProvider";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";

type Project = (typeof projects)[number];
type Dictionary = ReturnType<typeof getDictionary>;
type ProjectContent =
  Dictionary["projects"]["items"][keyof Dictionary["projects"]["items"]];

export default function ProjectDetail({ project }: { project: Project }) {
  const dict = useDictionary();

  const projectContent: ProjectContent =
    dict.projects.items[project.slug as keyof Dictionary["projects"]["items"]];

  return (
    <article key={project.slug} className="bg-white">

      {/* HERO */}
      <ProjectHero
        title={projectContent.title}
        excerpt={projectContent.summary}
        images={
          project.heroImages && project.heroImages.length > 0
            ? project.heroImages
            : [project.image]
        }
      />

      {/* STATS */}
      <section className="bg-green-50 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
          {projectContent.stats.map(
            (stat: { value: string; label: string }, i: number) => (
              <div key={i}>
                <p className="text-3xl font-semibold text-green-700">
                  {stat.value}
                </p>

                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* DESCRIPTION */}
          <p className="text-xl text-gray-600 leading-relaxed">
            {projectContent.description}
          </p>

          {/* CONTENT */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            {Array.isArray(projectContent.content) &&
              projectContent.content.map((paragraph: string, i: number) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.06,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
          </div>

          {/* CTA */}
          {projectContent.cta && (
            <div className="bg-green-900 text-white rounded-2xl p-10 space-y-6">
              <h2 className="text-2xl font-semibold">
                {projectContent.cta.title}
              </h2>

              <p className="text-white/90 max-w-2xl">
                {projectContent.cta.text}
              </p>

              <Link
                href={`/${dict.locale}/donate`}
                className="inline-flex items-center bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition"
              >
                {projectContent.cta.button}
              </Link>
            </div>
          )}

        </div>
      </section>

    </article>
  );
}