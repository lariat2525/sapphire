import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { replaceUrlPlaceholders } from "@/utils/core";
import { EndPoint } from "@/constants/api";
import { articlesState } from "@/features/articles/state/article";
import useSWR from "swr";
import { Article } from "../types/articles";

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

  const insertedUrl = replaceUrlPlaceholders(url, {
    article_id: id as string,
  });

  const { data, error } = useSWR(insertedUrl, fetcher);

  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data, setArticles]);

  console.log(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetArticle;
