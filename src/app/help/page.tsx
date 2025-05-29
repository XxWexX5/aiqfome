import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export default function Help() {
  return (
    <>
      <p className="text-3xl">Nunito Semibold</p>
      <p className="text-3xl font-bold">Nunito Bold</p>

      <div className="flex gap-4 my-4">
        <Icon.Pin className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Profile className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Search className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Bike className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Star className="size-10" classNameInline="fill-warning-500" />

        <Icon.Motorbike className="size-10" />

        <Icon.Share className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Heart className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Money className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Chevron className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Leaf className="size-10" classNameInline="fill-neutral-full" />

        <Icon.HotPepper
          className="size-10"
          classNameInline="fill-neutral-full"
        />

        <Icon.Plus className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Less className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Trash className="size-10" classNameInline="fill-neutral-full" />

        <Icon.Edit className="size-10" classNameInline="fill-neutral-full" />

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

      <Footer.Root className="text-center">
        <Footer.Title className="text-xl font-bold">
          feito com 💜 em maringá-PR
        </Footer.Title>

        <Button.Default className="bg-primary-500 hover:bg-transparent hover:border-primary-500 hover:text-primary-500 max-w-sm">
          ver ticket
        </Button.Default>
      </Footer.Root>
    </>
  );
}
