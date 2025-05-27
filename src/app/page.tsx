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
      </div>
    </div>
  );
}
