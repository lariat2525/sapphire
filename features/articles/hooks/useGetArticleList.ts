// addColumnArticleListLocal
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articleListState } from "@/features/articles/state/articleList";
import { Article } from "@/features/articles/types/articles";
import useSWR from "swr";
import { insertUrlWithQuery } from "@/utils/core";

// 1.queryを取ってこれるようにする、console.logできるようになったらゴール
// 2.apiにqueryをのせる。
// 3.pagenationのcomponentをつくる。

const url = EndPoint.Read.ARTICLE_LIST;

const fetcher = async (urlWithQuery: string): Promise<Article[]> => {
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
