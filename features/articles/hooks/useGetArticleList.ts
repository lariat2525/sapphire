// addColumnArticleListLocal
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { articleListState } from "@/features/articles/state/articleList";
import { Article } from "../types/articles";
import { useParams } from "next/navigation";
import { replaceUrlPlaceholders } from "@/utils/core";
import useSWR from "swr";
import { articlesState } from "../state/article";

// 1.useSWR化する ※typescriptのエラーが出る　困ったらany
// 2.検索のところをつくって、ボタンを作ってonClickをつくる。
// 3.apiに送るデータの準備
// 4.asyncで非同期処理でapiをたたく　await使う
// 5.console.logで検索対象のログを表示をする

const url = EndPoint.Read.ARTICLE_LIST;

const fetcher = async (urlWithQuery: string): Promise<Article[]> => {
  const response = await fetch(urlWithQuery);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetArticleList = () => {
  // const { id } = useParams();
  const setArticleList = useSetRecoilState(articleListState);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      setArticleList(data);
    }
  }, [data, setArticleList]);

  console.log(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetArticleList;
