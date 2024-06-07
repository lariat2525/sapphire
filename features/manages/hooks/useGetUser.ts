import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { userState } from "@/features/manages/state/user";
import useSWR from "swr";
import { User } from "@/features/manages/types/users";

const url = EndPoint.Read.USER;

// フェッチ関数
const fetcher = async (query: string): Promise<User[]> => {
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useGetUser = () => {
  const setUser = useSetRecoilState(userState);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUser;
