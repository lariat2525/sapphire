import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-main p-4">
      <nav className="flex justify-around text-secondary-color">
        <Link href="/">Home</Link>
        <Link href="/articles">Article</Link>
        <Link href="/tags">Tags</Link>
        <Link href="/appearance">Appearance</Link>
        <Link href="/rankings">Rankings</Link>
      </nav>
    </header>
  );
};

export default Header;
