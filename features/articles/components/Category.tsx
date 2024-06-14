"use client";

import LineDotCenter from "@/components/elements/shapes/LineDotCenter";
import WorkListLine from "@/components/elements/shapes/WorkListLine";

/* TSX */
export default function Category() {
  return (
    <div className="Category bg-secondary-color mt-6 pb-8 min-h-96">
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
      <div className="Label p-4 pb-0 text-xl flex justify-center">作品一覧</div>
      <WorkListLine />
      <div className="workList mt-2 mr-6 flex justify-end">
        <div className="Tags flex">
          <div className="Tag mr-2 flex flex-col grid justify-items-end">
            <a href="" className="my-1 text-base">
              ゲームオブスローンズ
            </a>
            <a href="" className="my-1 text-base">
              転生したらスライムだった件
            </a>
            <a href="" className="my-1 text-base">
              SEKIRO
            </a>
            <a href="" className="my-1 text-base">
              エヴァンゲリオン
            </a>
            <a href="" className="my-1 text-base">
              ポケットモンスター
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
