"use client";

import Image from "next/image";
import LineDotCenter from "@/components/elements/shapes/LineDotCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import useGetArticle from "@/features/articles/hooks/useGetArticle";
import { useRecoilValue } from "recoil";
import { articlesState } from "@/features/articles/state/article";
import { useEffect } from "react";
import DotLineList from "@/components/elements/shapes/DotLineList";

export default function ArticleList() {
  const callGetArticle = useGetArticle();
  const articlesData = useRecoilValue(articlesState);

  useEffect(() => {
    callGetArticle();
  }, [callGetArticle]);

  console.log(articlesData);

  return (
    <div className="Content pt-24 flex justify-center z-0">
      <div className="Left utl-size-w-600">
        <div className="Info bg-secondary-color h-screen">
          <div className="Forms h-16 flex justify-start bg-secondary-color border-b-2 border-black ">
            <div
              className="Form m-4 w-72 h-8 bg-tertiary-color border-2 
            border-tertiary-color flex rounded-xl"
            >
              <FontAwesomeIcon
                className="m-1 text-white"
                icon={faMagnifyingGlass}
              />
              <p className="ml-1 flex item-center text-white">aaaaa</p>
            </div>
            <div className="Pagination flex place-items-end">
              <div className="PageNumber ml-20 mr-1 text-2xl">2/30</div>
              <div className="PageNumber mx-1">ページ目</div>
            </div>
          </div>
          <div className="Case">
            <div className="Select h-12 flex justify-end">
              <a
                href=""
                className="New my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs"
              >
                新しい投稿順
              </a>
              <a
                href=""
                className="Old  my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs"
              >
                古い投稿順
              </a>
              <a
                href=""
                className="Popular my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs"
              >
                人気順
              </a>
            </div>
            <div
              className="Cards m-4 h-52 w-11/12 border-2 
            border-black rounded-lg flex"
            >
              <div
                className="Image bg-secondary-color w-48 h-48
              flex justify-start z-10"
              >
                <Image
                  className="z-0"
                  src={`/test${articlesData.images[0]?.path}`}
                  alt={`${articlesData.images[0]?.alt}の画像`}
                  width={512}
                  height={512}
                />
              </div>
              <div className="Detail">
                <div className="Tags mr-4 my-2 flex justify-start">
                  <a
                    href=""
                    className="Tag min-w-16 h-6 bg-tertiary-color text-white px-1 utl-flex-center border-2 rounded-full"
                  >
                    <div className="h-2 w-2 mr-1.5 rounded-full bg-white"></div>
                    <div className="mx-2">ファンタジー</div>
                  </a>
                  <a
                    href=""
                    className="Tag min-w-16 h-6 bg-tertiary-color text-white px-1 utl-flex-center border-2 rounded-full"
                  >
                    <div className="h-2 w-2 mr-1.5 rounded-full bg-white" />
                    <div className="">ファンタジー</div>
                  </a>
                </div>
                <div className="Names">
                  <div className="flex ">めっちゃ弱い</div>
                  <div className="flex justify-start">
                    <div className="EN text-4xl">GOBLIN</div>
                    <div className="JP flex items-end">ゴブリン</div>
                    <div
                      className="Bottom ml-3 mt-4 mr-1 w-16 h-6 border-2 
                      border-black flex justify-start rounded-xl"
                    >
                      <p className="mx-1">GO</p>
                      <FontAwesomeIcon
                        className="ml-2 pt-0.5"
                        icon={faArrowRight}
                      />
                    </div>
                  </div>
                  <div className="Shape">
                    <DotLineList />
                  </div>
                </div>
                <div className="Masterpiece flex">
                  <div>
                    <div
                      className="mx-2 h-5 max-w-40 border-2 
                      border-black rounded-xl text-sm"
                    >
                      #エルデンリング
                    </div>
                    <div
                      className="mx-2 h-5 max-w-40 border-2 
                    border-black rounded-xl text-sm"
                    >
                      #ドラゴンクエスト
                    </div>
                  </div>
                  <div
                    className="mx-2 h-5 max-w-40 border-2 
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
          </div>
        </div>
      </div>
      <div className="Right ml-6">
        <div className="Advertisement bg-white my-4 h-48">広告</div>
        <div className="Category bg-secondary-color mt-6 utl-size-h-550">
          <div className="Labels">
            <div className="Label p-2 ml-5 mt-0.5 text-2xl">
              <p>カテゴリー</p>
            </div>
            <div className="LineDotCenter flex">
              <LineDotCenter></LineDotCenter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
