import { useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articleListState } from "@/features/articles/state/articleList";
import { ResponseArticle } from "@/features/articles/types/articles";
import useSWR from "swr";
import { insertUrlWithQuery } from "@/utils/core";

const url = EndPoint.Read.ARTICLE_LIST;

const fetcher = async (urlWithQuery: string): Promise<ResponseArticle> => {
  const response = await fetch(urlWithQuery);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetArticleList = (query?: {
  [key: string]: string | boolean | number;
}) => {
  const setArticleList = useSetRecoilState(articleListState);

  // URLとクエリを結合したURLを生成
  const queryUrl = insertUrlWithQuery(url, query || {});

  const { data, error } = useSWR(queryUrl, fetcher);
  console.log(data);

  useEffect(() => {
    if (data) {
      setArticleList(data);
    }
  }, [data, setArticleList]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetArticleList;
