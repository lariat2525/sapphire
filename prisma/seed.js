/* eslint-disable no-console */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ユーザーデータの一括追加
  const users = await prisma.users.createMany({
    data: [{ username: "Ura" }, { username: "Hirano" }],
  });

  // 画像データの一括追加
  const images = await prisma.images.createMany({
    data: [
      { path: "/goblin.png", alt: "goblin" },
      { path: "/zeus.png", alt: "zeus" },
    ],
  });

  // タグデータの一括追加
  const tags = await prisma.tags.createMany({
    data: [{ name: "神" }, { name: "UMA" }, { name: "モンスター" }],
  });

  const blogs = await prisma.blogs.createMany({
    data: [
      {
        title: "ゼウスガイド",
        en_name: "Zeus Guide",
        preview: "This is a preview of the blog post.",
        release_flg: false,
        image_id: 1, // 前パートで追加された画像ID
        article_id: 1, // 前パートで追加されたユーザーID
      },
      {
        title: "ゼウスガイド",
        en_name: "Zeus Guide",
        preview: "This is a preview of the blog post2",
        release_flg: true,
        image_id: 2, // 前パートで追加された画像ID
        article_id: 2, // 前パートで追加されたユーザーID
      },
    ],
  });

  // モンスターデータの一括追加
  const monsters = await prisma.monsters.createMany({
    data: [
      {
        blog_id: 1,
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
      {
        blog_id: 2,
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
    ],
  });

  const appearances = await prisma.appearances.createMany({
    data: [
      { name: "ゲームオブスローンズ", en_name: "Game Of Thrones" },
      { name: "ドラゴンクエスト", en_name: "Dragon Quest" },
    ],
  });

  ブログタグの一括追加;
  const blogTags = await prisma.blogTags.createMany({
    data: [
      { blog_id: 1, tag_id: 1 },
      { blog_id: 1, tag_id: 2 },
      { blog_id: 2, tag_id: 3 },
    ],
  });

  // ブログ出演作品の一括追加
  const blogAppearances = await prisma.blogAppearances.createMany({
    data: [
      { blog_id: 1, appearance_id: 1 },
      { blog_id: 2, appearance_id: 1 },
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
