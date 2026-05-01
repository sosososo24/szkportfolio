import { Metadata } from "next";
import { SubPageMv } from "@/components/sections/SubPageMv";
import { WorksListSection } from "@/components/sections/works/WorksListSection";
import { getWorks } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "Works",
  description:
    "鈴木翔梧が手掛けたプロジェクト一覧。UI/UXデザインからフロントエンド実装まで幅広く対応しています。",
};

export default async function WorksPage() {
  const { contents: works } = await getWorks(40);

  return (
    <main>
      <SubPageMv
        title="WORKS"
        description="これまで手掛けたプロジェクトの一部をご紹介します。UI/UXデザインからモダンな技術を用いたフロントエンド実装まで、幅広く対応しています。"
      />
      <WorksListSection works={works} />
    </main>
  );
}
