import DonateHero from "@/components/donate/DonateHero";
import WhyDonate from "@/components/donate/WhyDonate";
import DonationImpact from "@/components/donate/DonationImpact";
import DonationMethods from "@/components/donate/DonationMethods";
import DonateCTA from "@/components/donate/DonateCTA";

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <WhyDonate />
      <DonationImpact />
      <DonationMethods />
      <DonateCTA />
    </main>
  );
}
