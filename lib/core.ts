import { getPrismaClient } from "./config";
import { converterWhereOptions, prismaFindMany } from "./helper";
import { TableOrderByType, TableType, WhereOptions } from "./types/db";

const prisma = getPrismaClient();

/**
 * 指定されたテーブルからレコードを取得します。
 *
 * @param table テーブルの種類
 * @param columns 取得するカラムの配列  default:[] カラム全選択
 * @param filter レコードのフィルター条件　default: 全取得
 * @param order レコードのソートオプション default: null
 * @returns レコードの配列
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
  });

  return records;
};
