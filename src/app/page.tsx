import { Metadata } from "next";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { StatementSection } from "@/components/sections/home/StatementSection";
import { ProfileSection } from "@/components/sections/home/ProfileSection";
import { WorksSection } from "@/components/sections/home/WorksSection";
import { getWorks } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const { contents: works } = await getWorks();

  return (
    <>
      <HomeIntro />
      <StatementSection />
      <ProfileSection />
      <WorksSection works={works} />
    </>
  );
}
