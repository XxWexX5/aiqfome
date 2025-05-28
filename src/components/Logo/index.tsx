import Image from "next/image";

export function Logo() {
  return (
    <div className="w-10 h-10 relative">
      <Image
        src="/assets/images/Logo.svg"
        alt="Logo aiqfome"
        fill
        objectFit="contain"
      />
    </div>
  );
}
