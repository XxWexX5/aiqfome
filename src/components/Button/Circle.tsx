import { twMerge } from "tailwind-merge";

export function Circle({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        `size-full border-3 py-2 rounded-full cursor-pointer transition-transform duration-300 ease-in-out ${className}`
      )}
      {...rest}
    ></button>
  );
}
