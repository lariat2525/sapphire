"use client";

import LineDotCenter from "@/components/elements/shapes/LineDotCenter";

/* TSX */
export default function TagList() {
  return (
    <>
      <div className="Labels p-4 pb-2 text-xl flex justify-center">
        タグ一覧
      </div>
      <LineDotCenter />
      <div className="Tags w-36 flex justify-end">
        <div className="Tag flex flex-col">
          <a href="" className="">
            ファンタジー
          </a>
          <a href="" className="">
            幽霊
          </a>
          <a href="" className="">
            妖怪
          </a>
          <a href="" className="">
            UMA
          </a>
          <a href="" className="">
            エイリアン
          </a>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
