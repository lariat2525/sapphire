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
export const insertUrlWithPath = (
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
 * クエリオブジェクトをURLに埋め込む関数
 *
 * @param baseUrl - 基本のURL
 * @param query - クエリパラメータを含むオブジェクト
 * @returns クエリパラメータを埋め込んだURL文字列
 */
export const insertUrlWithQuery = (
  baseUrl: string,
  query: { [key: string]: string | number | boolean }
): string => {
  const queryString = Object.keys(query)
    .map((key) => {
      const value = query[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter((part) => part.length > 0)
    .join("&");

  return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${queryString}`;
};
