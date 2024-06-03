import {
  FormattedAppearance,
  FormattedTag,
  ResponseAppearance,
  ResponseArticleTag,
} from "@/features/articles/types/articles";
import { isJapanese } from "./helper";
import { Prisma } from "@prisma/client";

/**
 * タグ情報をフォーマット
 * @param tags タグ情報の配列
 * @returns フォーマットされたタグ情報の配列
 */
export const formatTags = (tags: ResponseArticleTag[]): FormattedTag[] => {
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
export const formatAppearances = (
  appearances: ResponseAppearance[]
): FormattedAppearance[] => {
  return appearances.map(({ appearances }) => ({
    ...appearances,
    created_at: new Date(appearances.created_at).toISOString(), // Date型をstring型に変換
  }));
};

/**
 * キーワードが日本語か英語かを判定し、適切なカラム名で部分一致検索条件を返す関数
 *
 * @param keyword - 検索キーワード
 * @param mode - 大文字小文字の区別を指定するモード ('insensitive' など)
 * @returns 検索条件オブジェクト。キーワードが日本語の場合は 'jp_name' カラム、英語の場合は 'name' カラムで部分一致検索を行う。
 *
 * この関数は、日本語の文字が含まれているかを判定し、適切なカラム ('name' または 'jp_name') を選択します。
 * 返されるオブジェクトは、Prisma の where 条件に適用可能な形式になっています。
 */
export const switchWhereJapanese = <T>(keyword: string, mode: string): T => {
  // キーワードが日本語を含むかどうかを判定して、検索対象のカラム名を設定
  const key = isJapanese(keyword) ? "jp_name" : "name";

  // 部分一致検索条件を返す
  return {
    [key]: {
      contains: keyword,
      mode: mode,
    },
  } as T;
};

/**
 * 指定されたフィルタ条件に基づいてソート条件を返す関数
 *
 * @param filter - ソート条件を指定する文字列 ("new", "popular" など)
 * @returns PrismaのorderBy句に適用可能なソート条件オブジェクト
 */
export const getOrderBy = <T>(filter: string): T => {
  switch (filter) {
    case "new":
      return { created_at: "desc" } as T; // 新しい順
    case "popular":
      return { preview: "desc" } as T; // 人気順
    default:
      return {} as T;
  }
};
