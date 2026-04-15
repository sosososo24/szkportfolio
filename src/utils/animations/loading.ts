import gsap from "gsap";

/**
 * ローディングアニメーション。
 * Phase 1: BgText がストロークで浮かび上がる（ラインドローイング）
 * Phase 2: fill が塗られ、ストロークが消える（塗りつぶし）
 * Phase 3: MvSection の BgText 位置へスケールダウン＆移動
 * Phase 4: オーバーレイをフェードアウト → onComplete
 *
 * prefers-reduced-motion が設定されている場合はスキップする。
 */
export function animateLoading(
  overlay: HTMLElement,
  bgWrapper: HTMLElement,
  onComplete: () => void,
): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete();
    return;
  }

  const paths = Array.from(bgWrapper.querySelectorAll<SVGPathElement>("path"));
  if (paths.length === 0) {
    onComplete();
    return;
  }

  // MvSection の BgText 位置を事前に計算
  const targetEl = document.querySelector(".mv-bgtext");
  const fromRect = bgWrapper.getBoundingClientRect();
  const toRect = targetEl?.getBoundingClientRect();

  const hasTarget = toRect !== undefined && toRect.width > 0;
  const deltaX = hasTarget && toRect
    ? toRect.left + toRect.width / 2 - (fromRect.left + fromRect.width / 2)
    : 0;
  const deltaY = hasTarget && toRect
    ? toRect.top + toRect.height / 2 - (fromRect.top + fromRect.height / 2)
    : window.innerHeight * 0.25;
  const scale = hasTarget && toRect ? toRect.width / fromRect.width : 0.5;

  // 初期状態: 全パスの fill を透明にしてストロークのみ
  gsap.set(paths, {
    attr: {
      "fill-opacity": 0,
      stroke: "#282828",
      "stroke-width": 2,
      "stroke-opacity": 0,
    },
  });

  const tl = gsap.timeline();

  tl
    // Phase 1: ストロークが浮かび上がる
    .to(paths, {
      attr: { "stroke-opacity": 1 },
      duration: 1.2,
      ease: "power2.inOut",
    })
    // Phase 2: fill が塗られ、ストロークが消える
    .to(
      paths,
      { attr: { "fill-opacity": 1 }, duration: 1.4, ease: "power2.inOut" },
      "-=0.3",
    )
    .to(
      paths,
      { attr: { "stroke-opacity": 0 }, duration: 0.6, ease: "power1.in" },
      "<0.4",
    )
    // Phase 3: MvSection の BgText 位置へ移動
    .to(
      bgWrapper,
      {
        x: deltaX,
        y: deltaY,
        scale,
        duration: 1.0,
        ease: "power2.inOut",
      },
      "+=0.5",
    )
    // Phase 4: 移動完了に合わせてオーバーレイをフェードアウト
    .to(
      overlay,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power1.in",
        onComplete,
      },
      "-=0.2",
    );
}
