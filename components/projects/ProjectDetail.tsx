"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectHero from "@/components/projects/ProjectHero";


type Project = (typeof projects)[number];


export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article key={project.slug} className="bg-white">

      {/* HERO */}
      <ProjectHero
        title={project.title}
        excerpt={project.excerpt}
        images={
          project.heroImages && project.heroImages.length > 0
            ? project.heroImages
            : [project.image]
        }
      />

      {/* STATS */}
      <section className="bg-green-50 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-6 py-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
          {project.stats?.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-semibold text-green-700">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            {Array.isArray(project.content) &&
              project.content.map((paragraph, i) => (
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

          {/* CTA 
          <div className="bg-green-900 text-white rounded-2xl p-10 space-y-6">
            <h2 className="text-2xl font-semibold">
              {project.cta?.title}
            </h2>
            <p className="text-white/90 max-w-2xl">
              {project.cta?.text}
            </p>

            <Link
              href="/donate"
              className="
                inline-flex items-center
                bg-green-700 text-green-900
                font-semibold
                px-6 py-3 rounded-xl
                hover:bg-green-100
                transition
              "
            >
              Apoyar este proyecto
            </Link>
          </div>*/}

        </div>
      </section>

    </article>
  );
}
