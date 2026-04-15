"use client";

import { useState } from "react";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { MvSection } from "@/components/sections/MvSection";

export function HomeIntro() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && (
        <LoadingOverlay onComplete={() => setLoadingDone(true)} />
      )}
      <MvSection animateOnMount={loadingDone} />
    </>
  );
}
