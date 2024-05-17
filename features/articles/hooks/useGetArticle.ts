import { useParams } from "next/navigation";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { replaceUrlPlaceholders } from "@/utils/core";
import { EndPoint } from "@/constants/api";
import { articlesState } from "@/features/articles/state/article";

const url = EndPoint.Read.ARTICLE_SINGLE;

const useGetArticle = () => {
  const { id } = useParams();
  const setArticles = useSetRecoilState(articlesState);

  const fetchData = useCallback(async () => {
    const insertedUrl = replaceUrlPlaceholders(url, {
      article_id: id as string,
    });
    try {
      const response = await fetch(insertedUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setArticles(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Fetching data failed:", error);
    }
  }, [id, setArticles]); // 依存関係配列にurlとsetDataを追加

  return fetchData;
};

export default useGetArticle;
