import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { EndPoint } from "@/constants/api";
import { userState } from "@/features/manages/state/user";

const url = EndPoint.Read.USER;

const useGetUser = () => {
  const setUser = useSetRecoilState(userState);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setUser(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Fetching data failed:", error);
    }
  }, [setUser]);

  return fetchData;
};

export default useGetUser;
