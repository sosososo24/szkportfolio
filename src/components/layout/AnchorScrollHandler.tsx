"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnchorScrollHandler() {
  const pathname = usePathname();

  // ページ遷移後、URLにハッシュがあればトップから smooth scroll
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  }, [pathname]);

  // 同一ページ内のアンカークリックを smooth scroll に
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
