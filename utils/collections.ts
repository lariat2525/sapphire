/**
 * 配列から指定されたカラム名と値が合致するオブジェクトを検索する関数。
 * @param array - 検索対象となるオブジェクトの配列
 * @param columnName - 検索するカラム名
 * @param value - 検索する値
 * @returns 合致するオブジェクトが見つかった場合、そのオブジェクトを返す。見つからない場合はundefinedを返す。
 */
export const findObjectByColumnValue = <T>(
  array: T[],
  columnName: keyof T,
  value: any
) => {
  // array.findメソッドを使用して、指定されたカラム名と値が一致する最初のオブジェクトを返す。
  return array.find((obj) => obj[columnName] === value);
};
