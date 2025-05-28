import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-nunito-sans)] font-semibold">
      <p className="text-3xl">Nunito Semibold</p>
      <p className="text-3xl font-bold">Nunito Bold</p>

      <div className="flex gap-4 my-4">
        <Icon.Pin className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Profile
          className="w-10 h-10"
          classNameInline="fill-neutral-full"
        />

        <Icon.Search
          className="w-10 h-10"
          classNameInline="fill-neutral-full"
        />

        <Icon.Bike className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Star className="w-10 h-10" classNameInline="fill-warning-500" />

        <Icon.Motorbike className="w-10 h-10" />

        <Icon.Share className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Heart className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Money className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Chevron
          className="w-10 h-10"
          classNameInline="fill-neutral-full"
        />

        <Icon.Leaf className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.HotPepper
          className="w-10 h-10"
          classNameInline="fill-neutral-full"
        />

        <Icon.Plus className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Less className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Trash className="w-10 h-10" classNameInline="fill-neutral-full" />

        <Icon.Edit className="w-10 h-10" classNameInline="fill-neutral-full" />

        <div className="size-10">
          <Button.Circle className="hover:scale-110">
            <Icon.Plus
              className="size-full scale-70"
              classNameInline="fill-neutral-full"
            />
          </Button.Circle>
        </div>

        <div className="size-10">
          <Button.Circle className="hover:scale-110">
            <Icon.Less
              className="size-full scale-40"
              classNameInline="fill-neutral-full"
            />
          </Button.Circle>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full max-w-sm">
          <Button.Default className="bg-sucess-500 hover:bg-transparent hover:border-sucess-500 hover:text-sucess-500">
            ir para pagamento
          </Button.Default>
        </div>

        <div className="w-full max-w-sm">
          <Button.Default className="text-neutral-full border-neutral-full hover:bg-neutral-full hover:text-primary-500">
            Voltar para home
          </Button.Default>
        </div>
      </div>
    </div>
  );
}
