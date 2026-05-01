import Image from "next/image";
import Link from "next/link";
import { type Work } from "@/lib/microcms";

function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/works/${work.id}`} className="flex flex-col gap-[34px] group">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={work.thumb.url}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-[10px] pb-5 border-b border-black/10 flex-1">
        <div className="flex flex-col leading-normal">
          <span className="font-noto font-medium text-[18px] text-black">
            {work.client}
          </span>
          <span className="font-noto font-black text-[18px] text-black">
            {work.title}
          </span>
          <span className="font-noto font-normal text-[16px] text-gray">
            {work.job.join(" / ")}
          </span>
        </div>
        <div className="flex flex-wrap gap-[7px]">
          {work.tool.map((tag) => (
            <span
              key={tag}
              className="font-noto font-normal text-[12px] text-black leading-normal bg-black/10 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

interface Props {
  works: Work[];
}

export function WorksListSection({ works }: Props) {
  return (
    <section className="bg-white pt-[60px] pb-[150px]">
      <div className="inner-md">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
