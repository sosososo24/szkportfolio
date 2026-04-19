"use client";

import { useState, useEffect } from "react";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { MvSection } from "@/components/sections/home/MvSection";

export function HomeIntro() {
  const [loadingDone, setLoadingDone] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("loading-done") === "1";
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem("loading-done", "1");
    setLoadingDone(true);
  };

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
        <LoadingOverlay onComplete={handleLoadingComplete} />
      )}
      <MvSection animateOnMount={loadingDone} />
    </>
  );
}
