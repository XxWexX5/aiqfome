import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

const defaultStyle = "p-3 rounded-default font-bold";

function Info({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        `${defaultStyle} bg-info-50 text-info-500 ${className}`
      )}
      {...rest}
    ></div>
  );
}

export const Status = {
  Info,
};
