import { Metadata } from "next";
import { SubPageMv } from "@/components/sections/SubPageMv";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <main>
      <SubPageMv
        title="WORKS"
        description="これまで手掛けたプロジェクトの一部をご紹介します。UI/UXデザインからモダンな技術を用いたフロントエンド実装まで、幅広く対応しています。"
      />
    </main>
  );
}
