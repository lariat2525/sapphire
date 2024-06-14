import { EndPoint } from "@/constants/api";
import useSWRMutation from "swr/mutation";

const url = EndPoint.Write.META_ARTICLE;

// フェッチ関数
const fetcher = async (
  apiUrl: string,
  { arg: params }: { arg: any }
): Promise<any> => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const usePostMetaArticles = () => {
  const { data, error, isMutating, trigger } = useSWRMutation(url, fetcher);

  const triggerMetaArticles = async (fields: any) => {
    await trigger(fields);
  };

  return {
    triggerMetaArticles,
  };
};

export default usePostMetaArticles;
