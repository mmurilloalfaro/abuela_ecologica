'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const locale = params?.locale || 'es';

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <Image
            src="/logo_verde.png"
            alt="Fundación Abuela Ecológica"
            width={56}
            height={56}
            priority
          />
          <span className="text-white font-semibold text-sm md:text-base group-hover:text-green-400 transition">
            Fundación Abuela Ecológica
          </span>
        </Link>

        {/* Links + idioma */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <li><Link href={`/${locale}/about`} className="hover:text-white">Quiénes somos</Link></li>
            <li><Link href={`/${locale}/projects`} className="hover:text-white">Proyectos</Link></li>
            <li><Link href={`/${locale}/transparency`} className="hover:text-white">Transparencia</Link></li>
            <li>
              <Link
                href={`/${locale}/donate`}
                className="px-4 py-2 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition"
              >
                Donar
              </Link>
            </li>
          </ul>

          {/* Selector de idioma */}
          <div className="flex gap-2 items-center text-sm">
            <Link href="/es" aria-label="Español">🇪🇸</Link>
            <Link href="/en" aria-label="English">🇬🇧</Link>
            <Link href="/de" aria-label="Deutsch">🇩🇪</Link>
          </div>
        </div>
      </nav>

    </header>
  );
}
