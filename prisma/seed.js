import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, "prisma/seeds", "seed.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // ユーザーデータの挿入
  await prisma.users.createMany({
    data: data.users,
  });

  // タグデータの挿入
  await prisma.tags.createMany({
    data: data.tags,
  });
  // 画像データの挿入
  await prisma.images.createMany({
    data: data.images,
  });
  // ブログデータの挿入
  await prisma.blogs.createMany({
    data: data.blogs,
  });
  ブログタグ中間データの挿入;
  await prisma.blogTags.createMany({
    data: data.blog_tags,
  });

  // モンスターデータの挿入
  await prisma.monsters.createMany({
    data: data.monsters,
  });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
