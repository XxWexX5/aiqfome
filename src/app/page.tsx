import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { Title } from "@/components/Title";
import { Store } from "@/components/Store";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-nunito-sans)] font-semibold">
      <Header />

      <main>
        <Carousel
          slides={[
            {
              src: "/assets/images/banner-01.png",
              alt: "Banner 1",
              fill: true,
              objectFit: "cover",
              priority: true,
            },
            {
              src: "/assets/images/banner-02.webp",
              alt: "Banner 2",
              fill: true,
              objectFit: "cover",
              priority: true,
            },
            {
              src: "/assets/images/banner-03.png",
              alt: "Banner 3",
              fill: true,
              objectFit: "cover",
              priority: true,
            },
          ]}
        />
      </main>

      <section className="bg-neutral-full px-5 py-8 space-y-5">
        <Title>abertos</Title>

        <Store.Root className="flex items-center gap-4">
          <div className="size-20 relative">
            <Store.Logo
              src="/assets/images/logo-matsuri.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
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
          <div className="size-20 relative">
            <Store.Logo
              src="/assets/images/logo-subway.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
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
          <div className="size-20 relative">
            <Store.Logo
              src="/assets/images/logo-burger-king.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
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
      </section>

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
    </div>
  );
}
