import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between bg-gray-800 text-white p-4 items-center">
      <div className="flex space-x-4 ">
        <img src="#" alt="logo" />
        <h1 className="text-xl font-bold flex-1">Hiro</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
      </nav>
    </header>
  );
};
