import { TableType, WhereOptions } from "./types/db";

/**
 * 本番環境かどうかを判定する関数
 * @returns 本番環境であればTrue
 */
export const isProduction = (): boolean => {
  return process.env.NEXT_PUBLIC_PRODUCTION === "true";
};

/**
 * レスポンスデータを取得する関数
 * @param response 本番環境の場合に返すレスポンスデータ
 * @param mock 本番環境でない場合に返すMockデータ
 * @returns レスポンスデータ
 */
export const getResponseData = (response: any, mock: any) => {
  // 本番環境かどうかを判定
  if (isProduction()) {
    // 本番環境の場合はテンプレートデータとステータスコード200を返す
    return { data: { response }, options: { status: 200 } };
  } else {
    // 本番環境でない場合は出演データを返す
    return { data: mock };
  }
};

/**
 * プリズマのfindManyメソッドをラップして、指定されたテーブルに対して検索を行います。
 *
 * @param prisma - Prismaクライアントインスタンス
 * @param table - 検索対象のテーブル名
 * @param options - 検索オプション
 * @param options.select - 取得するフィールドの指定
 * @param options.where - 取得する条件の指定
 * @param options.take - 取得するレコード数の制限
 * @param options.orderBy - ソート順の指定
 * @returns 検索結果のPromise
 * @throws Unknown table: ${table} - 指定されたテーブルが存在しない場合にエラーをスローします
 */
export const prismaFindMany = async (
  prisma: any,
  table: TableType,
  options: {
    select: { [key: string]: boolean } | undefined;
    take: number | undefined;
    where: WhereOptions | undefined;
    orderBy: { [key: string]: string } | undefined;
    include: any;
  }
) => {
  console.log(table);

  switch (table) {
    case "users":
      return prisma.users.findMany(options);
    case "templates":
      return prisma.templates.findMany(options);
    case "articles":
      return prisma.articles.findMany(options);
    case "monsters":
      return prisma.monsters.findMany(options);
    case "tags":
      return prisma.tags.findMany(options);
    // 他のテーブルに対するcaseをここに追加
    default:
      throw new Error(`Unknown table: ${table}`);
  }
};

/**
 * WhereOptionsをPrismaのwhereオブジェクトに変換します。
 *
 * @param whereOptions - 変換するWhereOptionsオブジェクト
 * @returns Prismaのwhereオブジェクト
 */
export const converterWhereOptions = (whereOptions: WhereOptions) => {
  // Prismaのwhereオブジェクトを初期化
  let where: any = {};

  // 等価比較
  if (whereOptions.equal) {
    where.AND = Object.entries(whereOptions.equal).map(([field, value]) => ({
      [field]: value,
    }));
  }

  // 非等価比較
  if (whereOptions.notEqual) {
    where.NOT = Object.entries(whereOptions.notEqual).map(([field, value]) => ({
      [field]: value,
    }));
  }

  // 部分文字列検索
  if (whereOptions.contains) {
    where.AND = Object.entries(whereOptions.contains).map(([field, value]) => ({
      [field]: { contains: value },
    }));
  }

  // notNullを処理
  if (whereOptions.notNull) {
    where.NOT = whereOptions.notNull.map((field) => ({ [field]: null }));
  }

  // 変換したwhereオブジェクトを返す
  return where;
};
