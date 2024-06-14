import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articleListState } from "@/features/articles/state/articleList";
import { ResponseArticle } from "../types/articles";

import useSWR from "swr";

const url = EndPoint.Read.ARTICLE_LIST;

const fetcher = async (urlWithQuery: string): Promise<ResponseArticle> => {
  const response = await fetch(urlWithQuery);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetArticleList = () => {
  const setArticleList = useSetRecoilState(articleListState);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      setArticleList(data.list);
    }
  }, [data, setArticleList]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetArticleList;
