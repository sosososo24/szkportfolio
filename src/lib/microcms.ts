import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

export interface WorkSection {
  fieldId: string;
  heading: string;
  body: string;
}

export interface Work {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  company: string;
  title: string;
  role: string;
  tags: string[];
  image: { url: string; width: number; height: number };
  thumbnail: { url: string; width: number; height: number };
  featured: boolean;
  siteUrl?: string;
  duration?: string;
  sections?: WorkSection[];
}

export async function getWorks() {
  return client.getList<Work>({
    endpoint: "works",
    queries: { orders: "-publishedAt" },
  });
}

export async function getWork(id: string) {
  return client.get<Work>({
    endpoint: "works",
    contentId: id,
  });
}
