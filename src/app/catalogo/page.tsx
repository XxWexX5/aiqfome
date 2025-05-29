import { Header } from "@/components/Header";
import { Status } from "@/components/Status";
import { InteractiveIcon } from "@/components/InteractiveIcon";
import { Icon } from "@/components/Icon";

export default function Catalog() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito-sans)] font-semibold">
      <Header />

      <section className="flex-1 bg-neutral-full px-5 py-8 space-y-5">
        <Status.Info className="w-fit">
          entrega grátis acima de R$ 35,00
        </Status.Info>

        <div className="flex gap-8">
          <InteractiveIcon.LinkExternal href="/" className="hover:scale-110">
            <Icon.Share className="size-6" classNameInline="fill-primary-500" />
          </InteractiveIcon.LinkExternal>

          <InteractiveIcon.Button className="hover:scale-110">
            <Icon.Heart className="size-6" classNameInline="fill-primary-500" />
          </InteractiveIcon.Button>
        </div>
      </section>
    </div>
  );
}
