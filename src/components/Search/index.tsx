import { HTMLAttributes, InputHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

function Root({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `flex gap-2 bg-neutral-full border-3 text-neutral-500 rounded-default ${className}`
      )}
      {...rest}
    />
  );
}

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} />;
}

function Label({ ...rest }: HTMLAttributes<HTMLLabelElement>) {
  return <label {...rest}></label>;
}

function Icon({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div {...rest} />;
}

export const Search = {
  Root,
  Input,
  Label,
  Icon,
};
