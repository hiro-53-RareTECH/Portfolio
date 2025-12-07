"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SkillRadarCard from "../components/about/SkillRadarCard";

// スキルカードの設定
const labelsFrontend = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
];
const valuesFrontend = [2, 2, 1, 1, 1, 1];

const labelsBackend = ["Python", "Flask", "Django", "MySQL", "", ""];
const valuesBackend = [2, 2, 2, 2, 0, 0];

const labelsDevOps = [
  "Linux",
  "Git/GitHub",
  "Docker",
  "Docker Compose",
  "Vim",
  "AWS",
];
const valuesDevOps = [2, 2, 2, 2, 2, 2];

const About = () => {
  return (
    <div className="space-y-4 w-full max-w-4xl">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">About</h1>
        <p className="text-gray-400">プロフィール、スキルを紹介します。</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile */}
        <section className="space-y-4 md:col-span-1">
          <div className="bg-gray-800 rounded-xl w-full px-4 py-2 text-left border-1 border-gray-600 space-y-2">
            <h2 className="text-xl font-bold text-left underline underline-offset-4">
              👤 Profile
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-400">📍 Hokkaido, Japan</li>
              <li className="text-gray-400">🏁 Started:2025.02.01</li>
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
        </section>

        {/* About me */}
        <section className="space-y-4 md:col-span-2">
          <div className="bg-gray-800 rounded-xl w-full px-4 py-2 text-left border-1 border-gray-600 space-y-2">
            <h2 className="text-xl font-bold text-left underline underline-offset-4">
              💬 About me
            </h2>
            <p className="text-gray-400">
              北海道出身で、現在は九州に拠点を移しています。
              <br />
              <br />
              前職では漁港・海岸施設の設計技術者として業務に従事しておりました。前職での実務経験から「設計力」、「ドキュメント作成力」が強みです。
              <br />
              <br />
              社内の業務用ルーター設定、リモートVPN設定をきっかけにITに興味を持ち、ITエンジニアへの転職を目指しています。
              <br />
              <br />
              2025年2月からITスクール「RareTECH」に入会し、フロントエンド、バックエンド、インフラ（クラウド、ネットワーク、Linux）を幅広く学んでいます。
            </p>
          </div>
        </section>
      </div>

      {/* My Skills */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-left underline underline-offset-4">
          🛠️ My Skills Radar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillRadarCard
            title="Frontend"
            labels={labelsFrontend}
            values={valuesFrontend}
            color="#4287f5"
          />
          <SkillRadarCard
            title="Backend"
            labels={labelsBackend}
            values={valuesBackend}
            color="#4287f5"
          />
          <SkillRadarCard
            title="DevOps & Cloud"
            labels={labelsDevOps}
            values={valuesDevOps}
            color="#4287f5"
          />
          <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-600 w-full">
            <h3 className="text-xl font-bold">凡例</h3>
            <ul className="text-left text-gray-400 space-y-4 p-2 text-sm">
              <li>5 - 即戦力として業務に貢献できるレベル</li>
              <li>4 - 実務レベルに近く、職務で必要な開発を自走して行える</li>
              <li>
                3 - 個人・チーム開発で十分に使用し、基本的な機能を実装できる
              </li>
              <li>
                2 - 個人・チーム開発で一定量使用し、初歩的な機能を実装できる
              </li>
              <li>1 - 基礎学習を終え、理解を深めている段階</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
