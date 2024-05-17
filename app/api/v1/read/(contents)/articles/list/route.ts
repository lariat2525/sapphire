import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { formatAppearances, formatTags } from "@/lib/feature";
import { isProduction } from "@/lib/helper";
import { articles } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const page: number = Number(searchParams.get("page")) || 1;
    const pageSize: number = Number(searchParams.get("pageSize")) || 10;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const schema = {
      where: {},
      include: {
        images: true,
        tags: {
          include: {
            tags: true, // タグのリレーションを含める
          },
        },
        appearances: {
          include: {
            appearances: true, // 出演のリレーションを含める
          },
        },
        user: true,
      },
      skip,
      take,
    };

    // TODO: arinosu mati
    let res: any = [];

    if (isProduction()) {
      const initResponses = await prisma.articles.findMany(schema);
      if (initResponses.length) {
        res = initResponses.map((response) => {
          return [
            ...res,
            {
              ...response,
              tags: formatTags(response.tags),
              appearances: formatAppearances(response.appearances),
            },
          ];
        });
      }
    } else {
      res = articles; // 開発環境ではモックデータを使用
    }

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
