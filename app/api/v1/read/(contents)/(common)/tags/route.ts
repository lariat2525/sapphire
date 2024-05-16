import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { getRecords } from "@/lib/core";
import { getResponseData } from "@/lib/helper";
import { tags } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {
  try {
    const res = await getRecords("blogs", [], {
      where: { equal: { id: 1 } },
      include: {
        tags: {
          include: {
            tags: true,
          },
        },
      },
    });
    return NextResponse.json(getResponseData(res, tags));
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
