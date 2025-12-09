# ✨ Portfolio
自身の経歴、習得技術、制作物がわかるようポートフォリオを作成した。<br>
ポートフォリオを閲覧することで、経歴、内面、制作物一覧等がわかるようにした。<br>
ポートフォリオの「Projects」にハッカソン（チーム開発）、個人開発で作成した制作物が複数あり、クリックするとGitHubのリポジトリに遷移する。<br>

## URL
https://hiro-portfolio.site/

## 📚 目次


## 背景
企業の採用担当者は、時間が限られている中で、自社に合う人材か否かを見極める必要があるとともに、自身の制作物のGitHubリンクを企業へ公開するだけでは、企業側の確認・判断のコストが大きいと考えた。<br>
よって、企業側の確認・判断のコストを下げるため、自身の「内面、スキル、制作物」等を集約したものをポートフォリオに公開することとした。<br>

## ターゲット
- 企業の採用担当者

## 使用技術
本ポートフォリオは静的ファイルで構成されており、カスタムドメインを取得し、Web上に公開している。<br>
よって、主要使用技術はフロントエンドおよびインフラであり、以下のとおり示す。

| **カテゴリ** | **技術** |
| --- | --- |
| フロントエンド | React 19.2.0 / Next.js(APP Router) 16.0.7 / Tailwindcss / TypeScript |
| インフラ | Vercel |
| その他 | Canva / GitHub |

## 技術選定理由
高速レスポンスによりユーザービリティの向上を図るため、SSGを有する**Next.js**を採用した。<br>
また、Next.jsとVercelを使用することで、高速デプロイと自動ビルド・デプロイを可能とし、ポートフォリオの制作から公開までの期間の短縮を図るとともに保守性・運用性の向上を図った。<br>
本ポートフォリオは、DBと連携した複雑な処理ないが、自身の学習目的のため、**Typescript**を使用した。<br>

## 画面設計


## ディレクトリ・ファイル構成
ディレクトリ・ファイル構成を以下のとおり示す。



## 開発環境確認手順



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
