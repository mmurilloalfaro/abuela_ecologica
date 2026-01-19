import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  location,
  year,
  image,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group">
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition">

        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-sm text-green-600 font-medium">
            {location} · {year}
          </div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}
