"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { BgText } from "@/components/ui/BgText";
import { animateLoading } from "@/utils/animations/loading";

interface Props {
  onComplete: () => void;
}

export function LoadingOverlay({ onComplete }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!overlayRef.current || !bgWrapperRef.current) return;
    animateLoading(overlayRef.current, bgWrapperRef.current, onComplete);
  });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-thin-orange flex items-center justify-center"
    >
      <div ref={bgWrapperRef} className="w-[90%]" style={{ opacity: 0 }}>
        <BgText fill="#282828" className="w-full" />
      </div>
    </div>
  );
}
