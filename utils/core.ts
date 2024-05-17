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
