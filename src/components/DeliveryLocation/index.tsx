import { HTMLAttributes, PropsWithChildren } from "react";

import { Icon } from "@/components/Icon";

function Root({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...rest}>{children}</div>;
}

function Pin({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div {...rest}>
      <Icon.Pin className="size-full" classNameInline="fill-neutral-full" />
      {children}
    </div>
  );
}

function Description({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return <p {...rest}>{children}</p>;
}

function Address({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return <h4 {...rest}>{children}</h4>;
}

function ChevronRight({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className="size-4 rotate-270" {...rest}>
      <Icon.Chevron className="size-full" classNameInline="fill-neutral-full" />
      {children}
    </div>
  );
}

export const DeliveryLocation = {
  Root,
  Pin,
  Description,
  Address,
  ChevronRight,
} as const;
