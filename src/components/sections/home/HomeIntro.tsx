"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { LoadingOverlay } from "@/components/layout/LoadingOverlay";
import { MvSection } from "@/components/sections/home/MvSection";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function HomeIntro() {
  const [loadingDone, setLoadingDone] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem("loading-done") === "1") {
      setLoadingDone(true);
    }
  }, []);

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
