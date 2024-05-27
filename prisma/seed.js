/* eslint-disable no-console */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ユーザーデータの一括追加
  const users = await prisma.users.createMany({
    data: [{ username: "Ura" }, { username: "Hirano" }],
  });

  const articles = await prisma.articles.createMany({
    data: [
      {
        title: "全知全能の神",
        name: "zeus",
        jp_name: "ゼウス",
        release_flg: false,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1,
        sentence_enable_flg: true,
        memo: "sasa",
        preview: 10,
      },
      {
        title: "ゴブリン",
        name: "goblin",
        jp_name: "ゴブリン",
        release_flg: true,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2,
        sentence_enable_flg: false,
        memo: "",
        preview: 2150,
      },
    ],
  });

  // 画像データの一括追加
  const images = await prisma.images.createMany({
    data: [
      { path: "/goblin.svg", alt: "goblin", article_id: 1 },
      { path: "/zeus.svg", alt: "zeus", article_id: 2 },
    ],
  });

  // タグデータの一括追加
  const tags = await prisma.tags.createMany({
    data: [
      { name: "god", jp_name: "神" },
      { name: "UMA", jp_name: "UMA" },
      { name: "monster", jp_name: "モンスター" },
    ],
  });

  // モンスターデータの一括追加
  const monsters = await prisma.monsters.createMany({
    data: [
      {
        article_id: 2,
        name: "zeus",
        jp_name: "ゼウス",
        size: "150~1800cm",
        weight: "80~1000kg",
        habitat: "オランダ",
        strength_value: 100,
        magic_power_value: 80,
        intelligence_value: 65,
        risk_value: 71,
        rarity_value: 66,
        trait_text:
          "威力は一般的な艦隊砲撃の10倍以上で、艦隊決戦の切り札とされた。胴体は複数のブロックに分けられ、それぞれ決戦宙域に輸送して現地で組み立て、最後に砲座を連結する事で使用できる。その最大威力は60TJ（60兆J）、広島型原爆の9割にも及ぶ。有効射程距離は300㎞、最大射程は2000㎞にも及び、それをわずか1秒で突っ切る（マッハ5882に相当）。",
        root_text:
          "写真の背景を取り除くためだけに、写真編集ソフトに時間を費やしていませんか？そういう時は、FigmaアプリにRemoveBGのプラグインをインストールすれば解決できます。わざわざ他のツールを使わなくても、RemoveBGでデザインファイル内にある写真の背景を簡単に取り除けます。",
        other_text:
          " アンスプラッシュとは、大量の写真が保管されているストックフォトの一つです。そのため、わざわざアンスプラッシュからダウンロードして取り込まなくても、Figmaアプリなら直接かつ簡単に写真をUIデザインに追加できるので、時間短縮になり著しく業務が改善されます。また、写真の挿入にはアンスプラッシュだけでなくペクセルというプラグインも利用可能です。",
      },
      {
        article_id: 1,
        name: "goblin",
        jp_name: "ゴブリン",
        size: "150~180cm",
        weight: "80~100kg",
        habitat: "オランダ",
        strength_value: 6,
        magic_power_value: 100,
        intelligence_value: 28,
        risk_value: 41,
        rarity_value: 100,
        trait_text:
          "威力は一般的な艦隊砲撃の10倍以上で、艦隊決戦の切り札とされた。胴体は複数のブロックに分けられ、それぞれ決戦宙域に輸送して現地で組み立て、最後に砲座を連結する事で使用できる。その最大威力は60TJ（60兆J）、広島型原爆の9割にも及ぶ。有効射程距離は300㎞、最大射程は2000㎞にも及び、それをわずか1秒で突っ切る（マッハ5882に相当）。",
        root_text:
          "写真の背景を取り除くためだけに、写真編集ソフトに時間を費やしていませんか？そういう時は、FigmaアプリにRemoveBGのプラグインをインストールすれば解決できます。わざわざ他のツールを使わなくても、RemoveBGでデザインファイル内にある写真の背景を簡単に取り除けます。",
        other_text:
          " アンスプラッシュとは、大量の写真が保管されているストックフォトの一つです。そのため、わざわざアンスプラッシュからダウンロードして取り込まなくても、Figmaアプリなら直接かつ簡単に写真をUIデザインに追加できるので、時間短縮になり著しく業務が改善されます。また、写真の挿入にはアンスプラッシュだけでなくペクセルというプラグインも利用可能です。",
      },
    ],
  });

  const appearances = await prisma.appearances.createMany({
    data: [
      { name: "Game Of Thrones", jp_name: "ゲームオブスローンズ" },
      { name: "Dragon Quest", jp_name: "ドラゴンクエスト" },
    ],
  });

  // 記事タグの一括追加
  const articleTags = await prisma.articleTags.createMany({
    data: [
      { article_id: 1, tag_id: 1, main_flg: true },
      { article_id: 1, tag_id: 2, main_flg: false },
      { article_id: 2, tag_id: 3, main_flg: true },
    ],
  });

  // 記事出演作品の一括追加
  const articleAppearances = await prisma.articleAppearances.createMany({
    data: [
      { article_id: 1, appearance_id: 1 },
      { article_id: 2, appearance_id: 1 },
    ],
  });

  // 記事出演作品の一括追加
  const sentences = await prisma.sentences.createMany({
    data: [
      {
        sentence:
          "特定のブランチで .gitignore の内容を他のブランチとは異なる状態に保ちたい場合、Gitのブランチ管理を利用することで実現できます。以下の手順で進めてください。",
        enable_flg: false,
      },
    ],
    data: [
      { sentence: "まず、特定のブランチに切り替えます。", enable_flg: false },
    ],
    data: [
      {
        sentence:
          "この .gitignore の変更はこのブランチにのみ適用され、他のブランチには影響を与えません。必要に応じて、他のブランチに切り替えても .gitignore はそのブランチの状態のままです。",
        enable_flg: true,
      },
    ],
    data: [
      {
        sentence:
          "必要に応じて、特定のブランチでは .gitignore に含めたくないファイルがある場合、それらのファイルを .git/info/exclude に追加することもできます。これはリポジトリ全体には影響しないローカルな設定です。",
        enable_flg: true,
      },
    ],
    data: [{ sentence: "sasasaasass", enable_flg: true }],
  });

  // 記事出演作品の一括追加
  const configs = await prisma.configs.createMany({
    data: [{ username: "ura" }],
  });

  console.log("tags seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
