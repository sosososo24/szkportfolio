import type { Metadata } from "next";
import { Noto_Sans_JP, Syne } from "next/font/google";
import "./globals.css";
import "@/styles/index.scss";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnchorScrollHandler } from "@/components/layout/AnchorScrollHandler";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

// TODO: ドメイン確定後に metadataBase を更新する
export const metadata: Metadata = {
  metadataBase: new URL("https://suzukishogo.com"),
  title: {
    default: "鈴木翔梧 | Frontend Engineer & UI Designer",
    template: "%s | 鈴木翔梧",
  },
  description:
    "鈴木翔梧のポートフォリオサイト。UI/UXデザインからフロントエンド実装まで幅広く対応しています。",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "鈴木翔梧 Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-black">
        <AnchorScrollHandler />
        <Header />
        <main className="flex-1 pt-20 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
