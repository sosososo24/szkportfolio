"use client";

import { useState, useEffect } from "react";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { MvSection } from "@/components/sections/home/MvSection";

export function HomeIntro() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    if (loadingDone) {
      document.documentElement.style.overflow = "";
      return;
    }

    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loadingDone]);

  return (
    <>
      {!loadingDone && (
        <LoadingOverlay onComplete={() => setLoadingDone(true)} />
      )}
      <MvSection animateOnMount={loadingDone} />
    </>
  );
}
