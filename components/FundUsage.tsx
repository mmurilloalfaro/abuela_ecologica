export default function FundUsage() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Uso de los fondos
        </h2>

        <p className="text-lg text-gray-700">
          Los recursos obtenidos a través de donaciones y alianzas se destinan
          principalmente a programas de impacto ambiental y comunitario.
        </p>

        <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
          <li>Educación ambiental y talleres comunitarios</li>
          <li>Proyectos de reforestación y conservación</li>
          <li>Materiales educativos y operativos</li>
          <li>Gastos administrativos básicos para la operación</li>
        </ul>
      </div>
    </section>
  );
}
