import { HTMLAttributes, PropsWithChildren } from "react";

import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

function Button({
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={twMerge(
        `cursor-pointer transition-transform duration-300 ease-in-out ${className}`
      )}
      {...rest}
    />
  );
}

function LinkExternal({
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

export const InteractiveIcon = {
  Button,
  LinkExternal,
};
