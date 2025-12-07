import React from "react";
import Card from "../components/projects/Card";


const hackathonProjects = [
  {
    img: "/projects/comming-soon.png",
    title: "未定",
    url: "https://github.com/hiro-53-RareTECH",
    term: "2026/1/～2026/2（2ヶ月）",
    description: "次回のハッカソンでアプリを作成予定です。",
  },
  {
    img: "/projects/kajimaru.png",
    title: "かじまる",
    url: "https://github.com/hiro-53-RareTECH/kajimaru-app",
    term: "2025/10～2025/11（2ヶ月）",
    description:
      "日々の家事を全部回す、まるく収めることをねらいとした家事管理アプリです。自身は「インフラ」を担当し、Dockerによる開発環境構築を行うとともに、Nginx, Gunicorn, MySQLを使用したWeb3層構造を構築し、AWSにてデプロイしました。",
  },
  {
    img: "/projects/partiality-meeting.png",
    title: "偏愛会議",
    url: "https://github.com/hiro-53-RareTECH/partiality_meeting",
    term: "2025/4～2025/5（2ヶ月）",
    description:
      "偏った愛（趣味）を持つ人同士でも、気軽に繋がれる場を提供するためのチャットアプリです。自身は「バックエンド」を担当し、Flask, MySQLを使用して、基本的なCRUD機能を実装しました。",
  },
];

const personalProjects = [
  {
    img: "/projects/portfolio.png",
    title: "Portfolio",
    url: "https://github.com/hiro-53-RareTECH/Portfolio",
    term: "2025/12/1～",
    description: "本ポートフォリオです。Next.js（APP Router）, TypeScriptを使用して、Vercelにてデプロイしています。",
  },
  {
    img: "/projects/VSLog.png",
    title: "VSLog",
    url: "https://github.com/hiro-53-RareTECH/VSLog",
    term: "2025/7/1～",
    description: "日々の学習記録をグラフ化して「見える化」させるアプリです。要件定義、フロントエンド、バックエンド、開発環境構築の各プロセスを経験しました。",
  },
];

const Projects = () => {
  return (
    <div className="space-y-4 w-full max-w-4xl">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-gray-400">
          ハッカソン（チーム開発）、個人開発で取り組んだプロジェクトを紹介します。
          <br />
          クリックすると、該当のGithubリポジトリが開きます。
        </p>
      </div>

      {/* HackathonProjects */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mt-2 text-left underline underline-offset-4">
            🚀 Hackathon Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonProjects.map((project, idx) => (
            <Card key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* PersonalProjects */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mt-2 text-left underline underline-offset-4">
            🌱 Personal Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, idx) => (
            <Card key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
