import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articlesState } from "@/features/articles/state/article";

const APIUrl = EndPoint.Read.ARTICLE_SINGLE;

const useGetArticle = () => {
  const setArticles = useSetRecoilState(articlesState);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(APIUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setArticles(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Fetching data failed:", error);
    }
  }, [setArticles]); // 依存関係配列にurlとsetDataを追加

  return fetchData;
};

export default useGetArticle;
