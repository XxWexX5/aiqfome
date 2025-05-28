import { Logo } from "@/components/Logo";
import { DeliveryLocation } from "@/components/DeliveryLocation";
import { Profile } from "@/components/Profile";
import { Search } from "@/components/Search";
import { Icon } from "@/components/Icon";

export function Header() {
  function SearchField() {
    return (
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
    );
  }

  return (
    <header className="p-6 space-y-6">
      <div className="flex justify-between items-center md:gap-8">
        <Logo />

        <DeliveryLocation.Root className="flex items-center gap-2">
          <DeliveryLocation.Pin className="size-8" />

          <div className="flex flex-col">
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

        <div className="md:flex md:flex-1 md:justify-end md:items-center md:gap-8">
          <div className="hidden md:block w-full max-w-lg">
            <SearchField />
          </div>

          <Profile className="size-6 hover:scale-110" />
        </div>
      </div>

      <div className="md:hidden">
        <SearchField />
      </div>
    </header>
  );
}
