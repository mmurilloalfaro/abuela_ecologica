"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export interface ProjectCardProps {
  slug: string;
  title: string;
  status: "active" | "completed";
  description: string;
  location: string;
  year: string;
  image: string;
}

export default function ProjectCard({
  slug,
  title,
  status,
  description,
  location,
  year,
  image,
}: ProjectCardProps) {
  const { locale } = useParams();

  return (
    <Link href={`/${locale}/projects/${slug}`} className="group">
      <article className="relative border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
        
        {/* STATUS BADGE */}
        <span
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium
            ${
              status === "active"
                ? "bg-emerald-600 text-white"
                : "bg-red-600 text-white"
            }
          `}
        >
          {status === "active" ? "En progreso" : "Finalizado"}
        </span>

        {/* IMAGE */}
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">
          <div className="text-sm text-green-600 font-medium">
            {location} · {year}
          </div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
