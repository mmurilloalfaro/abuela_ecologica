import { HandHeart, Users, Leaf } from "lucide-react";
import Link from "next/link";

export default function HowToHelp() {
  return (
    <section
      id="how-to-help"
      className="scroll-mt-24 bg-gray-50 text-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            ¿Cómo podés ayudar?
          </h2>
          <p className="text-gray-600 text-lg">
            Hay muchas formas de involucrarte y ser parte activa de la protección
            del ambiente y las comunidades.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Donate */}
          <div className="bg-white rounded-xl p-8 text-center space-y-6 border border-gray-200 transition hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center">
              <HandHeart size={36} className="text-green-600" />
            </div>

            <h3 className="text-xl font-semibold">Doná</h3>

            <p className="text-gray-600">
              Tu aporte hace posible la continuidad de nuestros proyectos y
              permite ampliar su impacto en más comunidades.
            </p>

            <Link
              href="/donar"
              className="inline-block text-sm font-medium text-green-700 hover:text-green-600 transition"
            >
              Donar ahora →
            </Link>
          </div>

          {/* Volunteer */}
          <div className="bg-white rounded-xl p-8 text-center space-y-6 border border-gray-200 transition hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center">
              <Users size={36} className="text-green-600" />
            </div>

            <h3 className="text-xl font-semibold">Voluntariado</h3>

            <p className="text-gray-600">
              Participá en actividades, talleres y acciones comunitarias que
              generan un cambio real.
            </p>

            <Link
              href="/voluntariado"
              className="inline-block text-sm font-medium text-green-700 hover:text-green-600 transition"
            >
              Sumate →
            </Link>
          </div>

          {/* Alliances */}
          <div className="bg-white rounded-xl p-8 text-center space-y-6 border border-gray-200 transition hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-center">
              <Leaf size={36} className="text-green-600" />
            </div>

            <h3 className="text-xl font-semibold">Alianzas</h3>

            <p className="text-gray-600">
              Empresas y organizaciones pueden colaborar para escalar el impacto
              ambiental y social.
            </p>

            <Link
              href="/alianzas"
              className="inline-block text-sm font-medium text-green-700 hover:text-green-600 transition"
            >
              Conversemos →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
