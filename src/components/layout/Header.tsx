"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { HamburgerMenu } from "@/components/layout/HamburgerMenu";
import { NAV_LINKS } from "@/lib/constants";

const MARQUEE_TEXT =
  "🙇 ポートフォリオをご覧いただきありがとうございます 🙇\u3000Thank you for taking the time to visit my portfolio.\u3000";

export function Header() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-10 py-4 md:py-6">
        <div className="flex items-center justify-between inner-full">
          {/* Logo */}
          <Link href="/">
            <Logo className="w-20 md:w-25" />
          </Link>

          {/* Right section — desktop */}
          <div className="hidden md:flex items-center gap-5">
            {/* Navigation */}
            <nav className="flex items-center gap-11 rounded-2xl font-syne text-sm md:text-base">
              {NAV_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="">
                  {label}
                </Link>
              ))}
            </nav>
            {/* Marquee ticker */}
            <div className="w-[40%] md:w-90 py-3 flex items-center overflow-hidden rounded-lg bg-black">
              <div
                className="flex shrink-0 whitespace-nowrap"
                style={{ animation: "marquee 20s linear infinite" }}
              >
                <span className="text-xs md:text-sm font-syne font-semibold text-white px-4">
                  {MARQUEE_TEXT}
                </span>
                <span className="text-xs md:text-sm font-syne font-semibold text-white px-4">
                  {MARQUEE_TEXT}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <HamburgerMenu />
    </>
  );
}
