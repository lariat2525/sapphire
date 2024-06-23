"use client";

import { getClientQueryParams } from "@/utils/core";
import { useSearchParams } from "next/navigation";

import { articleListState } from "@/features/articles/state/articleList";
import { useRecoilValue } from "recoil";

const queries: string[] = ["page", "pageSize", "search", "filter"];

const disableStyle = "opacity-50 pointer-events-none";

const multiDisableStyle = "opacity-50 pointer-events-none";

export default function Pagination() {
  const searchParams = useSearchParams();
  const clientParams: { [key: string]: string } = getClientQueryParams(
    searchParams,
    queries
  );
  const { totalCount } = useRecoilValue(articleListState);

  const pageCount = Math.ceil(totalCount / Number(clientParams.pageSize));

  const clientPageNum = Number(clientParams.page);

  const createElement = () => {
    if (totalCount < 9) {
      return Array.from({ length: pageCount }).map((_, index) => (
        <div key={index} className="join shadow shadow-gray-300">
          <a
            href={`/article?pageSize=${clientParams.pageSize}&page=${
              index + 1
            }`}
            className={`join-item btn btn-xs border border-black bg-white btn-active ${
              clientPageNum === index + 1 && disableStyle
            }`}
          >
            {index + 1}
          </a>
        </div>
      ));
    } else {
      const canGoPage = (pageNum: number) => {
        if (!pageNum) return false;
        if (pageNum < 2) return false;
        if (pageNum >= totalCount) return false;
        return true;
      };

      return (
        <div className="MultiPagination join">
          <a
            href={`/article?pageSize=${clientParams.pageSize}&page=${
              clientPageNum - 1
            }`}
            className={`JoinItem btn ${
              canGoPage(clientPageNum - 1) || multiDisableStyle
            }`}
          >
            «
          </a>
          <span className="JoinItem btn">
            {clientParams.page} / {totalCount}
          </span>
          <a
            href={`/article?pageSize=${clientParams.pageSize}&page=${
              clientPageNum + 1
            }`}
            className={`JoinItem btn ${
              canGoPage(clientPageNum + 1) || multiDisableStyle
            }`}
          >
            »
          </a>
        </div>
      );
    }
  };

  return <div className="flex justify-center">{createElement()}</div>;
}
