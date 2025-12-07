"use client";
import { label } from "framer-motion/client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export const Header = () => {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path
      ? "text-blue-400 underline underline-offset-4 font-bold"
      : "text-gray-300 hover:text-blue-400";

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="flex justify-between bg-gray-800 text-white p-4 items-center">
      {/* ロゴ、名前 */}
      <Link href="/">
        <div className="flex space-x-4 items-center">
          <Image
            className="rounded-full bg-transparent"
            src="/portfolio-logo.png"
            alt="ロゴ画像"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold flex-1">Hiro</h1>
        </div>
      </Link>
      {/* ヘッダーナビ */}
      <nav className="hidden md:flex text-xl space-x-8 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkStyle(`${item.href}`)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* スマホサイズのハンバーガー（md未満で表示） */}
      <button
        type="button"
        className="md:hidden inline-flex flex-col justify-center gap-1.5 rounded-md border border-gray-600 px-2.5 py-2 hover:bg-gray-800 transition"
        aria-label="メニューを開く"
        onClick={() => setIsOpen(true)}
      >
        <span className="h-0.5 w-5 bg-white"></span>
        <span className="h-0.5 w-5 bg-white"></span>
        <span className="h-0.5 w-5 bg-white"></span>
      </button>
      {/* モーダルメニュー（スマホ用） */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/60"
          onClick={closeMenu}
        >
          {/* メニュー本体（クリックが閉じイベントに伝播しないようにする） */}
          <div
            className="h-full w-3/4 max-w-xs bg-gray-900 border-l border-gray-700 p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー部（タイトル＋閉じるボタン） */}
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Menu</span>
              <button
                type="button"
                className="text-sm px-2 py-1 rounded border border-gray-600 hover:bg-gray-800 transition"
                onClick={closeMenu}
                aria-label="メニューを閉じる"
              >
                ✕
              </button>
            </div>

            {/* メニューリスト */}
            <nav className="flex flex-col gap-4 text-base">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 border-b border-gray-700/60 last:border-b-0 hover:text-blue-400 transition-colors"
                  onClick={closeMenu} // 遷移時に閉じる
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
