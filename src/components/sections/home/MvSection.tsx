"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { BgText } from "@/components/ui/BgText";
import { ScrollTicker } from "@/components/ui/ScrollTicker";
import { animateMvSection } from "@/utils/animations/mvSection";
import { animateBgTextColors } from "@/utils/animations/bgTextColors";

interface Props {
  animateOnMount?: boolean;
}

export function MvSection({ animateOnMount = true }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const colorCleanupRef = useRef<(() => void) | null>(null);

  useGSAP(
    () => {
      if (!animateOnMount || !containerRef.current) return;
      const container = containerRef.current;
      animateMvSection(container, () => {
        colorCleanupRef.current = animateBgTextColors(container);
      });
    },
    { scope: containerRef, dependencies: [animateOnMount] }
  );

  useEffect(() => {
    return () => {
      colorCleanupRef.current?.();
    };
  }, []);

  return (
    <>
      <section ref={containerRef} className="flex px-4 md:px-10 inner-full">
        <div className="flex flex-1 flex-col gap-8 md:gap-10 items-center justify-center bg-thin-orange overflow-clip pt-20 md:pt-[124px] rounded-4xl md:rounded-[2.875rem]">
          {/* Text area */}
          <div className="flex flex-col md:flex-row md:items-center px-6 md:px-[80px] w-full gap-8 md:gap-0">
            {/* Left: Name */}
            <div className="flex flex-col items-start whitespace-nowrap">
              <p
                className={`mv-subtitle font-syne font-semibold text-mv-sub leading-normal text-orange${!animateOnMount ? " opacity-0" : ""}`}
              >
                <span className="text-black">Web Designer </span>
                &amp;
                <span className="text-black"> Frontend Engineer</span>
              </p>
              <div className="font-syne font-extrabold text-black text-hero">
                <p
                  className={`mv-title-line leading-none${!animateOnMount ? " opacity-0" : ""}`}
                >
                  SUZUKI
                </p>
                <p
                  className={`mv-title-line leading-none${!animateOnMount ? " opacity-0" : ""}`}
                >
                  SHOGO
                </p>
              </div>
            </div>

            {/* Right: Catchcopy */}
            <div className="flex md:flex-1 md:items-center md:justify-end">
              <p
                className={`mv-catchcopy font-noto font-medium text-black text-mv-sub leading-normal${!animateOnMount ? " opacity-0" : ""}`}
              >
                「作る」のその先へ。
                <br />
                事業と共に成長する
                <br />
                Webサイトを育てる。
              </p>
            </div>
          </div>

          {/* Bottom: BgText */}
          <BgText fill="#282828" className="mv-bgtext w-full" />
        </div>
      </section>

      <ScrollTicker
        text="DOWN SCROLL"
        bgColor="#f8a450"
        fontSize="2rem"
        className="transform translate-y-[-25%] rotate-1"
      />
    </>
  );
}
