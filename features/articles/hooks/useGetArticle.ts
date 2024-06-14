import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { insertUrlWithPath } from "@/utils/core";
import { EndPoint } from "@/constants/api";
import { articlesState } from "@/features/articles/state/article";
import useSWR from "swr";
import { Article } from "@/features/articles/types/articles";

const url = EndPoint.Read.ARTICLE_SINGLE;

// フェッチ関数
const fetcher = async (urlWithQuery: string): Promise<Article> => {
  const response = await fetch(urlWithQuery);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetArticle = () => {
  const { id } = useParams();
  const setArticles = useSetRecoilState(articlesState);

  const insertedUrl = insertUrlWithPath(url, {
    article_id: id as string,
  });

  console.log(id);

  const { data, error } = useSWR(insertedUrl, fetcher);

  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data, setArticles]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetArticle;
