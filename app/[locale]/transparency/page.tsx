import TransparencyHero from "@/components/transparency/TransparencyHero";
import Board from "@/components/transparency/Board";
import Legal from "@/components/transparency/Legal";
import Reports from "@/components/transparency/Reports";

export default function TransparencyPage() {
  return (
    <main className="pt-32 space-y-32">
      <TransparencyHero />
      <Board />
      <Legal />
      <Reports />
    </main>
  );
}
