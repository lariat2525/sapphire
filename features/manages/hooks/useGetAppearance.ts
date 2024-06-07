import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import useSWR from "swr";

import { Appearance } from "../types/appearances";
import { appearanceState } from "../state/appearances";

const url = EndPoint.Read.APPEARANCE;

// フェッチ関数
const fetcher = async (query: string): Promise<Appearance[]> => {
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetAppearances = (canFetch?: boolean) => {
  const setAppearance = useSetRecoilState(appearanceState);
  const { data, error } = useSWR(canFetch ? url : null, fetcher);

  useEffect(() => {
    if (data) console.log(666);
    if (data) setAppearance(data);
  }, [data, setAppearance]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetAppearances;
