import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export function Container({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={twMerge(`container mx-auto ${className}`)} {...rest} />
  );
}
