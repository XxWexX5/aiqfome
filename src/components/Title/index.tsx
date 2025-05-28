import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <h3 className="text-2xl font-extrabold text-primary-500">{children}</h3>
  );
}
