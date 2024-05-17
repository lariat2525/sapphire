import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-main bg-opacity-50 bg-black p-4 border-b-2 z-0">
      <nav className="flex justify-around text-secondary-color">
        <div className="Titles flex">
          <img src="/test/AI-meme.svg" alt="image" />
          <div className="Title text-2xl flex items-center font-raleway">
            AI-meme
          </div>
        </div>
        <Link href="/" className="flex items-center">
          Home
        </Link>
        <Link href="/articles" className="flex items-center">
          Article
        </Link>
        <Link href="/tags" className="flex items-center">
          Tags
        </Link>
        <Link href="/appearance" className="flex items-center">
          Appearance
        </Link>
        <Link href="/rankings" className="flex items-center">
          Rankings
        </Link>
      </nav>
    </header>
  );
};

export default Header;
