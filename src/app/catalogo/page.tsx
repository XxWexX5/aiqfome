import { Header } from "@/components/Header";
import { Status } from "@/components/Status";

export default function Catalog() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito-sans)] font-semibold">
      <Header />

      <section className="flex-1 bg-neutral-full px-5 py-8 space-y-5">
        <Status.Info className="w-fit">
          entrega grátis acima de R$ 35,00
        </Status.Info>
      </section>
    </div>
  );
}
