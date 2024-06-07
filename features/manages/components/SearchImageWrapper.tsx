"use client";

import React, { useState, useEffect } from "react";
import useGetImageList from "../hooks/useGetImageList";
import SearchBox from "@/components/elements/SearchBox";

const SearchImageWrapper: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [canFetchImage, setCanFetchImage] = useState<boolean>(false);

  const { data } = useGetImageList(canFetchImage, { keyword });

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    setCanFetchImage(true); // 再度fetchを許可
  };

  useEffect(() => {
    if (canFetchImage) {
      setCanFetchImage(false); // fetchが完了したらリセット
    }
  }, [data]); // dataが更新されたらリセット

  return (
    <div>
      <SearchBox
        placeholder="画像を検索"
        onSearch={handleSearch}
        initialKeyword={keyword}
      />
    </div>
  );
};

export default SearchImageWrapper;
