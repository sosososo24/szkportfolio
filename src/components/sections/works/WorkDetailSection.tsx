import Image from "next/image";
import { type Work } from "@/lib/microcms";

interface Props {
  work: Work;
}

export function WorkDetailSection({ work }: Props) {
  return (
    <section className="bg-white flex flex-col gap-10 items-center pb-[200px] pt-[60px] px-10">
      {/* サムネイル */}
      <div className="inner-md w-full">
        <div className="relative w-full aspect-video">
          <Image
            src={work.thumb.url}
            alt={work.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* VIEW WEB SITE ボタン */}
      {work.siteurl && (
        <a
          href={work.siteurl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 border border-black px-12 py-[30px] group hover:bg-black transition-colors duration-300"
        >
          <span className="font-syne font-extrabold text-[20px] leading-none text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
            VIEW WEB SITE
          </span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M5 21L21 5M21 5H11M21 5V15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black group-hover:text-white transition-colors duration-300"
            />
          </svg>
        </a>
      )}

      {/* Overview + コンテンツ */}
      <div className="inner-md w-full flex flex-col gap-10 md:flex-row md:gap-14 md:items-start">
        {/* 左：Overview */}
        <div className="flex flex-col gap-10 shrink-0 md:w-[400px] md:sticky md:top-24">
          <div className="flex flex-col text-black">
            <span className="font-noto font-normal text-[16px] leading-normal">
              概要
            </span>
            <span className="font-syne font-extrabold text-[40px] leading-[1.25]">
              Overview
            </span>
          </div>
          <dl className="flex flex-col">
            <div className="flex gap-5 items-start border-t border-black py-5">
              <dt className="font-noto font-medium text-[14px] text-black leading-normal min-w-[100px] shrink-0">
                クライアント
              </dt>
              <dd className="font-noto font-medium text-[14px] text-black leading-normal">
                {work.client}
              </dd>
            </div>
            <div className="flex gap-5 items-start border-t border-b border-black py-5">
              <dt className="font-noto font-medium text-[14px] text-black leading-normal min-w-[100px] shrink-0">
                担当内容
              </dt>
              <dd className="font-noto font-medium text-[14px] text-black leading-normal">
                {work.job.join(" / ")}
              </dd>
            </div>
            {work.period && (
              <div className="flex gap-5 items-start border-b border-black py-5">
                <dt className="font-noto font-medium text-[14px] text-black leading-normal min-w-[100px] shrink-0">
                  制作期間
                </dt>
                <dd className="font-noto font-medium text-[14px] text-black leading-normal">
                  {work.period}
                </dd>
              </div>
            )}
            <div className="flex gap-5 items-start border-b border-black py-5">
              <dt className="font-noto font-medium text-[14px] text-black leading-normal min-w-[100px] shrink-0">
                使用ツール
              </dt>
              <dd className="flex flex-wrap gap-[7px]">
                {work.tool.map((tag) => (
                  <span
                    key={tag}
                    className="font-noto font-normal text-[12px] text-black leading-normal bg-black/10 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* 右：コンテンツセクション */}
        {work.detail && work.detail.length > 0 && (
          <div className="flex flex-col gap-[46px] flex-1">
            {work.detail.map((section, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h2 className="font-noto font-bold text-[25px] text-black leading-normal">
                  {section.title}
                </h2>
                <div
                  className="font-noto font-medium text-[18px] text-black leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.detail }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
