import { Icon } from "@/components/Icon";
import { Store } from "@/components/Store";

interface ListStoresProps {
  isClosed?: boolean;
}

export function ListStores({ isClosed }: ListStoresProps) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-matsuri.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Matsuri Concept
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Bike className="size-6" classNameInline="fill-info-500" />

              <p className="font-bold">grátis</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>

      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-subway.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Subway - Avenida center
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Motorbike
                className="size-6"
                classNameInline="fill-info-500"
              />

              <p className="font-bold text-primary-500">R$6,00</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>

      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-burger-king.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Burger King - Colombo
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Motorbike
                className="size-6"
                classNameInline="fill-info-500"
              />

              <p className="font-bold text-primary-500">R$6,00</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>

      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-matsuri.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Matsuri Concept
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Bike className="size-6" classNameInline="fill-info-500" />

              <p className="font-bold">grátis</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>

      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-subway.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Subway - Avenida center
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Motorbike
                className="size-6"
                classNameInline="fill-info-500"
              />

              <p className="font-bold text-primary-500">R$6,00</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>

      <Store.Root className="flex items-center gap-4">
        <div className={`size-20 relative ${isClosed && "opacity-40"}`}>
          <Store.Logo
            src="/assets/images/logo-burger-king.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Store.Name className="text-lg text-neutral-700 font-bold">
            Burger King - Colombo
          </Store.Name>

          <div className="flex gap-3 items-center">
            <Store.FreeDelivery>
              <Icon.Motorbike
                className="size-6"
                classNameInline="fill-info-500"
              />

              <p className="font-bold text-primary-500">R$6,00</p>
            </Store.FreeDelivery>

            <Store.Rate>
              <Icon.Star
                className="size-5"
                classNameInline="fill-warning-500"
              />

              <p className="font-bold">4.7</p>
            </Store.Rate>
          </div>
        </div>
      </Store.Root>
    </div>
  );
}
