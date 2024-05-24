type Params = { [key: string]: string | number };

/**
 * URLテンプレート内のプレースホルダーを、paramsオブジェクトの対応する値で置き換えます。
 *
 * この関数は、プレースホルダーが `{placeholder}` の形式で含まれているURLテンプレートを受け取り、
 * それぞれのプレースホルダーを提供されたparamsオブジェクトの対応する値で置き換えます。
 *
 * @param urlTemplate - プレースホルダーが `{placeholder}` の形式で含まれているURLテンプレート。
 * @param params - キーがプレースホルダー名に対応し、値がプレースホルダーを置き換える値となる
 *                 キーと値のペアを含むオブジェクト。
 * @returns paramsオブジェクトの対応する値で全てのプレースホルダーが置き換えられたURL。
 *
 */
export const replaceUrlPlaceholders = (
  urlTemplate: string,
  params: Params
): string => {
  let url = urlTemplate;
  for (const [key, value] of Object.entries(params)) {
    const placeholder = `{${key}}`;
    url = url.replace(placeholder, encodeURIComponent(value.toString()));
  }
  return url;
};

/**
 * 最初の一文字だけを大文字にし、残りは小文字のままにする関数
 * @param {string} str - 入力文字列
 * @returns {string} - 変換後の文字列
 */
export const toUpperFirstLetter = (str: string): string => {
  if (!str) {
    return ""; // 空文字の場合はそのまま空文字を返す
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * 文字列を指定かデフォルト14文字に制限し、それを超える場合には「...」を付ける関数
 * @param {string} str - 入力文字列
 * @returns {string} - 変換後の文字列
 */
export const truncateString = (str: string, strSize: number = 14): string => {
  const maxLength = strSize;
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
};

/**
 * ISO 8601形式の日付文字列をカスタムフォーマットに変換するアロー関数
 * @param {string} isoString - ISO 8601形式の日付文字列
 * @returns {string} - フォーマットされた日付文字列
 */
export const formatCustomDate = (isoString: string): string => {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // 日付をフォーマット
  const formattedDate = new Intl.DateTimeFormat("ja-JP", options).format(date);

  // フォーマットを修正
  return formattedDate.replace(/\//g, "/").replace(",", "");
};
