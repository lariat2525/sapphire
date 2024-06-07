"use client";

import Image from "next/image";
import DotLineList from "@/components/elements/shapes/DotLineList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: childrenのtype

/* TSX */
export default function Card() {
  return (
    <div
      className="Cards mb-6 h-52 box-border border-2 
            border-black rounded-lg flex shadow-md shadow-gray-400"
    >
      <Image
        src={`/test/goblin.svg`}
        alt={`ゴブリンの画像`}
        width={1024}
        height={1024}
      />
      <div className="Detail utl-w-90 pl-2">
        <div className="FileNumber mr-6 text-xs flex justify-end text-neutral-color">
          FILE :0001
        </div>
        <div className="Tags mr-4 mb-1 flex justify-start">
          <a
            href=""
            className="Tag min-w-16 h-6 bg-tertiary-color text-white px-1 utl-flex-center border-2 rounded-full"
          >
            <div className="h-2 w-2 mr-1.5 rounded-full bg-white" />
            <div className="mx-2 text-sm">ファンタジー</div>
          </a>
          <a
            href=""
            className="Tag min-w-16 h-6 bg-tertiary-color text-white px-1 utl-flex-center border-2 rounded-full"
          >
            <div className="h-2 w-2 mr-1.5 rounded-full bg-white" />
            <div className="mx-2 text-sm">ファンタジー</div>
          </a>
        </div>
        <div className="Names ml-2">
          <div className="text-base flex">めっちゃ弱い</div>
          <div className="Name flex">
            <div className="EN text-4xl mr-2 font-overlock font-bold">
              GOBLIN
            </div>
            <div className="JP text-base flex items-end">ゴブリン</div>
            <div className="Bottoms flex justify-end">
              <div
                className="Bottom ml-14 mt-3 mr-1 w-16 h-6 bg-accent-color border-2 
        border-black flex justify-center rounded-xl shadow-md shadow-gray-400"
              >
                <p className="inline-block text-lg flex items-center ">GO</p>
                <FontAwesomeIcon className="ml-2 pt-0.5" icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="Shape px-2">
          <DotLineList />
        </div>
        <div className="Masterpiece flex">
          <div>
            <div
              className="m-1 h-5 min-w-24 flex justify-center bg-sub-color border-2 
        border-sub-color rounded-xl"
            >
              <p className="mx-2 h-5 flex justify-center text-xs">
                #エルデンリング
              </p>
            </div>
            <div
              className="m-1 h-5 min-w-24 flex justify-center bg-sub-color border-2 
      border-sub-color rounded-xl"
            >
              <p className="mx-2 h-5 flex justify-center text-xs">
                #ドラゴンクエスト
              </p>
            </div>
          </div>
          <div
            className="m-1 h-5 min-w-24 flex justify-center bg-sub-color border-2 
      border-sub-color rounded-xl"
          >
            <p className="mx-2 h-5 flex justify-center text-xs">
              #ゲームオブスローンズ
            </p>
          </div>
        </div>
        <div className="Manages h-5 flex justify-center items-end">
          <p className="Manages mx-1 text-xs text-neutral-color">
            投稿時間：2022/07/04
          </p>
          <p className="Manages mx-1 text-xs text-neutral-color">
            視聴数：1,200
          </p>
          <p className="Manages mx-1 text-xs text-neutral-color">
            著者：ura shoe
          </p>
        </div>
      </div>
    </div>
  );
}
