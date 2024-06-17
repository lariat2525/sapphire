"use client";

import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import { getClientQueryParams } from "@/utils/core";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import PaginationButton from "./PaginationButton";

const queries = ["page", "pageSize", "search", "filter"];

export default function Pagination() {
  const clientParams = getClientQueryParams(useSearchParams(), queries);
  const { data } = useGetArticleList(clientParams);

  const [exceedMaxDisplay, setExceedMaxDisplay] = useState(false);

  useEffect(() => {
    if (data?.list) {
      const maxDisplayCount = 8;
      let displayCount = 0;

      for (let i = 0; i < data.list.length; i++) {
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

  if (exceedMaxDisplay) {
    return (
      <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn">
          8/
          {data?.totalCount ? Math.floor(data.totalCount / 8) : 0}
        </button>
        <button className="join-item btn">»</button>
      </div>
    );
  }

  return (
    <div>
      {data?.list.map((items, index) => {
        // インデックスが8の倍数のときのみPaginationを表示する条件を追加
        if (index % 8 === 0) {
          return (
            <PaginationButton
              key={items.id}
              field={{
                id: `${index / 8 + 1}`, // 8の倍数ごとにインクリメントして表示
              }}
            />
          );
        }
        return null; // それ以外の場合はnullを返す
      })}
    </div>
  );
}
