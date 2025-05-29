import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import { Title } from "@/components/Title";
import { ListStores } from "@/components/ListStores";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-nunito-sans)] font-semibold">
      <Header />

      <main>
        <Carousel
          slides={[
            {
              src: "/assets/images/banner-large-01.png",
              alt: "Banner 1",
              fill: true,
              priority: true,
            },
            {
              src: "/assets/images/banner-large-02.png",
              alt: "Banner 2",
              fill: true,
              priority: true,
            },
            {
              src: "/assets/images/banner-large-03.png",
              alt: "Banner 3",
              fill: true,
              priority: true,
            },
          ]}
          slidesMobile={[
            {
              src: "/assets/images/banner-01.png",
              alt: "Banner 1",
              fill: true,
              priority: true,
            },
            {
              src: "/assets/images/banner-02.webp",
              alt: "Banner 2",
              fill: true,
              priority: true,
            },
            {
              src: "/assets/images/banner-03.png",
              alt: "Banner 3",
              fill: true,
              priority: true,
            },
          ]}
        />
      </main>

      <section className="flex-1 bg-neutral-full px-5 py-8 space-y-5">
        <div className="space-y-5">
          <Title>abertos</Title>

          <ListStores />
        </div>

        <div className="space-y-5 mt-12">
          <Title>fechados</Title>

          <ListStores isClosed />
        </div>
      </section>

      <Footer.Root className="text-center lg:flex lg:justify-between lg:px-5 lg:items-center lg:space-y-0">
        <Footer.Title className="text-xl font-bold">
          feito com 💜 em maringá-PR
        </Footer.Title>

        <Footer.Description className="text-xl font-bold max-w-md m-auto lg:m-0 lg:max-w-full">
          aiqfome.com © 2007-2023 aiqfome LTDA. CNPJ: 09.186.786/0001-58
        </Footer.Description>
      </Footer.Root>
    </div>
  );
}
