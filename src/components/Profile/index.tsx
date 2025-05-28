import { HTMLAttributes } from "react";

import { Icon } from "@/components/Icon";

export function Profile({
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`cursor-pointer transition-transform duration-300 ease-in-out ${className}`}
      {...rest}
    >
      <Icon.Profile className="size-full" classNameInline="fill-neutral-full" />
    </button>
  );
}
