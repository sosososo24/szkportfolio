import { Logo } from "@/components/layout/Logo";
import { BgText } from "@/components/ui/BgText";
import { ScrollTicker } from "@/components/ui/ScrollTicker";

const SKILLS_TICKER_ITEMS = [
  { text: "FRONTEND ENGINEERING", color: "#ffffff" },
  { text: "WEB DESIGN", color: "#f8a450" },
];

export function Footer() {
  return (
    <footer className="relative bg-thin-orange">
      {/* Top: Orange message ticker — overlaps with section above */}
      <ScrollTicker
        text="THANK YOU FOR YOUR TIME AND CONSIDERATION"
        bgColor="#f8a450"
        fontSize="2rem"
        className="absolute top-0 left-0 w-full -translate-y-1/2 -rotate-1 z-20"
      />

      {/* Background decoration */}
      <BgText
        fill="white"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-5 mx-auto pt-[100px] pb-[60px]">
        <Logo className="w-25" />
        <p className="font-syne text-sm tracking-[0.26em] text-black whitespace-nowrap">
          © 2026 Shogo Suzuki. All rights reserved.
        </p>
      </div>

      {/* Bottom: Dark skills ticker */}
      <ScrollTicker
        items={SKILLS_TICKER_ITEMS}
        bgColor="#282828"
        fontSize="3rem"
        speed={0.7}
      />
    </footer>
  );
}
