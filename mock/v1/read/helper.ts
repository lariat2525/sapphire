/**
 * 指定された数 (num) だけ Map を生成して元の配列に追加する関数
 *
 * @param map - 元となるリストの配列。配列の最初の要素をコピーして新しいリストを作成します。
 * @param num - 生成するリストの数。
 * @returns 生成されたリストを追加した元の配列。
 */
export const addColumnMapLocal = <T extends { id: number }>(
  map: T[],
  num: number
): T[] => {
  const originalLength = map.length;
  for (let i = 0; i < num; i++) {
    // 一意のIDを割り当てるために深いコピーを作成
    const newMap = JSON.parse(JSON.stringify(map[0]));
    newMap.id = originalLength + i + 1;

    map.push(newMap);
  }
  return map;
};
