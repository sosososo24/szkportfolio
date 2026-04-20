"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { animateWorksBackground } from "@/utils/animations/worksSection";
import { WORKS } from "@/lib/works-data";

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

export function WorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = WORKS.find((w) => w.featured) ?? WORKS[0];

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      animateWorksBackground(sectionRef.current);
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-black rounded-t-[40px] md:rounded-t-[80px] pt-20 pb-30 px-4 md:px-10"
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
        <div className="flex flex-col gap-10 md:flex-row md:gap-14">
          {/* Featured image */}
          <div className="relative w-full md:w-[47%] aspect-567/455 shrink-0">
            <Image
              src={featured.imageSrc}
              alt={featured.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Work list */}
          <div className="flex flex-col gap-2.5 flex-1">
            {WORKS.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="group flex flex-col border-b border-white pb-5"
              >
                <div className="flex gap-[10px] items-center">
                  <div className="flex flex-1 flex-col gap-[10px] min-w-0">
                    {/* Text info */}
                    <div className="flex flex-col">
                      <span className="font-noto font-medium text-[18px] leading-normal text-white group-hover:text-orange transition-colors duration-500">
                        {work.company}
                      </span>
                      <span className="font-noto font-black text-[28px] leading-normal text-white group-hover:text-orange transition-colors duration-500">
                        {work.title}
                      </span>
                      <span className="font-noto font-normal text-[16px] text-gray leading-normal">
                        {work.role}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-[7px]">
                      {work.tags.map((tag) => (
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
