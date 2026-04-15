// @splidejs/react-splide の package.json exports に types エントリがないため
// moduleResolution: "bundler" で型が解決できない問題を回避する宣言ファイル
declare module "@splidejs/react-splide" {
  export {
    Splide,
    SplideSlide,
    SplideTrack,
  } from "@splidejs/react-splide/dist/types/index";
}
