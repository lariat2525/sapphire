"use client";

import React, { useState, useEffect } from "react";
import useGetImageList from "../hooks/useGetImageList";
import SearchBox from "@/components/elements/SearchBox";

const SearchImageWrapper: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [canFetch, setCanFetch] = useState<boolean>(false);

  const { data } = useGetImageList(canFetch, { keyword });

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    setCanFetch(true); // 再度fetchを許可
  };

  useEffect(() => {
    if (canFetch) {
      setCanFetch(false); // fetchが完了したらリセット
    }
  }, [data]); // dataが更新されたらリセット

  return (
    <div>
      <SearchBox
        placeholder="画像を検索"
        onSearch={handleSearch}
        initialKeyword={keyword}
      />
      {data && (
        <ul>
          {data.map((image: any) => (
            <li key={image.id}>{image.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchImageWrapper;
