'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/*type Locale = "es" | "en" | "de" | "fr" | "pt";*/
type Locale = "es";


interface NavbarProps {
  locale: Locale;
  dictionary: {
    about: string;
    projects: string;
    nursery: string;
    involucrate: string;
    transparency: string;
    donate: string;
  };
}

export default function Navbar({ locale, dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: dictionary.about, href: `/${locale}/about` },
    { name: dictionary.projects, href: `/${locale}/projects` },
    { name: dictionary.nursery, href: `/${locale}/nursery` },
    { name: dictionary.transparency, href: `/${locale}/transparency` },
  ];

  const languages = [
    { code: "es" as Locale, flag: "🇪🇸", label: "ES Español" },
    /*{ code: "en" as Locale, flag: "🇬🇧", label: "GB English" },
    { code: "fr" as Locale, flag: "🇫🇷", label: "FR French" },
    { code: "de" as Locale, flag: "🇩🇪", label: "DE German" },
    { code: "pt" as Locale, flag: "🇵🇹", label: "PT Portuguese" },*/
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const changeLocale = (newLocale: Locale) => {
    if (!pathname) return `/${newLocale}`;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 z-50">
            <Image
              src="/logos/logo_verde.png"
              alt="Fundación Abuela Ecológica"
              width={90}
              height={90}
              priority
            />
          </Link>

          {/* DESKTOP */}
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

            <div className="flex items-center gap-4 text-sm border-l border-white/20 pl-6 text-white/80">
              {languages.map((lang) => (
                <div key={lang.code} className="relative group">
                  <Link href={changeLocale(lang.code)}>
                    <span
                      className={`text-lg transition-transform ${
                        locale === lang.code
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-100 hover:scale-110"
                      }`}
                    >
                      {lang.flag}
                    </span>
                  </Link>

                  {/* Tooltip */}
                  <span
                    className="
                      absolute -bottom-8 left-1/2 -translate-x-1/2
                      whitespace-nowrap
                      bg-black text-white text-xs
                      px-2 py-1 rounded
                      opacity-0 group-hover:opacity-100
                      transition-opacity
                      pointer-events-none
                    "
                  >
                    {lang.label}
                  </span>
                </div>
              ))}

              <Link
                href={`/${locale}/donate`}
                className="ml-2 px-4 py-2 rounded-md bg-[#58a833]
                text-white font-medium hover:bg-green-600 transition"
              >
                {dictionary.donate}
              </Link>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="
              fixed inset-0 z-[40]
              bg-black/95
              pt-24
              px-6
              flex flex-col
              items-center
              overflow-y-auto
              md:hidden
            "
          >
            <ul className="flex flex-col items-center gap-8 text-2xl text-white mt-10">
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

            <div className="flex flex-col items-center gap-8 mt-16 pb-20">
              <div className="flex gap-6 text-2xl text-white opacity-60">
                {languages.map((lang) => (
                  <div key={lang.code} className="relative group">
                    <Link
                      href={changeLocale(lang.code)}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="hover:scale-110 transition-transform">
                        {lang.flag}
                      </span>
                    </Link>

                    <span
                      className="
                        absolute -bottom-8 left-1/2 -translate-x-1/2
                        whitespace-nowrap
                        bg-black text-white text-xs
                        px-2 py-1 rounded
                        opacity-0 group-hover:opacity-100
                        transition-opacity
                        pointer-events-none
                      "
                    >
                      {lang.label}
                    </span>
                  </div>
                ))}
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
                {dictionary.donate}
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}