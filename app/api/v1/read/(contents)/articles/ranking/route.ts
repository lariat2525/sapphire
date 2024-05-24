import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { formatAppearances, formatTags } from "@/lib/feature";
import { isProduction } from "@/lib/helper";
import { rankings } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageSize: number = Number(searchParams.get("pageSize")) || 10;

  try {
    const schema = {
      take: pageSize,
      orderBy: {
        preview: "desc" as const, // プレビューの数に基づいてソート
      },
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
    };

    let result: any = [];

    if (isProduction()) {
      const initResponses = await prisma.articles.findMany(schema);
      if (initResponses.length) {
        result = initResponses.map((response) => {
          return [
            ...result,
            {
              ...response,
              tags: formatTags(response.tags),
              appearances: formatAppearances(response.appearances),
            },
          ];
        });
      }
    } else {
      result = rankings; // 開発環境ではモックデータを使用
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
