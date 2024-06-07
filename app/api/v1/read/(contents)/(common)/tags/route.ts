// リレーションつきGETテスト
import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { tags } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    let result;

    if (isProduction()) {
    } else {
      result = tags;
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
