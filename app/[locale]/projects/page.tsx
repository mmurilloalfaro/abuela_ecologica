import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <section className="relative px-6 py-32 bg-green-950 text-white overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/leaf-texture.png')] opacity-10" />
        <div className="relative max-w-5xl mx-auto space-y-8">

          {/* Eyebrow */}
          <span className="inline-block text-sm tracking-wide uppercase text-emerald-300">
            Fundación Abuela Ecológica
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Nuestros proyectos
          </h1>

          {/* Divider */}
          <span className="block w-16 h-1 bg-emerald-500 rounded-full" />

          {/* Description */}
          <p className="text-lg text-white/90 max-w-3xl">
            Cada proyecto es una respuesta concreta a una necesidad real:
              bosques fragmentados, especies en riesgo y comunidades que quieren
              ser parte de la solución.
          </p>
        </div>
      </section>
        <main className="pt-32">
          <ProjectsGrid />
        </main>
    </>
  );
}
