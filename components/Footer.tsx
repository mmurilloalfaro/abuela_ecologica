import Link from "next/link";
import Image from "next/image"; 
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Music2
} from "lucide-react";



export default function Footer() {
  return (
    <footer className="bg-black text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Organization */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-white transition">
              <Image 
              src="/logos/logoabuelaeco_blanco.png" 
              alt="Logo Fundación Abuela Ecológica"
              width={80} 
              height={80}
              className="priority"
            />
            </Link>
            
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-white transition">
                Donar
              </Link>
            </li>
            <li>
              <Link href="/transparency" className="hover:text-white transition">
                Transparencia
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            Información legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Fundación sin fines de lucro</li>
            <li>Costa Rica</li>
            <li>Todos los derechos reservados</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
            Contacto
          </h4>

          <p className="text-sm">
            info@abuelaecologica.org
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/fundacionAbuelaEcologica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/abuelaecologica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="TikTok"
            >
              <Music2 size={20} />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="https://www.youtube.com/channel/UC1LAknvN9E72KZpBm20Hmcg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-white/50 py-6">
        © {new Date().getFullYear()} Fundación Abuela Ecológica. Todos los derechos reservados.
        <p className="mt-1">
          Desarrollado por{" "}
          <Link 
            href="https://github.com/mmurilloalfaro" 
            className="font-semibold hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            mmurilloalfaro
          </Link>
        </p>
      </div>
    </footer>
  );
}