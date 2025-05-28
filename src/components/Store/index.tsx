import { HTMLAttributes } from "react";

import Image, { ImageProps } from "next/image";

import { twMerge } from "tailwind-merge";

function Root({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `w-full min-h-20 rounded-default overflow-hidden bg-neutral-100 ${className}`
      )}
      {...rest}
    ></div>
  );
}

function Logo({ ...rest }: ImageProps) {
  return <Image {...rest} />;
}

function Name({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={twMerge(`${className} leading-4 `)} {...rest}></h3>;
}

function FreeDelivery({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(`flex gap-1 text-info-500 ${className}`)}
      {...rest}
    ></div>
  );
}

function PriceDelivery({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(`flex gap-1 text-primary-500 ${className}`)}
      {...rest}
    ></div>
  );
}

function Rate({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(`flex gap-1 text-neutral-600  ${className}`)}
      {...rest}
    ></div>
  );
}

export const Store = {
  Root,
  Logo,
  Name,
  FreeDelivery,
  PriceDelivery,
  Rate,
};
