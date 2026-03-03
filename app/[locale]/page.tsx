import HomeHero from "@/components/home/HomeHero";
import HomeStory from "@/components/home/HomeStory";
import HomeImpact from "@/components/home/HomeImpact";
import HowToHelp from "@/components/home/HowToHelp";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <main className="pt-20">
      <HomeHero />
      <HomeStory />
      <HomeImpact />
      <HowToHelp />
      <HomeCTA />
    </main>
  );
}
