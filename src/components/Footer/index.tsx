import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

function Root({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(`w-full py-8 bg-neutral-100 space-y-4 ${className}`)}
      {...rest}
    ></div>
  );
}

function Title({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 className={twMerge(`text-primary-500 ${className}`)} {...rest}></h5>
  );
}

function Description({
  className,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={twMerge(`text-primary-500 ${className}`)} {...rest}></p>;
}

export const Footer = {
  Root,
  Title,
  Description,
};
