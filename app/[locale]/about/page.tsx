"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import AboutValues from "@/components/about/AboutValues";
import AboutPrinciples from "@/components/about/AboutPrinciples";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <AboutValues />
      <AboutPrinciples />

      {/* Closing Statement */}
      <section className="relative px-6 py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-900 leading-relaxed">
            “Cuidar la tierra es cuidar a quienes aún no han nacido.”
          </h3>

          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />

          <p className="text-gray-600">
            Una convicción que guía cada acción de la Fundación Abuela Ecológica.
          </p>
        </div>
      </section>

    </main>
  );
}