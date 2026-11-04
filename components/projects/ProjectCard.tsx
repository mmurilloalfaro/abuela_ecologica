
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDictionary } from "@/context/DictionaryProvider";

export interface ProjectCardProps {
  slug: string;
  status: "active" | "completed";
  year: string;
  image: string;
}

export default function ProjectCard({
  slug,
  status,
  year,
  image,
}: ProjectCardProps) {
  const { locale } = useParams<{ locale: string }>();
  const dict = useDictionary();

  const project = dict.projects.items[slug];

  return (
    <Link href={`/${locale}/projects/${slug}`} className="group">
      <article className="relative border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition">

        {/* STATUS BADGE */}
        <span
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-emerald-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {dict.projects.grid.status[status]}
        </span>

        {/* IMAGE */}
        <div className="relative h-48">
          <Image
            src={image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">
          <div className="text-sm text-green-600 font-medium">
            {project.location} · {year}
          </div>

          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600">
            {project.summary}
          </p>
        </div>

      </article>
    </Link>
  );
}
