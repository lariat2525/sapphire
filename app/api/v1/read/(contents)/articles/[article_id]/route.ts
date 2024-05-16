import { NextResponse } from "next/server";
import { Params } from "@/types/common";
import { getPrismaClient } from "@/lib/config";
import { getResponseData, isProduction } from "@/lib/helper";
import { articles } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request, { params }: Params) => {
  try {
    const { searchParams } = new URL(req.url);
    const includeHeaders = searchParams.get("includeHeaders");

    const schema = {
      where: {
        id: Number(params.article_id),
      },
      include: {
        images: true,
        monsters: true,
        tags: {
          include: {
            tags: true,
          },
        },
        appearances: {
          include: {
            appearances: true,
          },
        },
        user: true,
      },
    };

    let res;

    if (isProduction()) {
      if (includeHeaders === "false") {
        // 記事ヘッダー情報がない場合
        const { include, ...newSchema } = schema;
        res = await prisma.monsters.findUnique(newSchema);
      } else {
        res = await prisma.articles.findUnique(schema);
      }
    } else {
      res = articles;
    }
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
