import gsap from "gsap";

/**
 * BgText のパーツをランダムにオレンジへ変化させるループアニメーション。
 * @returns クリーンアップ関数
 */
export function animateBgTextColors(
  container: HTMLElement,
  baseFill = "#282828",
): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const allPaths = Array.from(
    container.querySelectorAll<SVGPathElement>("[data-bgtext-part]"),
  );
  if (allPaths.length === 0) return () => {};

  const COUNT = Math.max(3, Math.floor(allPaths.length * 0.08));

  let currentTl: gsap.core.Timeline | null = null;
  let delayedCall: gsap.core.Tween | null = null;

  const runCycle = () => {
    const shuffled = [...allPaths].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, COUNT);

    currentTl = gsap.timeline({
      onComplete: () => {
        delayedCall = gsap.delayedCall(
          0.5 + Math.random() * 1.0,
          runCycle,
        );
      },
    });

    currentTl
      .to(selected, {
        attr: { fill: "#f8a450" },
        duration: 0.25,
        stagger: { each: 0.06, from: "random" },
        ease: "power1.out",
      })
      .to(
        selected,
        {
          attr: { fill: baseFill },
          duration: 0.5,
          stagger: { each: 0.05, from: "random" },
          ease: "power1.inOut",
        },
        "+=0.15",
      );
  };

  runCycle();

  return () => {
    currentTl?.kill();
    delayedCall?.kill();
  };
}
