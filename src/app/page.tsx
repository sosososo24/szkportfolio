import { Metadata } from "next";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { StatementSection } from "@/components/sections/StatementSection";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <HomeIntro />
      <StatementSection />
    </>
  );
}
