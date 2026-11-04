'use client';
import Image from "next/image";

import { boardMembers } from "@/data/board";
import { useDictionary } from "@/data/context/DictionaryProvider";

export default function Board() {
  const dict = useDictionary();
  const t = dict.transparency.board;

  return (
    <section className="px-6 py-28 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HEADER */}
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold relative inline-block">
            {t.title}
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-emerald-500 rounded-full" />
          </h2>

          <p className="text-gray-600">
            {t.description}
          </p>
        </header>

        {/* BOARD MEMBERS */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <li
              key={`${member.roleKey}-${index}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                {/* PHOTO */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>

                {/* MEMBER INFO */}
                <div>
                  <p className="font-semibold leading-tight">
                    {member.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    {t.roles[member.roleKey]}
                  </p>
                </div>
              </div>

              {/* PERIOD */}
              {member.period && (
                <p className="mt-4 text-xs text-gray-500">
                  {t.periodLabel} {member.period}
                </p>
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}