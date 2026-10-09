import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Music2
} from "lucide-react";

interface FooterProps {
  dictionary: {
    navigation: string;
    legalTitle: string;
    contact: string;
    email: string;
    developedBy: string;
    legal: {
      nonprofit: string;
      country: string;
      rights: string;
    };
    links: {
      home: string;
      projects: string;
      donate: string;
      transparency: string;
    };
  };
  locale: string;
}

export default function Footer({ dictionary, locale }: FooterProps) {
  return (
    <footer className="bg-black text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}
        <div className="space-y-6">
          <Link href={`/${locale}`}>
            <Image
              src="/logos/logoabuelaeco_blanco.png"
              alt="Logo Fundación Abuela Ecológica"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            {dictionary.navigation}
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${locale}`} className="hover:text-white transition">
                {dictionary.links.home}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/projects`} className="hover:text-white transition">
                {dictionary.links.projects}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/donate`} className="hover:text-white transition">
                {dictionary.links.donate}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/transparency`} className="hover:text-white transition">
                {dictionary.links.transparency}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            {dictionary.legalTitle}
          </h4>

          <ul className="space-y-2 text-sm">
            <li>{dictionary.legal.nonprofit}</li>
            <li>{dictionary.legal.country}</li>
            <li>{dictionary.legal.rights}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            {dictionary.contact}
          </h4>

          <p className="text-sm">
            {dictionary.email}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/fundacionAbuelaEcologica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/abuelaecologica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@abuelaecologica?_r=1&_t=ZS-96fquNYidEq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Music2 size={20} />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="https://www.youtube.com/channel/UC1LAknvN9E72KZpBm20Hmcg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center text-xs text-white/50 py-6">
        © {new Date().getFullYear()} Fundación Abuela Ecológica. {dictionary.legal.rights}

        <p className="mt-1">
          {dictionary.developedBy}{" "}
          <Link
            href="https://github.com/mmurilloalfaro"
            className="font-semibold hover:text-white transition underline-offset-4 hover:underline"
          >
            mmurilloalfaro
          </Link>
        </p>
      </div>
    </footer>
  );
}