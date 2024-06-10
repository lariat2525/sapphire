"use client";

import Image from "next/image";
import DotLineList from "@/components/elements/shapes/DotLineList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedAppearance, FormattedTag } from "../types/articles";

/// TODO: childrenのtype
type Props = {
  fields: {
    id: string;
    imagePath: string;
    tags: FormattedTag[];
    Label: string;
    name: string;
    jpName: string;
    appearances: FormattedAppearance[];
    postedAt: string;
    preview: string;
    author: string;
  };
};

/* TSX */
export default function Card({ fields }: Props) {
  console.log(fields);

  return (
    <div
      className="Cards mb-6 h-56 box-border border-2 
            border-black rounded-lg flex shadow-md shadow-gray-400"
    >
      <div className="Image const-card-image-size">
        <Image
          src={`/test/goblin.svg`}
          alt={`ゴブリンの画像`}
          width={1024}
          height={1024}
        />
      </div>
      <div className="Detail utl-w-120 pl-2">
        <div className="FileNumber mr-6 text-xs flex justify-end text-neutral-color">
          FILE :0001
        </div>
        <div className="Tags mr-4 mb-1 pb-1 flex justify-start">
          <a
            href=""
            className="Tag min-w-24 h-6 mx-2 px-1 utl-flex-center border-2 border-tertiary-color  rounded-full"
          >
            <div className="h-2 w-2 mr-1.5 rounded-full bg-tertiary-color" />
            <div className="mx-2 text-xs">ファンタジー</div>
          </a>
          <a
            href=""
            className="Tag min-w-24 h-6 px-1 utl-flex-center border-2 border-tertiary-color  rounded-full"
          >
            <div className="h-2 w-2 mr-1.5 rounded-full bg-tertiary-color" />
            <div className="mx-2 text-xs">魔物</div>
          </a>
        </div>
        <div className="Names ml-2">
          <div className="SubTitle text-base font-semibold flex">
            めっちゃ弱い
          </div>
          <div className="Name flex">
            <div className="EN text-5xl font-semibold mr-2 font-overlock font-bold">
              <p>GOBLIN</p>
            </div>
            <div className="JP text-base font-semibold flex items-end">
              <p>ゴブリン</p>
            </div>
            <div className="Bottoms flex justify-end items-end">
              <div
                className="Bottom ml-24 mt-3 mr-1 w-16 h-6 bg-accent-color border-2 
        border-accent-color flex justify-center rounded-xl shadow-md shadow-gray-400"
              >
                <p className="inline-block text-lg font-semibold flex items-center">
                  GO
                </p>
                <FontAwesomeIcon className="ml-2 pt-0.5" icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div className="Shape px-2">
          <DotLineList />
        </div>
        <div className="Appearances flex">
          <div>
            <div
              className="Appearance m-1 h-5 min-w-24 flex justify-center  border-2 
        border-sub-color rounded-xl"
            >
              <p className="mx-2 h-5 flex justify-center text-xs">
                #エルデンリング
              </p>
            </div>
            <div
              className="Appearance m-1 h-5 min-w-24 flex justify-center  border-2 
      border-sub-color rounded-xl"
            >
              <p className="mx-2 flex justify-center text-xs">
                #ドラゴンクエスト
              </p>
            </div>
          </div>
          <div
            className="Appearance m-1 h-5 min-w-24 flex justify-center  border-2 
      border-sub-color rounded-xl"
          >
            <p className="mx-2 h-5 flex justify-center text-xs">
              #ゲームオブスローンズ
            </p>
          </div>
        </div>
        <div className="Manages h-5 mr-5 flex justify-end items-end">
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            投稿時間：2022/07/04
          </p>
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            視聴数：1,200
          </p>
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            著者：ura shoe
          </p>
        </div>
      </div>
    </div>
  );
}
