@AGENTS.md

# szk-portfolio — CLAUDE.md

## プロジェクト概要

鈴木翔梧のポートフォリオサイト。Next.js App Router で構築し、microCMS でコンテンツを管理、Vercel にデプロイする。

## 技術スタック

| 用途           | ライブラリ              |
| -------------- | ----------------------- |
| フレームワーク | Next.js 16 (App Router) |
| 言語           | TypeScript 5 (strict)   |
| スタイル       | Tailwind CSS v4         |
| アニメーション | GSAP + Motion           |
| CMS            | microCMS                |
| デプロイ       | Vercel                  |

## ディレクトリ構成

```
src/
  app/                    # App Router ルート
    (pages)/              # ルートグループ（レイアウト共有）
    layout.tsx
    page.tsx
  components/
    ui/                   # 汎用 UI コンポーネント（ボタン、カード等）
    layout/               # ヘッダー・フッター・ナビゲーション
    sections/             # ページ内セクション単位のコンポーネント
  lib/
    microcms.ts           # microCMS クライアント・型定義・フェッチ関数
    types.ts              # 共通型定義
  utils/
    animations/           # GSAP / Motion アニメーション関数群
  styles/                 # globals.css 等
public/                   # 静的アセット
```

パスエイリアス: `@/*` → `./src/*`

## コーディング規約

### 全般

- コンポーネントは Named Export を使う（default export は `app/` の page.tsx / layout.tsx のみ）
- ファイル名・ディレクトリ名は kebab-case
- コンポーネント名は PascalCase
- 型は `interface` を優先、Union 型等やむを得ない場合のみ `type`
- `any` は使わない。型が不明な場合は `unknown` + type guard

### React / Next.js

- Server Component を基本とし、インタラクション・ブラウザ API が必要な場合のみ `"use client"` を付与
- `"use client"` コンポーネントはできるだけ末端（葉）に留める
- データフェッチは Server Component 内で行う（`fetch` / microCMS SDK）
- 画像は必ず `next/image` を使う
- フォントは `next/font` を使う

### Tailwind CSS v4

- ユーティリティクラスを直接記述する。`@apply` は最小限に留める
- カスタムカラー・スペーシング等は `globals.css` の `@theme` ブロックで定義する
- レスポンシブは Mobile First（`sm:` `md:` `lg:` の順）

### スタイリング方針

- カラー・背景・レイアウトは Tailwind ユーティリティを使う
- フォントサイズ・セクション余白は SCSS の `myClamp()` を使う
- カラー変数は `src/app/globals.css` の `@theme` で定義する
- `myClamp` 関数は `src/styles/mixins.scss` で定義する
- フォントサイズクラス（`.text-hero` 等）は `src/styles/typography.scss` で定義する

### TypeScript

- `strict: true` を維持する
- 非 null アサーション（`!`）は使わない
- 型引数は明示する（推論に頼りすぎない）

## アニメーションルール

- GSAP は `src/utils/animations/` に関数として切り出す。コンポーネント内に直接書かない
- `useGSAP`（`@gsap/react`）を使い、クリーンアップを必ず行う
- Motion（旧 Framer Motion）はコンポーネントレベルの小さなトランジションに使う
- アニメーションは `prefers-reduced-motion` を尊重する（`matchMedia` で分岐）
- ScrollTrigger は `pin` を多用しない（モバイル UX を考慮）

## 作業スタイル（重要）

1. **変更前に必ず説明する** — コードを書く前に「何を・なぜ変更するか」を日本語で説明し、承認を得てから実装する
2. **1 ファイルずつ確認する** — 複数ファイルを変更する場合、1 ファイル変更するたびに確認を取る
3. 既存コードを読んでから変更する — 推測でコードを書かない
4. 指示範囲外の変更はしない — リファクタリングや「改善」を勝手に追加しない
5. コメントは自明でない箇所にのみ追加する
