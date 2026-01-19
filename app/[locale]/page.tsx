import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowToHelp from "@/components/HowToHelp";

export default function HomePage() {
  return (
    <main className="pt-20">
      <Hero />
      <Story />
      <HowToHelp />
    </main>
  );
}
