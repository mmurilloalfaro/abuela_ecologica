import { Leaf, Handshake, Scale } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="relative py-32 bg-green-950 text-white">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Quiénes somos
          </h1>
          <p className="text-lg text-white/90">
            Trabajamos por la protección del ambiente y el fortalecimiento de
            comunidades mediante educación ambiental, acción comunitaria y
            desarrollo sostenible.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-24">

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-gray-200 rounded-xl p-8 transition hover:shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              Velar por el uso responsable de los recursos naturales para
              proteger y mejorar la calidad de vida, defender y restaurar el
              medio ambiente, y promover —junto a las comunidades— estilos de
              vida sostenibles que aseguren un futuro digno para el planeta
              Tierra.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 transition hover:shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Visión</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser una fundación referente en acción ambiental comunitaria,
              reconocida por impulsar ecosistemas sanos, territorios sostenibles
              y una relación equilibrada entre las personas y la naturaleza.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Conciencia ambiental</h3>
              <p className="text-gray-700 text-sm">
                Comprender el impacto de nuestras acciones sobre el entorno,
                asumiendo la responsabilidad de generar efectos positivos y
                minimizar los negativos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Respeto ambiental</h3>
              <p className="text-gray-700 text-sm">
                Reconocer los límites del entorno natural, actuando con
                consideración, cumplimiento de las normas ambientales y respeto
                por todas las formas de vida.
              </p>
            </div>

    <div className="space-y-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
        <Scale className="w-6 h-6" />
      </div>
      <h3 className="font-semibold">Justicia ambiental</h3>
      <p className="text-gray-700 text-sm">
        Promover el bien común mediante un comportamiento justo y
        responsable del ser humano como garante del equilibrio entre
        sociedad y naturaleza.
      </p>
    </div>

  </div>
</div>


        {/* Principles */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-gray">
            Principios
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border border-gray/10 rounded-xl">
              <h3 className="font-semibold text-lg text-gray mb-2">
                Derecho a un ambiente sano
              </h3>
              <p className="text-gray/80">
                Todos los seres vivos tienen derecho a desarrollarse en un entorno
                saludable, productivo y en equilibrio con la naturaleza.
              </p>
            </div>

            <div className="p-6 border border-gray/10 rounded-xl">
              <h3 className="font-semibold text-lg text-gray mb-2">
                Equidad intergeneracional
              </h3>
              <p className="text-gray/80">
                El desarrollo humano debe garantizar oportunidades justas para las
                generaciones presentes, sin comprometer el bienestar de las futuras.
              </p>
            </div>

            <div className="p-6 border border-gray/10 rounded-xl">
              <h3 className="font-semibold text-lg text-gray mb-2">
                Liderazgo comunitario
              </h3>
              <p className="text-gray/80">
                Las mujeres y las personas jóvenes desempeñan un rol clave en la
                construcción de soluciones ambientales y territoriales sostenibles.
              </p>
            </div>

            <div className="p-6 border border-gray/10 rounded-xl">
              <h3 className="font-semibold text-lg text-gray mb-2">
                Saberes diversos
              </h3>
              <p className="text-gray/80">
                Los pueblos indígenas, comunidades locales y personas migrantes aportan
                conocimientos esenciales para la protección y gestión del ambiente.
              </p>
            </div>

            <div className="p-6 border border-gray/10 rounded-xl md:col-span-2">
              <h3 className="font-semibold text-lg text-gray mb-2">
                Transformación de estilos de vida
              </h3>
              <p className="text-gray/80">
                La humanidad debe replantear sus formas de producción, consumo y
                convivencia para garantizar un equilibrio real con la naturaleza.
              </p>
            </div>
          </div>
        </section>


      </section>
    </main>
  );
}
