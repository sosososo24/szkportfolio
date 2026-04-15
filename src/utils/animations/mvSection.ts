import gsap from "gsap";

/**
 * MvSection の入場アニメーション。
 * prefers-reduced-motion が設定されている場合はスキップする。
 */
export function animateMvSection(
  container: HTMLElement,
  onComplete?: () => void,
): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete?.();
    return;
  }

  const q = gsap.utils.selector(container);
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete,
  });

  tl.from(q(".mv-subtitle"), {
    y: 20,
    opacity: 0,
    duration: 0.7,
  })
    .from(
      q(".mv-title-line"),
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
      },
      "-=0.4",
    )
    .from(
      q(".mv-catchcopy"),
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.4",
    );
}
