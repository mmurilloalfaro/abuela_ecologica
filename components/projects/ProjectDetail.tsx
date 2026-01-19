import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  content: string;
  image: string;
  location: string;
  year: string;
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="relative h-72 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <header className="space-y-2">
          <div className="text-green-600 font-medium">
            {project.location} · {project.year}
          </div>
          <h1 className="text-4xl font-semibold">
            {project.title}
          </h1>
        </header>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {project.content}
        </p>

        <Link
          href="/donar"
          className="inline-block mt-8 px-6 py-3 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition"
        >
          Support this project
        </Link>

      </div>
    </section>
  );
}
