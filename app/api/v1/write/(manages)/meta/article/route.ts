import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";

// Body例
// {"id":0,"fields":{"name":"test","jp_name":"test"}}

const prisma = getPrismaClient();

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { id, fields } = body;

    console.log(id, fields);

    if (!id || !fields) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    let res: any;

    if (isProduction()) {
      res = await prisma.articles.update({
        where: { id: id },
        data: fields,
      });
      res = { response_code: "200", ...res };
    } else {
      // 開発環境ではモックデータを使用
      res = {
        response_code: "200",
        message: "This is a mock response in development environment",
      };
    }

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
