import { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORKS } from "@/lib/works-data";
import { WorkDetailMv } from "@/components/sections/works/WorkDetailMv";
import { WorkDetailSection } from "@/components/sections/works/WorkDetailSection";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);
  return {
    title: work ? `${work.title} | Works` : "Works",
  };
}

export async function generateStaticParams() {
  return WORKS.map((work) => ({ id: work.id }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);

  if (!work) notFound();

  return (
    <main>
      <WorkDetailMv company={work.company} title={work.title} />
      <WorkDetailSection work={work} />
    </main>
  );
}
