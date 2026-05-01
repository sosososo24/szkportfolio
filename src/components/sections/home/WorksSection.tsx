"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { animateWorksBackground } from "@/utils/animations/worksSection";
import { type Work } from "@/lib/microcms";

function WorkItemArrow() {
  return (
    <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white group-hover:bg-orange group-hover:border-orange transition-colors duration-500">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="rotate-45 group-hover:rotate-0 transition-transform duration-500"
      >
        <path
          d="M4 14L14 4M14 4H7M14 4V11"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface Props {
  works: Work[];
}

export function WorksSection({ works }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeId = hoveredId ?? works[0]?.id;

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      animateWorksBackground(sectionRef.current);
    },
    { scope: sectionRef, dependencies: [] },
  );

  if (!works[0]) return null;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-black rounded-t-[40px] md:rounded-t-[80px] pt-20 pb-30"
    >
      <div className="inner-md flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:gap-[120px] lg:gap-[220px]">
          <SectionTitle
            lines={["WORKS"]}
            markFill="#f8a450"
            textColor="text-white"
          />
          <p className="font-noto font-normal text-white text-[16px] md:text-[18px] leading-normal flex-1">
            これまで手掛けたプロジェクトの一部をご紹介します。
            <br />
            UI/UXデザインからモダンな技術を用いたフロントエンド実装まで、幅広く対応しています。
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-14 md:items-center">
          {/* Featured image */}
          <div className="relative w-full md:w-[47%] aspect-video shrink-0 bg-[#000]">
            {works.map((work) => (
              <Image
                key={work.id}
                src={work.thumb.url}
                alt={work.title}
                fill
                className={`object-contain transition-opacity duration-400 ${activeId === work.id ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Work list */}
          <div className="flex flex-col gap-2.5 flex-1">
            {works.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="group flex flex-col border-b border-white pb-5"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex gap-[10px] items-center">
                  <div className="flex flex-1 flex-col gap-[10px] min-w-0">
                    {/* Text info */}
                    <div className="flex flex-col">
                      <span className="font-noto font-medium text-[18px] leading-normal text-white group-hover:text-orange transition-colors duration-500">
                        {work.client}
                      </span>
                      <span className="font-noto font-black text-[28px] leading-normal text-white group-hover:text-orange transition-colors duration-500">
                        {work.title}
                      </span>
                      <span className="font-noto font-normal text-[16px] text-gray leading-normal">
                        {work.job.join(" / ")}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-[7px]">
                      {work.tool.map((tag) => (
                        <span
                          key={tag}
                          className="font-noto font-normal text-[12px] leading-normal px-2 py-0.5 bg-white/20 text-white group-hover:bg-orange/10 group-hover:text-orange transition-colors duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Arrow */}
                  <WorkItemArrow />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button href="/works">VIEW MORE WORKS</Button>
        </div>
      </div>
    </section>
  );
}
