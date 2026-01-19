import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Nuestros proyectos
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Impulsamos iniciativas ambientales y sociales que nacen en el territorio,
            se construyen con las comunidades y buscan un impacto real y duradero.
          </p>
        </header>

        <div className="h-px w-full bg-gray-200" />
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
