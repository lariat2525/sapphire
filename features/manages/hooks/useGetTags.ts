import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import useSWR from "swr";
import { tagState } from "../state/tags";
import { Tag } from "../types/tags";

const url = EndPoint.Read.TAG;

// フェッチ関数
const fetcher = async (query: string): Promise<Tag[]> => {
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetTags = (canFetch?: boolean) => {
  const setTags = useSetRecoilState(tagState);

  const { data, error } = useSWR(canFetch ? url : null, fetcher);

  useEffect(() => {
    if (data) setTags(data);
  }, [data, setTags]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetTags;
