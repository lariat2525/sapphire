"use client";

import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import { getClientQueryParams } from "@/utils/core";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import PaginationButton from "./PaginationButton";

const queries: string[] = ["page", "pageSize", "search", "filter"];

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientParams: { [key: string]: string } = getClientQueryParams(
    searchParams,
    queries
  );
  const { data } = useGetArticleList(clientParams);

  const [exceedMaxDisplay, setExceedMaxDisplay] = useState(false);

  const clientPageSize = Number(clientParams?.pageSize) || 0;

  console.log(data);

  useEffect(() => {
    if (data?.list) {
      const maxDisplayCount = 8;
      let displayCount = 0;

      for (let i = 0; i < (data?.totalCount ?? 0); i++) {
        if (displayCount >= maxDisplayCount) {
          setExceedMaxDisplay(true);
          return;
        }
        if (i % 8 === 0) {
          displayCount++;
        }
      }
      setExceedMaxDisplay(false); // リストが更新された場合にリセット
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    router.push(`?${newParams.toString()}`);
  };

  if (exceedMaxDisplay) {
    const currentPage = Number(clientParams?.page) || 1;
    const totalPages =
      clientPageSize > 0 && data?.totalCount !== undefined
        ? Math.ceil(data.totalCount / clientPageSize)
        : 1;

    return (
      <div className="join">
        <button
          className="JoinItem btn"
          onClick={() => handlePageChange(currentPage - 1)} // onClickイベントの追加
          disabled={currentPage <= 1}
        >
          «
        </button>
        <span className="JoinItem btn">
          {currentPage} / {totalPages}
        </span>
        <button
          className="JoinItem btn"
          onClick={() => handlePageChange(currentPage + 1)} // onClickイベントの追加
          disabled={currentPage >= totalPages}
        >
          »
        </button>
      </div>
    );
  }

  return (
    <div>
      {data?.list.map((items, index) => {
        if (clientPageSize > 0 && index % clientPageSize === 0) {
          return (
            <PaginationButton
              key={items.id}
              field={{
                id: `${index / clientPageSize + 1}`,
              }}
            />
          );
        }
        return null; // それ以外の場合はnullを返す
      })}
    </div>
  );
}
