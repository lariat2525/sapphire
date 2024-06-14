import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-main bg-opacity-80 bg-black p-4 border-b-2 z-10">
      <nav className="flex justify-start text-secondary-color">
        <div className="Titles flex">
          <img src="/test/AI-meme.svg" alt="image" />
          <div className="Title text-2xl mx-4 flex items-center font-zcoolKuaile">
            AI-meme
          </div>
        </div>
        <Link href="/" className="mx-4 flex items-center">
          ホーム
        </Link>
        <Link href="/articles" className="mx-4 flex items-center">
          記事
        </Link>
        <Link href="/tags" className="mx-4 flex items-center">
          カテゴリー
        </Link>
        <Link href="/rankings" className="mx-4 flex items-center">
          ランキング
        </Link>
      </nav>
    </header>
  );
};

export default Header;
