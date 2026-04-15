"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

interface TickerItem {
  text: string;
  color: string;
}

interface Props {
  text?: string;
  bgColor?: string;
  fontSize?: string;
  className?: string;
  items?: TickerItem[];
  speed?: number;
}

// 1セットあたりのアイテム数（ビューポートを十分に埋める数）
const ITEMS_PER_LOOP = 8;

export function ScrollTicker({
  text = "DOWN SCROLL",
  bgColor = "#f8a450",
  fontSize = "2rem",
  className = "",
  items,
  speed = 1,
}: Props) {
  const baseItems: TickerItem[] = items
    ? Array.from({ length: ITEMS_PER_LOOP }, (_, i) => items[i % items.length])
    : Array.from({ length: ITEMS_PER_LOOP }, (_, i) => ({
        text,
        color: i % 2 === 0 ? "#282828" : "#ffffff",
      }));

  return (
    <div
      className={`overflow-hidden py-2.5 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <Splide
        options={{
          type: "loop",
          drag: false,
          arrows: false,
          pagination: false,
          autoScroll: {
            speed,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
          gap: "2.5rem",
          autoWidth: true,
        }}
        extensions={{ AutoScroll }}
        aria-label="ticker"
      >
        {baseItems.map((item, i) => (
          <SplideSlide key={i}>
            <span
              className="font-syne font-extrabold leading-[1.2]"
              style={{ fontSize, color: item.color }}
            >
              {item.text}
            </span>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
