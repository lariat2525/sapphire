import { getPrismaClient } from "./config";
import { converterWhereOptions, prismaFindMany } from "./helper";
import {
  IncludeType,
  TableOrderByType,
  TableType,
  WhereOptions,
} from "./types/db";

const prisma = getPrismaClient();

/**
 * 指定されたテーブルからレコードを取得します。
 *
 * @param table 取得するレコードのテーブル名
 * @param columns 取得するカラムの配列。デフォルトは全カラムを選択します。
 * @param options オプションのオブジェクト。where（フィルター条件）、filter（取得するレコード数）、order（ソートオプション）、include（関連するレコードを含むかどうか）を指定できます。デフォルトは全てのオプションが未指定（全レコードを取得）です。
 * @returns 取得したレコードの配列を返します。
 */
export const getRecords = async (
  table: TableType,
  columns: string[] = [],
  options: {
    where?: WhereOptions | null;
    filter?: number | null;
    order?: TableOrderByType | null;
    include?: IncludeType | null;
  } = {}
) => {
  // カラムの選択を準備
  const select: { [key: string]: boolean } = {};
  if (columns.length > 0) {
    columns.forEach((column) => {
      select[column] = true;
    });
  }

  // 条件を取得
  let whereOption: { [key: string]: string } = {};
  if (options.where) whereOption = converterWhereOptions(options.where);

  // ソートオプションを準備
  const orderBy: { [key: string]: string } = {};
  if (options.order) orderBy[options.order.column] = options.order.direction;

  // レコードを取得
  // TODO: prisma[動的]でタイプエラーが起きるが、asOOOとかで行ける気がするのでいつか直す
  const records = await prismaFindMany(prisma, table, {
    select: columns.length > 0 ? select : undefined,
    where: options.where ? whereOption : undefined,
    take: options.filter || undefined,
    orderBy: options.order ? orderBy : undefined,
    include: options.include || undefined,
  });

  return records;
};
