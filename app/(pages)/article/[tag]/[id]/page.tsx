"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Tag from "@/components/elements/Tag";
import Profiles from "@/features/articles/components/Profiles";
import RadarCharts from "@/features/articles/components/RadarCharts";
import SentenceTemplate from "@/features/articles/components/SentenceTemplate";
import useGetArticle from "@/features/articles/hooks/useGetArticle";
import { articlesState } from "@/features/articles/state/article";
import TagList from "@/features/articles/components/TagList";
import WorkList from "@/features/articles/components/WorkList";

export default function Article() {
  const articlesData = useRecoilValue(articlesState);
  useGetArticle();

  console.log(articlesData);

  return (
    <div className="Content pt-24 flex justify-center z-0">
      <div className="Left mx-4 w-2/3">
        <div className="Info">
          <div className="Image bg-secondary-color">
            <Image
              src={`/test${articlesData.images[0]?.path}`}
              alt={`${articlesData.images[0]?.alt}の画像`}
              width={1024}
              height={1024}
            />
          </div>
          <div className="Detail pt-2 p-4 pb-10 bg-secondary-color">
            <div className="Profile m-4">
              <div className="Names">
                <div className="Name flex justify-center">
                  <div className="EN text-6xl">
                    <p className="font-overlock font-bold">
                      {articlesData.name.toUpperCase()}
                    </p>
                  </div>
                  <div className="JP text-2xl ml-2 flex items-end">
                    <p className="inline-block">{articlesData.jp_name}</p>
                  </div>
                </div>

                <div className="Tags text-sm flex justify-end">
                  {articlesData.tags?.map(({ name, jp_name }, index) => {
                    return (
                      <Tag key={index} href={`/article/${name}`}>
                        {jp_name}
                      </Tag>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="Root m-4">
              <SentenceTemplate>
                {articlesData.monsters?.trait_text}
              </SentenceTemplate>
            </div>
            <div className="Root m-4">
              <SentenceTemplate title="由来">
                {articlesData.monsters?.root_text}
              </SentenceTemplate>
            </div>
            <div className="Root m-4">
              <SentenceTemplate title="余談">
                {articlesData.monsters?.other_text}
              </SentenceTemplate>
            </div>
          </div>
        </div>
      </div>
      <div className="Right mx-4 w-1/3">
        <div className="Info bg-tertiary-color text-white min-h-96 mb-6 border-2 rounded">
          <RadarCharts />
          <Profiles title="基本情報" />
        </div>
        <div className="Advertisement bg-white my-4 h-48">広告</div>
        <div className="Category bg-secondary-color mt-6 utl-size-h-550">
          <TagList />
          <WorkList />
        </div>
      </div>
    </div>
  );
}
