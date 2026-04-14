"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // md以上で自動的に閉じる
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Escキーで閉じる
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // 閉じるアニメーション終了後にDOMから削除してフォーカスを戻す
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || open) return;

    const finish = () => {
      clearTimeout(timeoutId);
      setRendered(false);
      triggerRef.current?.focus();
    };

    menu.addEventListener("animationend", finish, { once: true });
    const timeoutId = setTimeout(finish, 500);

    return () => {
      menu.removeEventListener("animationend", finish);
      clearTimeout(timeoutId);
    };
  }, [open]);

  const openMenu = () => {
    setRendered(true);
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* トグルボタン */}
      <div className="md:hidden fixed top-4 right-4 z-[80] flex items-center gap-2">
        <span
          className={`text-xs font-syne font-semibold tracking-widest transition-colors duration-300 ${rendered ? "text-white" : "text-black"}`}
        >
          MENU
        </span>
        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => (open ? closeMenu() : openMenu())}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${rendered ? "bg-white translate-y-2 rotate-45" : "bg-black"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${rendered ? "bg-white opacity-0" : "bg-black"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${rendered ? "bg-white -translate-y-2 -rotate-45" : "bg-black"}`}
          />
        </button>
      </div>

      {/* メニュー本体 */}
      {rendered && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーション"
          data-state={open ? "open" : "closed"}
          className="fixed inset-0 z-[60] bg-black data-[state=open]:animate-[menu-overlay-in_0.5s_ease-in-out_forwards] data-[state=closed]:animate-[menu-overlay-out_0.4s_ease-in-out_forwards]"
          onClick={closeMenu}
        >
          <div
            className="w-[60%] mx-auto h-full flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-6 font-syne">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-small font-semibold text-white"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
