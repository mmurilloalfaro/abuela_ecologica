import HomeHero from "@/components/home/HomeHero";
import HomeStory from "@/components/home/HomeStory";
import HomeImpact from "@/components/home/HomeImpact";
import HowToHelp from "@/components/home/HowToHelp";
import HomeCTA from "@/components/home/HomeCTA";
import { getDictionary } from "@/lib/i18n/getDictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; 

  const dict = await getDictionary(locale);

  return (
    <main className="pt-20">
      <HomeHero dictionary={dict.home} />
      <HomeStory dictionary={dict.story} />
      <HomeImpact dictionary={dict.impact} />
      <HowToHelp dictionary={dict.howToHelp} />
      <HomeCTA dictionary={dict.cta} />
    </main>
  );
}