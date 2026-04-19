import { Metadata } from "next";
import { SubPageMv } from "@/components/sections/SubPageMv";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <SubPageMv
        title="ABOUT"
        description="デザインとエンジニアリングの両面からプロダクトに向き合うフロントエンドエンジニアです。"
      />
    </main>
  );
}
