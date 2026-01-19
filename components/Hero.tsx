import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24">

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/forest.png" 
          alt="Educación ambiental y comunidad"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center text-white space-y-8">

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Cuidamos la tierra educando a quienes la heredarán
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Fundación Abuela Ecológica impulsa educación ambiental y acción
          comunitaria para proteger la naturaleza y fortalecer comunidades.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">

          <Link
            href="/donar"
            className="
              px-8 py-4 rounded-xl
              bg-green-500 text-black font-medium
              hover:bg-green-400 transition
            "
          >
            Apoyar la fundación
          </Link>

          <Link
            href="#story"
            className="
              px-8 py-4 rounded-xl
              border border-white/60
              font-medium
              hover:bg-white/10
              transition
            "
          >
            Conocer nuestra historia
          </Link>

        </div>
      </div>

      {/* Visual transition to Story */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />

    </section>
  );
}
