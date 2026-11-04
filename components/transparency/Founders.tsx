"use client";

import Image from "next/image";
import { founders } from "@/data/founders";
import { useDictionary } from "@/data/context/DictionaryProvider";

export default function Founders() {
  const dict = useDictionary();
  const t = dict.transparency.founders;

  return (
    <section className="px-6 py-28 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold relative inline-block">
            {t.title}
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-emerald-500 rounded-full" />
          </h2>

          <p className="text-gray-600">
            {t.description}
          </p>
        </header>

        {/* Fundadoras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {founders.map((founder) => {
            const isHighlight = founder.highlight;
            const member = t.members[founder.key];

            return (
              <article
                key={founder.key}
                className={`group rounded-2xl p-8 flex flex-col gap-5 transition
                  ${
                    isHighlight
                      ? "bg-emerald-50 border-2 border-emerald-300 shadow-md"
                      : "bg-white border border-gray-200 hover:shadow-lg"
                  }
                `}
              >
                {/* Avatar */}
                <div
                  className={`relative rounded-full overflow-hidden mx-auto
                    ${isHighlight ? "w-32 h-32" : "w-28 h-28"}
                  `}
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes={isHighlight ? "128px" : "112px"}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-lg font-semibold">
                    {founder.name}
                  </h3>

                  <p className="text-sm text-emerald-700 font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed text-center">
                  {member.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}