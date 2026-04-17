import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * WorksSection のパララックス上昇アニメーション。
 * セクションがビューポートに入るとき、下から上へスクロール連動で浮かび上がる。
 * prefers-reduced-motion が設定されている場合はスキップする。
 */
export function animateWorksBackground(section: HTMLElement): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.fromTo(
    section,
    { yPercent: 15 },
    {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 50%",
        scrub: 1.5,
      },
    },
  );
}
