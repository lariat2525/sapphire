"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchBoxProps = {
  placeholder?: string;
  onSearch: (keyword: string) => void;
  initialKeyword?: string;
  boxTailStyle?: string;
  typingTailStyle?: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "検索(部分一致)",
  onSearch,
  initialKeyword = "",
  typingTailStyle = "border-b-2 border-manage-tertiary-color",
  boxTailStyle = "",
}) => {
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsTyping(false); // 入力確定
      onSearch(keyword); // 検索実行
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    setIsTyping(true); // 入力中
  };

  const handleBlur = () => {
    setIsTyping(false); // フォーカスが外れた時に入力確定
  };

  return (
    <label
      className={`input input-bordered flex items-center gap-2 ${boxTailStyle}`}
    >
      <input
        type="text"
        className={`grow ${isTyping ? typingTailStyle : ""}`}
        placeholder={placeholder}
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onBlur={handleBlur}
        onFocus={() => setIsTyping(true)} // フォーカスされた時に入力中
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </label>
  );
};

export default SearchBox;
