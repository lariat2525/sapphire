import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { isProduction } from "@/lib/helper";
import { Commons, Manages } from "@/constants/common";

const prisma = getPrismaClient();

interface Field {
  uid: number;
  [key: string]: any;
}

const updateOrCreateRecords = async (
  table: any,
  foreignKey: string,
  id: number,
  fields: Field[],
  fieldsKey: string
) => {
  // IDで既存のレコードを絞り込む
  const existingRecords = await table.findMany({
    where: { [foreignKey]: id },
  });

  const maxRecordNum =
    fieldsKey === "tag_id"
      ? Commons.Configs.MAX_TAG_NUM
      : Commons.Configs.MAX_APPEARANCE_NUM;

  for (const field of fields) {
    const existingField = existingRecords.find(
      (record: any) => record.id === field.uid
    );

    if (!field[fieldsKey] && !existingField) {
      // パターン1: 変更が空で、対象の要素がなければ何もしない
      continue;
    } else if (!field[fieldsKey] && existingField) {
      // パターン2: 変更が空で、対象の要素があればレコード自体を削除する
      await table.delete({
        where: { id: field.uid },
      });
    } else if (existingField) {
      // パターン3: 変更があり、対象の要素があれば変更する
      const { uid, ...updateData } = field; // uidを除外
      await table.update({
        where: { id: field.uid },
        data: updateData,
      });
    } else if (field.uid === 0 && existingRecords.length < maxRecordNum) {
      // パターン4: 変更があり、uidが0の場合に追加する
      const { uid, ...createData } = field; // uidを除外
      await table.create({
        data: {
          [foreignKey]: id,
          ...createData,
        },
      });
    }
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { id, fields, type } = body;

    if (!id || !fields || !type) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    let res: any;

    if (isProduction()) {
      if (type === Manages.Modals.Edit.TAG) {
        await updateOrCreateRecords(
          prisma.articleTags,
          "article_id",
          id,
          fields,
          "tag_id"
        );
      } else if (type === Manages.Modals.Edit.APPEARANCE) {
        await updateOrCreateRecords(
          prisma.articleAppearances,
          "article_id",
          id,
          fields,
          "appearance_id"
        );
      }

      res = { response_code: "200", message: "Update successful" };
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
