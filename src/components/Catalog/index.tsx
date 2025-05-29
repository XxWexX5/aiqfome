import { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

import Link, { LinkProps } from "next/link";

function MoreInfo({
  className,
  ...rest
}: PropsWithChildren<LinkProps> & { className?: string }) {
  return (
    <Link
      className={twMerge(
        `cursor-pointer transition-transform duration-300 ease-in-out ${className}`
      )}
      {...rest}
    />
  );
}

export const CatalogItem = {
  MoreInfo,
};
