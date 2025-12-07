"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-4 w-full max-w-4xl">
      {/* タイトル＋自己紹介 */}
      {/* タイトル */}
      <motion.h1
        className="text-center text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Hiro! <br /> Welcome to my portfolio!
      </motion.h1>
      {/* 自己紹介 */}
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-[1fr_2fr] gap-4 items-center">
          <Image
            className="rounded-full"
            src="/profile-icon.png"
            alt="プロフィール画像"
            width={150}
            height={150}
          />
          <div className="bg-gray-800 rounded-xl w-full px-4 py-2 text-left border-1 border-gray-600 space-y-2">
            <h2 className="text-xl font-bold text-left underline underline-offset-4">
              👤 Hiro
            </h2>
            <p className="text-gray-400">
              クラウドエンジニア、バックエンドエンジニアを目指して、IT学習に励んでおります！
            </p>
          </div>
        </div>
      </div>
      {/* スキル、各種リンク */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        {/* スキル */}
        <div className="row-span-2 bg-gray-800 rounded-xl px-6 py-4 text-left border border-gray-600 space-y-4">
          <h3 className="text-xl font-bold text-left underline underline-offset-4">
            🛠️ My Skills
          </h3>
          <table className="text-gray-400 border-2 border-gray-600">
            <thead>
              <tr>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold">
                  カテゴリ
                </th>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold">
                  技術
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold">
                  Frontend
                </th>
                <td className="border border-gray-600 px-4 py-2 text-left">
                  HTML / CSS / JavaScript / TypeScript / React / Next.js /
                  Tailwind
                </td>
              </tr>
              <tr>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold">
                  Backend
                </th>
                <td className="border border-gray-600 px-4 py-2 text-left">
                  Python / Flask / Django / MySQL
                </td>
              </tr>
              <tr>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold whitespace-nowrap">
                  DevOps & Cloud
                </th>
                <td className="border border-gray-600 px-4 py-2 text-left">
                  Linux / Git / GitHub / Docker / Docker compose / Vim / AWS
                </td>
              </tr>
              <tr>
                <th className="border border-gray-600 px-3 py-2 text-center font-bold">
                  Other
                </th>
                <td className="border border-gray-600 px-4 py-2 text-left">
                  Figma / Canva / draw.io / Microsoft Office
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* 各種リンク */}
        <div className="bg-gray-800 rounded-xl px-4 py-2 text-left border-1 border-gray-600 space-y-2">
          <h3 className="text-xl font-bold text-left underline underline-offset-4">
            🔗 Links
          </h3>
          <ul className="space-y-2">
            <li className="flex space-x-2">
              <Image
                src="/github-mark-white.png"
                alt="GitHubアイコン画像"
                width={20}
                height={20}
              />
              <Link
                className="hover:underline text-blue-400"
                href="https://github.com/hiro-53-RareTECH"
              >
                github.com/hiro-53-RareTECH
              </Link>
            </li>
            <li className="flex space-x-2">
              <Image
                src="/qiita-icon.png"
                alt="Qiitaアイコン画像"
                width={20}
                height={20}
              />
              <Link
                className="hover:underline text-blue-400"
                href="https://qiita.com/hiro_53"
              >
                qiita.com/hiro_53
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl px-4 py-2 text-left border-1 border-gray-600 space-y-2">
          <h3 className="text-xl font-bold text-left underline underline-offset-4">
            ☕ Hobby
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:underline text-blue-400"
                href="https://bookmeter.com/users/1629490/books/read"
              >
                📚読書メーター
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-blue-400"
                href="https://annict.com/@hiro_abc/watched"
              >
                🎞️Annict
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
