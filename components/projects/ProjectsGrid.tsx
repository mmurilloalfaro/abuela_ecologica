"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { fadeUp } from "@/components/animations/fadeUp";

export default function ProjectsGrid() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-500 uppercase tracking-widest">
              Proyectos
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp(index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
