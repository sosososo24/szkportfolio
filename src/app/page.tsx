import { Metadata } from "next";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { StatementSection } from "@/components/sections/home/StatementSection";
import { ProfileSection } from "@/components/sections/home/ProfileSection";
import { WorksSection } from "@/components/sections/home/WorksSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <HomeIntro />
      <StatementSection />
      <ProfileSection />
      <WorksSection />
    </>
  );
}
