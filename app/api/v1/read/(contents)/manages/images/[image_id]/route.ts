import { NextResponse } from "next/server";
import { Params } from "@/types/common";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { users } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request, { params }: Params) => {
  try {
    let res;
    if (isProduction()) {
    } else {
      res = users; // 開発環境ではモックデータを使用
    }

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
