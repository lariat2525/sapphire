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
        preview: 2150,
      },
    ],
  });

  // 画像データの一括追加
  const images = await prisma.images.createMany({
    data: [
      { path: "/goblin.png", alt: "goblin", article_id: 1 },
      { path: "/zeus.png", alt: "zeus", article_id: 2 },
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
        size: 1000,
        weight: 800,
        habitat: "オランダ",
        strength_value: 10,
        magic_power_value: 10,
        intelligence_value: 10,
        risk_value: 8,
        rarity_value: 10,
        trait_text: "ああああ",
        root_text: "いいいい",
        weakness_text: "うううう",
      },
      {
        article_id: 1,
        name: "goblin",
        jp_name: "ゴブリン",
        size: 150,
        weight: 80,
        habitat: "オランダ",
        strength_value: 6,
        magic_power_value: 1,
        intelligence_value: 2,
        risk_value: 4,
        rarity_value: 1,
        trait_text: "ああああ",
        root_text: "いいいい",
        weakness_text: "うううう",
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
