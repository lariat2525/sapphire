"use client";

import LineDotCenter from "@/components/elements/shapes/LineDotCenter";

/* TSX */
export default function TagList() {
  return (
    <>
      <div className="Label p-4 pb-0 text-xl flex justify-center">タグ一覧</div>
      <LineDotCenter />
      <div className="TagList flex">
        <div className="Tags w-36 flex justify-end">
          <div className="Tag mr-2 flex flex-col grid justify-items-end">
            <a href="" className="my-1 text-base">
              ファンタジー
            </a>
            <a href="" className="my-1 text-base">
              幽霊
            </a>
            <a href="" className="my-1 text-base">
              妖怪
            </a>
            <a href="" className="my-1 text-base">
              UMA
            </a>
            <a href="" className="my-1 text-base">
              エイリアン
            </a>
          </div>
        </div>

        <div className="Tags w-36 flex justify-end">
          <div className="Tag mr-4 flex flex-col grid justify-items-end">
            <a href="" className="my-1 text-base">
              ファンタジー
            </a>
            <a href="" className="my-1 text-base">
              幽霊
            </a>
            <a href="" className="my-1 text-base">
              妖怪
            </a>
            <a href="" className="my-1 text-base">
              UMA
            </a>
            <a href="" className="my-1 text-base">
              エイリアン
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
