"use client";

import WorkListLine from "@/components/elements/shapes/WorkListLine";

/* TSX */
export default function WorkList() {
  return (
    <div>
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
