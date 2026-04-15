import { Logo } from "@/components/layout/Logo";
import { BgText } from "@/components/ui/BgText";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-thin-orange pt-[100px] pb-[60px] px-10">
      {/* Background decoration */}
      <BgText
        fill="white"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-5 mx-auto">
        <Logo className="w-25" />
        <p className="font-syne text-sm tracking-[0.26em] text-black whitespace-nowrap">
          © 2026 Shogo Suzuki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
