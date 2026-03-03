'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const params = useParams();
  const locale = (params?.locale as string) || "es";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Quiénes somos", href: `/${locale}/about` },
    { name: "Proyectos", href: `/${locale}/projects` },
    { name: "Vivero Forestal", href: `/${locale}/nursery` },
    { name: "Involúcrate", href: `/${locale}/involucrate` },
    { name: "Transparencia", href: `/${locale}/transparency` },
  ];

  /* Bloquea scroll cuando el menú móvil está abierto */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 z-50"
          >
            <Image
              src="/logo_verde.png"
              alt="Fundación Abuela Ecológica"
              width={90}
              height={90}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 text-sm border-l border-white/20 pl-6">
              <Link href="/es">🇪🇸</Link>
              <Link href="/en">🇬🇧</Link>
              <Link href="/de">🇩🇪</Link>

              <Link
                href={`/${locale}/donate`}
                className="ml-2 px-4 py-2 rounded-md bg-[#58a833]
                text-white font-medium hover:bg-green-600 transition"
              >
                Donar
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 p-2"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="
              fixed inset-0 z-40
              bg-black/95
              pt-28
              flex flex-col items-center justify-center
              gap-12
              md:hidden
            "
          >
            <ul className="flex flex-col items-center gap-8 text-2xl text-white">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-green-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-6 text-2xl">
                <Link href="/es" onClick={() => setIsOpen(false)}>🇪🇸</Link>
                <Link href="/en" onClick={() => setIsOpen(false)}>🇬🇧</Link>
                <Link href="/de" onClick={() => setIsOpen(false)}>🇩🇪</Link>
              </div>

              <Link
                href={`/${locale}/donate`}
                onClick={() => setIsOpen(false)}
                className="
                  px-10 py-4 rounded-xl
                  bg-[#58a833]
                  text-white font-bold text-lg
                  hover:bg-green-600 transition
                "
              >
                Donar ahora
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
