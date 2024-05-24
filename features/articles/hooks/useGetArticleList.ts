// addColumnArticleListLocal
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articleListState } from "@/features/articles/state/articleList";

const url = EndPoint.Read.ARTICLE_LIST;

const useGetArticleList = () => {
  const setArticleList = useSetRecoilState(articleListState);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setArticleList(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Fetching data failed:", error);
    }
  }, [setArticleList]); // 依存関係配列にurlとsetDataを追加

  return fetchData;
};

export default useGetArticleList;
