import useSWR from "swr";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { imagesState } from "@/features/manages/state/images";
import { insertUrlWithQuery } from "@/utils/core";
import { Image } from "@/features/manages/types/images";

const url = EndPoint.Read.IMAGE_LIST;

// フェッチ関数
const fetcher = async (urlWithQuery: string): Promise<Image[]> => {
  const response = await fetch(urlWithQuery);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetImageList = (
  canFetch: boolean,
  query?: {
    [key: string]: string | boolean | number;
  }
) => {
  const setImageList = useSetRecoilState(imagesState);

  // URLとクエリを結合したURLを生成
  const queryUrl = insertUrlWithQuery(url, query || {});

  const { data, error } = useSWR(canFetch ? queryUrl : null, fetcher);

  useEffect(() => {
    if (data) setImageList(data);
  }, [data, setImageList]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetImageList;
