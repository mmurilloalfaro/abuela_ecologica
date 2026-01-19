import { boardMembers } from "@/data/board";

export default function Board() {
  return (
    <section className="px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold">Junta Directiva</h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          {boardMembers.map((member, index) => (
            <li
                key={`${member.role}-${index}`}
                 className="border border-gray-200 rounded-lg p-4 transition hover:shadow-md"
            >
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>

              {member.period && (
                <p className="text-xs text-gray-500 mt-1">
                  Período {member.period}
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500">
          La Junta Directiva es responsable de la dirección estratégica,
          supervisión y toma de decisiones de la fundación.
        </p>
      </div>
    </section>
  );
}
