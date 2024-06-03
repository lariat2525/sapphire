/**
 * 本番環境かどうかを判定する関数
 * @returns 本番環境であればTrue
 */
export const isProduction = (): boolean => {
  return process.env.NEXT_PUBLIC_PRODUCTION === "true";
};

/**
 * 指定された文字列が日本語を含むかどうかを判定する関数
 *
 * @param text - 判定する文字列
 * @returns 日本語の文字が含まれている場合はtrue、それ以外の場合はfalseを返す
 *
 * この関数は、Unicodeの範囲を使用して日本語の文字が含まれているかをチェックします。
 * チェックする日本語の文字範囲は以下の通りです:
 * - \u3000-\u303F: 句読点、括弧などの日本語記号
 * - \u3040-\u309F: ひらがな
 * - \u30A0-\u30FF: カタカナ
 * - \uFF00-\uFFEF: 半角カナ、全角記号
 * - \u4E00-\u9FAF: 一般的な漢字
 * - \u3400-\u4DBF: 拡張Aの漢字
 */
export const isJapanese = (text: string): boolean => {
  return /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\u3400-\u4DBF]/.test(
    text
  );
};
