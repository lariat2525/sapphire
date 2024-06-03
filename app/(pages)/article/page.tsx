"use client";

import LineDotCenter from "@/components/elements/shapes/LineDotCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useGetArticle from "@/features/articles/hooks/useGetArticle";
import { useRecoilValue } from "recoil";
import { articlesState } from "@/features/articles/state/article";
import { useEffect } from "react";
import Card from "@/features/articles/components/Card";

export default function ArticleList() {
  const callGetArticle = useGetArticle();
  const articlesData = useRecoilValue(articlesState);

  useEffect(() => {
    callGetArticle();
  }, [callGetArticle]);

  console.log(articlesData);

  return (
    <div className="Content pt-24 flex justify-center z-0">
      <div className="Left w-2/3">
        <div className="Info bg-secondary-color h-screen">
          <div className="Forms h-16 flex justify-start bg-secondary-color border-b-2 border-black ">
            <div
              className="Search m-4 w-72 h-8 bg-tertiary-color border-2 
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
          <div className="Case m-4">
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
            <Card />
          </div>
        </div>
      </div>
      <div className="Right ml-4 w-1/3">
        <div className="Advertisement bg-white my-4 h-48">広告</div>
        <div className="Category bg-secondary-color mt-6 utl-size-h-550">
          <div className="Labels">
            <div className="Label p-2 ml-5 mt-0.5 text-2xl">
              <p>カテゴリー</p>
            </div>
            <div className="LineDotCenter flex">
              <LineDotCenter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
