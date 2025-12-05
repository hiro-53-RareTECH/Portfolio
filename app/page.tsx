"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <motion.h1
        className="text-center text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Hiro! <br /> Welcome to my portfolio!
      </motion.h1>
      <div className="flex space-x-8 items-center">
        <Image
          className="rounded-full"
          src="/profile-icon.png"
          alt="プロフィール画像"
          width={150}
          height={150}
        />
        <div className="bg-gray-800 rounded-xl w-full px-4 py-2 text-left border-1 border-gray-600 space-y-2">
          <h2 className="text-2xl underline underline-offset-4">Hiro</h2>
          <p>
            クラウドエンジニア、バックエンドエンジニアを目指して、IT学習に励んでおります！
          </p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl px-4 py-2 text-left border-1 border-gray-600 space-y-2">
        <h3 className="text-xl font-bold underline underline-offset-4">IT</h3>
        <div className="flex space-x-4">
          <Link
            className="flex space-x-2"
            href="https://github.com/hiro-53-RareTECH"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHubアイコン画像"
              width={20}
              height={20}
            />
            <p className="hover:underline">GitHub</p>
          </Link>
          <Link className="flex space-x-2" href="https://qiita.com/hiro_53">
            <Image
              src="/qiita-icon.png"
              alt="Qiitaアイコン画像"
              width={20}
              height={20}
            />
            <p className="hover:underline">Qiita</p>
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl px-4 py-2 text-left border-1 border-gray-600 space-y-2">
        <h3 className="text-xl font-bold underline underline-offset-4">
          Hobby
        </h3>
        <div className="flex space-x-4">
          <Link
            className="hover:underline"
            href="https://bookmeter.com/users/1629490/books/read"
          >
            <p>📚読書メーター</p>
          </Link>
          <Link
            className="hover:underline"
            href="https://annict.com/@hiro_abc/watched"
          >
            <p>🎞️Annict</p>
          </Link>
        </div>
      </div>
      {/* <div className="bg-gray-800 rounded-xl px-4 py-2 text-left border-1 border-gray-600 space-y-2">
          <h3 className="text-xl font-bold">Skills</h3>
          <div className="flex space-x-4">
            <Image src="https://skillicons.dev/icons?theme=dark&perline=7&i=html,css,js,ts,react,next,figma,python,docker,aws,django,flask" alt="my skills" width={100} height={100}/>

            <Link
              className="hover:underline"
              href="https://bookmeter.com/users/1629490/books/read"
            >
              <p>📚読書メーター</p>
            </Link>
            <Link
              className="hover:underline"
              href="https://annict.com/@hiro_abc/watched"
            >
              <p>🎞️Annict</p>
            </Link>
          </div>
        </div> */}
    </div>
  );
}
