import Image from "next/image";

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <div className={`flex flex-col items-center ${className ?? ""}`}>
      <Image
        src="/images/logo.svg"
        alt="SZK"
        width={100}
        height={41}
        className="w-full h-auto"
      />
      <p className="text-xs md:text-sm font-syne tracking-[0.3rem] whitespace-nowrap">
        portfolio
      </p>
    </div>
  );
}
