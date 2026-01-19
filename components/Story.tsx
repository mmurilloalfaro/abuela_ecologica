export default function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-32 bg-white pt-24 pb-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray">
            Nuestra historia
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Fundación Abuela Ecológica nace del deseo profundo de cuidar la
            naturaleza desde lo local, entendiendo que la relación entre las
            personas y su entorno define la calidad de vida de las comunidades.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Creemos que el cambio real ocurre cuando las personas comprenden,
            valoran y protegen el lugar donde viven, pensando siempre en las
            generaciones que vendrán.
          </p>
        </div>

        {/* Visual / Quote */}
        <div className="relative bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <p className="text-xl text-gray-800 font-medium leading-snug">
            “Por San Carlos, Costa Rica y el mundo”
          </p>

          <span className="block mt-6 text-sm text-gray-500">
            — Bertalía González Villalobos
            <span className="block text-gray-400">
              Fundadora
            </span>
          </span>
        </div>

      </div>
    </section>
  );
}
