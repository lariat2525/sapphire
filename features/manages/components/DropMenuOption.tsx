"use client";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  children: React.ReactNode;
  text?: string;
  styles?: { buttonStyle: string; iconStyle: string; ulStyle: string };
};

const DropMenuOption = ({ children, text = "Options", styles }: Props) => {
  return (
    <button
      className={`dropdown btn min-h-8 h-10 px-3 text-slate-600 rounded bg-white border-1 border-slate-500 text-nowrap hover:bg-slate-200 ${styles?.buttonStyle}`}
    >
      <div
        tabIndex={0}
        className={`flex gap-2 items-center text-xs ${styles?.iconStyle}`}
      >
        <p>{text}</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <ul
        className={`dropdown-content z-[1000] menu w-40 text-xs text-left shadow rounded top-10 right-0 text-slate-600 bg-white ${styles?.ulStyle}`}
      >
        {children}
      </ul>
    </button>
  );
};

export default DropMenuOption;
