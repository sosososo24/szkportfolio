import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
});

export interface WorkSection {
  fieldId: string;
  title: string;
  detail: string;
}

export interface Work {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  client: string;
  siteurl?: string;
  thumb: { url: string; width: number; height: number };
  period?: string;
  tool: string[];
  job: string[];
  detail?: WorkSection[];
}

export async function getWorks(limit?: number) {
  return client.getList<Work>({
    endpoint: "works",
    queries: { ...(limit !== undefined && { limit }) },
  });
}

export async function getWork(id: string) {
  return client.get<Work>({
    endpoint: "works",
    contentId: id,
  });
}
