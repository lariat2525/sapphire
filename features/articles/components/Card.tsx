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
      className="Cards h-52 box-border border-2 
            border-black rounded-lg flex"
    >
      <div
        className="Image const-card-image-size bg-secondary-color
flex justify-start"
      >
        <Image
          src={`/test/goblin.svg`}
          alt={`ゴブリンの画像`}
          width={1024}
          height={1024}
        />
      </div>
      <div className="Detail utl-w-90 pl-2">
        <div className="Tags mr-4 my-2 flex justify-start">
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
        <div className="Names">
          <div className="flex ">めっちゃ弱い</div>
          <div className="flex justify-start">
            <div className="EN text-4xl">GOBLIN</div>
            <div className="JP flex items-end">ゴブリン</div>
            <div className="Bottoms flex justify-start">
              <div
                className="Bottom ml-8 mt-4 mr-1 w-16 h-6 border-2 
        border-black flex justify-center rounded-xl"
              >
                <p className="mx-1">GO</p>
                <FontAwesomeIcon className="ml-2 pt-0.5" icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="Shape px-2">
            <DotLineList />
          </div>
        </div>
        <div className="Masterpiece flex">
          <div>
            <div
              className="mx-1 h-5 min-w-36 flex justify-center border-2 
        border-black rounded-xl text-sm"
            >
              #エルデンリング
            </div>
            <div
              className="mx-1 h-5 min-w-36 flex justify-center border-2 
      border-black rounded-xl text-sm"
            >
              #ドラゴンクエスト
            </div>
          </div>
          <div
            className="mx-1 h-5 min-w-36 flex justify-center border-2 
      border-black rounded-xl text-sm"
          >
            #ゲームオブスローンズ
          </div>
        </div>
        <div className="Manages h-8 flex justify-end items-end">
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
