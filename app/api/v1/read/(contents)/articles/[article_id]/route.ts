import { NextResponse } from "next/server";
import { Params } from "@/types/common";
import {
  FormattedAppearance,
  FormattedTag,
  ResponseAppearance,
  ResponseArticleTag,
} from "@/features/articles/types/articles";
import { getPrismaClient } from "@/lib/config";
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

    let res;

    if (isProduction()) {
      if (includeHeaders === "false") {
        // 記事ヘッダー情報がない場合、リレーションを除外
        const { include, ...newSchema } = schema;
        res = await prisma.monsters.findUnique(newSchema);
      } else {
        const rawRes = await prisma.articles.findUnique(schema);
        if (rawRes) {
          res = {
            ...rawRes,
            // タグと出演情報をフォーマット
            tags: formatTags(rawRes.tags),
            appearances: formatAppearances(rawRes.appearances),
          };
        }
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

/**
 * タグ情報をフォーマット
 * @param tags タグ情報の配列
 * @returns フォーマットされたタグ情報の配列
 */
const formatTags = (tags: ResponseArticleTag[]): FormattedTag[] => {
  return tags.map(({ main_flg, tags }) => ({
    ...tags,
    created_at: new Date(tags.created_at).toISOString(), // Date型をstring型に変換
    main_flg,
  }));
};

/**
 * 出演情報をフォーマット
 * @param appearances 出演情報の配列
 * @returns フォーマットされた出演情報の配列
 */
const formatAppearances = (
  appearances: ResponseAppearance[]
): FormattedAppearance[] => {
  return appearances.map(({ appearances }) => ({
    ...appearances,
    created_at: new Date(appearances.created_at).toISOString(), // Date型をstring型に変換
  }));
};
