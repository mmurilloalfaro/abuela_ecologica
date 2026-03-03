import NurseryHero from "@/components/nursery/NurseryHero";
import NurseryIntro from "@/components/nursery/NurseryIntro";
import NurseryStats from "@/components/nursery/NurseryStats";
import NurseryGallery from "@/components/nursery/NurseryGallery";
import NurseryServices from "@/components/nursery/NurseryServices";
import NurserySchedule from "@/components/nursery/NurserySchedule";

export default function NurseryPage() {
  return (
    <main className="pt-20">

      <NurseryHero />
      <NurseryIntro />
      <NurseryStats />
      <NurseryGallery />
      <NurseryServices />
      <NurserySchedule />
    </main>

  );
}
