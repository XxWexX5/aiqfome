import { twMerge } from "tailwind-merge";

export function Default({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        `w-full border-3 py-5 rounded-xl text-xl font-bold border-transparent cursor-pointer transition-colors duration-300 ease-in-out ${className}`
      )}
      {...rest}
    ></button>
  );
}
