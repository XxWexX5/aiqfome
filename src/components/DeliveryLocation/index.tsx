import { PropsWithChildren, HTMLAttributes } from "react";

import { Icon } from "@/components/Icon";

function Root({ ...rest }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return <div {...rest}></div>;
}

function Pin({ ...rest }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest}>
      <Icon.Pin className="size-full" classNameInline="fill-neutral-full" />
    </div>
  );
}

function Description({
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLParagraphElement>) {
  return <p {...rest}></p>;
}

function Address({
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) {
  return <h4 {...rest}></h4>;
}

function ChevronRight({
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="size-4 rotate-270" {...rest}>
      <Icon.Chevron className="size-full" classNameInline="fill-neutral-full" />
    </div>
  );
}

export const DeliveryLocation = {
  Root,
  Pin,
  Description,
  Address,
  ChevronRight,
};
