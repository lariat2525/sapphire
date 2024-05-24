"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = { children: React.ReactNode; text?: string; size?: "xs" | "base" };

const DropMenuOption = ({ children, text, size = "base" }: Props) => {
  const buttonSizeStyle = size === "base" ? "min-h-10 h-2" : "min-h-6 h-1";

  return (
    <button
      className={`dropdown btn px-3 border-1 border-slate-400 text-nowrap ${buttonSizeStyle}`}
    >
      <div tabIndex={0} className={`text-${size} text-slate-700`}>
        <FontAwesomeIcon icon={faBars} /> {text}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1000] menu p-2 shadow rounded-box top-8 left-8 text-font-color bg-slate-100"
      >
        {children}
      </ul>
    </button>
  );
};

export default DropMenuOption;
