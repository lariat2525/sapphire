import { articleList } from "./content";

// 指定された数 (num) だけ articleList を生成して配列で返す関数
export const addColumnArticleListLocal = (num: number) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    // 一意のIDを割り当てるために深いコピーを作成
    const newArticle = JSON.parse(JSON.stringify(articleList[0]));
    newArticle.id = i + 1;

    result.push(newArticle);
  }
  return result;
};
