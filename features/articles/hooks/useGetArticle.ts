import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Api } from "@/constants/api";
import { articlesState } from "@/features/articles/state/article";

const APIUrl = Api.Read.ARTICLE_SINGLE;
const useGetArticle = () => {
  const [articles, setArticles] = useRecoilState(articlesState);

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
