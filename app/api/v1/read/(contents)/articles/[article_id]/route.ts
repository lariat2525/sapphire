import { NextResponse } from "next/server";
import { Params } from "@/types/common";
import { getPrismaClient } from "@/lib/config";
import { formatAppearances, formatTags } from "@/lib/feature";
import { isProduction } from "@/lib/helper";
import { articles } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request, { params }: Params) => {
  try {
    const { searchParams } = new URL(req.url);
    const includeHeaders = searchParams.get("includeHeaders");

    const schema = {
      where: {
        id: Number(params.article_id), // パラメータから記事IDを取得してクエリに使用
      },
      include: {
        images: true,
        monsters: true,
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

    let result;

    if (isProduction()) {
      if (includeHeaders === "false") {
        // 記事ヘッダー情報がない場合、リレーションを除外
        const { include, ...newSchema } = schema;
        result = await prisma.monsters.findUnique(newSchema);
      } else {
        const initResponse = await prisma.articles.findUnique(schema);
        if (initResponse) {
          result = {
            ...initResponse,
            // タグと出演情報をフォーマット
            tags: formatTags(initResponse.tags),
            appearances: formatAppearances(initResponse.appearances),
          };
        }
      }
    } else {
      result = articles; // 開発環境ではモックデータを使用
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
