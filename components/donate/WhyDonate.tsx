"use client";

import { useDictionary } from "@/data/context/DictionaryProvider";

export default function WhyDonate() {
  const dict = useDictionary();
  const t = dict.donate.whyDonate;

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {t.title}{" "}
          <span className="text-green-700">
            {t.highlight}
          </span>
        </h2>

        {t.paragraphs.map((paragraph: string, index: number) => (
          <p key={index} className="text-lg text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}