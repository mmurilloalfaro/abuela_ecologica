import TransparencyHero from "@/components/transparency/TransparencyHero";
import Board from "@/components/transparency/Board";
import Founders from "@/components/transparency/Founders";
import Reports from "@/components/transparency/Reports";

export default function TransparencyPage() {
  return (
    <main className="pt-32">
      <TransparencyHero />
      <Board />
      <Founders />
      <Reports />
    </main>
  );
}
