import { Button } from "@/components/Button";
import { DeliveryLocation } from "@/components/DeliveryLocation";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-nunito-sans)] font-semibold">
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

      <Logo />

      <DeliveryLocation.Root className="flex items-center gap-4">
        <DeliveryLocation.Pin className="size-8" />

        <div className="flex flex-col gap-1">
          <DeliveryLocation.Description className="text-primary-200">
            entregando em
          </DeliveryLocation.Description>

          <div className="flex items-center gap-2">
            <DeliveryLocation.Address className="text-xl">
              Rua Mandaguari, 198
            </DeliveryLocation.Address>

            <DeliveryLocation.ChevronRight />
          </div>
        </div>
      </DeliveryLocation.Root>

      <Profile className="size-10 hover:scale-110" />

      <Search.Root className="relative">
        <Search.Input
          className="size-full p-4 rounded-default pl-13"
          placeholder="busque pela loja ou culinária"
        />

        <Search.Label>
          <Search.Icon className="absolute left-5 top-0 bottom-0 m-auto size-5">
            <Icon.Search
              className="size-full"
              classNameInline="fill-neutral-500"
            />
          </Search.Icon>
        </Search.Label>
      </Search.Root>
    </div>
  );
}
