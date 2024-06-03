import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { Image } from "@/features/manages/types/images";
import { addColumnMapLocal } from "@/mock/v1/read/helper";
import { images } from "@/mock/v1/read/content";
import { switchWhereJapanese, getOrderBy } from "@/lib/feature";
import { Prisma } from "@prisma/client";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page: number = Number(searchParams.get("page")) || 1;
  const pageSize: number = Number(searchParams.get("pageSize")) || 10;
  const keyword: string = searchParams.get("keyword") || "";
  const filter: string = searchParams.get("filter") || "";

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // 検索処理　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
  const searchQuery = keyword
    ? switchWhereJapanese<Prisma.ImagesWhereInput>(keyword, "insensitive")
    : {};

  // 絞り込み処理　〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜
  const filterQuery = filter
    ? getOrderBy<Prisma.ImagesOrderByWithRelationInput>(filter)
    : {};

  try {
    let res: any;

    if (isProduction()) {
      const schema = {
        where: searchQuery,
        orderBy: filterQuery,
        skip,
        take,
      };

      const initResponses = await prisma.images.findMany(schema);

      if (initResponses.length) {
        res = initResponses.map((response) => {
          return [
            ...res,
            {
              ...response,
            },
          ];
        });
      }
    } else {
      // 開発環境ではモックデータを使用
      if (keyword) {
        res = [images[0]];
      } else {
        res = addColumnMapLocal<Image>(images, 13);
      }
    }

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
