import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWork, getWorks } from "@/lib/microcms";
import { WorkDetailMv } from "@/components/sections/works/WorkDetailMv";
import { WorkDetailSection } from "@/components/sections/works/WorkDetailSection";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const work = await getWork(id);
    return { title: `${work.title} | Works` };
  } catch {
    return { title: "Works" };
  }
}

export async function generateStaticParams() {
  const { contents } = await getWorks();
  return contents.map((work) => ({ id: work.id }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;

  let work;
  try {
    work = await getWork(id);
  } catch {
    notFound();
  }

  return (
    <main>
      <WorkDetailMv company={work.client} title={work.title} />
      <WorkDetailSection work={work} />
    </main>
  );
}
