import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Detail",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;

  return <main>Work Detail: {id}</main>;
}
