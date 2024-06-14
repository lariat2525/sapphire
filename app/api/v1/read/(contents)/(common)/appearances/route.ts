// リレーションつきGETテスト
import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { appearances } from "@/mock/v1/read/content";
import { Appearance } from "@/features/manages/types/appearances";
import { addColumnMapLocal } from "@/mock/v1/read/helper";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    let result;

    if (isProduction()) {
    } else {
      result = addColumnMapLocal<Appearance>(appearances, 13);
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
