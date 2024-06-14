// リレーションつきGETテスト
import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { tags } from "@/mock/v1/read/content";
import { addColumnMapLocal } from "@/mock/v1/read/helper";
import { Tag } from "@/features/manages/types/tags";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    let result;

    if (isProduction()) {
      // 本番環境の場合、データベースからタグを取得
      result = await prisma.tags.findMany({});
    } else {
      result = addColumnMapLocal<Tag>(tags, 13);
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
