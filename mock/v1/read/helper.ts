/**
 * 指定された数 (num) だけ Map を生成して新しい配列として返す関数
 *
 * @param map - 元となるリストの配列。配列の最初の要素をコピーして新しいリストを作成します。
 * @param num - 生成するリストの数。
 * @returns 生成されたリストを含む新しい配列。
 */
export const addColumnMapLocal = <T extends { id: number }>(
  map: T[],
  num: number
): T[] => {
  const newList: T[] = [];

  for (let i = 0; i < num; i++) {
    // 一意のIDを割り当てるために深いコピーを作成
    const newMap = JSON.parse(JSON.stringify(map[0]));
    newMap.id = i + 1; // 新しい配列として1から始める

    newList.push(newMap);
  }

  return newList;
};
