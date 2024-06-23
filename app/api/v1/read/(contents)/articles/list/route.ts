import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import {
  formatAppearances,
  formatTags,
  getOrderBy,
  switchWhereJapanese,
} from "@/lib/feature";
import { isProduction } from "@/lib/helper";
import { addColumnMapLocal } from "@/mock/v1/read/helper";
import { articleList } from "@/mock/v1/read/content";
import { Article } from "@/features/articles/types/articles";
import { Prisma } from "@prisma/client";

const prisma = getPrismaClient();

const mockTotalCount = 8;

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const page: number = Number(searchParams.get("page")) || 1;
    const pageSize: number = Number(searchParams.get("pageSize")) || 10;
    const keyword: string = searchParams.get("keyword") || "";
    const filter: string = searchParams.get("filter") || "";

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // 検索処理　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
    const searchQuery = keyword
      ? switchWhereJapanese<Prisma.ArticlesWhereInput>(keyword, "insensitive")
      : {};

    // 絞り込み処理　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
    const filterQuery = filter
      ? getOrderBy<Prisma.ArticlesOrderByWithRelationInput>(filter)
      : {};

    // TODO: arinosu mati
    let res: any = [];
    let totalCount: number = 0;

    if (isProduction()) {
      // 全件数を取得
      totalCount = await prisma.articles.count({ where: searchQuery });

      const schema = {
        where: searchQuery,
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
        orderBy: filterQuery,
        skip,
        take,
      };

      const initResponses = await prisma.articles.findMany(schema);

      if (initResponses.length) {
        res = initResponses.map((response) => {
          return {
            ...res,
            ...{
              ...response,
              tags: formatTags(response.tags),
              appearances: formatAppearances(response.appearances),
            },
          };
        });
      }
    } else {
      totalCount = mockTotalCount;
      res = addColumnMapLocal<Article>(articleList.list, pageSize); // 開発環境ではモックデータを使用
    }

    return NextResponse.json({ list: res, totalCount });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // データベース接続を閉じる
  }
};
