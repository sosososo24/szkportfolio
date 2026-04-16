"use client";

import { useState, useEffect } from "react";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { MvSection } from "@/components/sections/MvSection";

export function HomeIntro() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    if (!loadingDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
