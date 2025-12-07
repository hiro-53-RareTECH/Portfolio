"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path
      ? "text-blue-400 underline underline-offset-4 font-bold"
      : "text-gray-300 hover:text-blue-400";

  return (
    <header className="flex justify-between bg-gray-800 text-white p-4 items-center">
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
      <nav className="text-xl space-x-8">
        <Link href="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link href="/about" className={linkStyle("/about")}>
          About
        </Link>
        <Link href="/projects" className={linkStyle("/projects")}>
          Projects
        </Link>
      </nav>
    </header>
  );
};
