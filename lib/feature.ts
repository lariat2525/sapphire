import {
  FormattedAppearance,
  FormattedTag,
  ResponseAppearance,
  ResponseArticleTag,
} from "@/features/articles/types/articles";

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
