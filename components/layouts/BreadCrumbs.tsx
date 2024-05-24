"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { globalState } from "@/state/global";

const BreadCrumbs: React.FC = () => {
  const { path } = useRecoilValue(globalState);
  const pathParts = path.split("/").filter(Boolean);
  const partsLength = pathParts.length;

  let href = "";

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {partsLength > 1 &&
          pathParts.map((pathPart, index) => {
            // pathを再代入して、ネストするURLを作成
            href = href + "/" + pathPart;
            return (
              <li key={index}>
                {/* 現在のページはURLにしない */}
                {partsLength === index + 1 ? (
                  <p>{pathPart}</p>
                ) : (
                  <a href={href}>{pathPart}</a>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
