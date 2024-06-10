"use client";

import Image from "next/image";
import DotLineList from "@/components/elements/shapes/DotLineList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedAppearance, FormattedTag } from "../types/articles";
import SimpleTag from "../../../components/elements/SimpleTag";

/// TODO: childrenのtype
type Props = {
  fields: {
    id: number;
    imagePath: string;
    imageAlt: string;
    tags: FormattedTag[];
    title: string;
    name: string;
    jpName: string;
    appearances: FormattedAppearance[];
    postedAt: string;
    preview: number;
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
          src={`/test${fields.imagePath}`}
          alt={`${fields.imageAlt}の画像`}
          width={1024}
          height={1024}
        />
      </div>
      <div className="Detail utl-w-120 pl-2">
        <div className="FileNumber mr-6 text-xs flex justify-end text-neutral-color">
          FILE :0001
        </div>
        <div className="Tags mr-4 mb-1 pb-1 flex justify-start">
          {fields.tags?.map(({ name, jp_name }, index) => {
            return (
              <SimpleTag key={index} href={`/article/${name}`}>
                {jp_name}
              </SimpleTag>
            );
          })}
        </div>
        <div className="Names ml-2">
          <p className="Title text-base font-semibold flex">{fields.title}</p>
          <div className="Name flex">
            <div className="w-80 flex">
              <p className="EnName text-5xl font-semibold mr-2 font-overlock font-bold">
                {fields.name.toUpperCase()}
              </p>
              <p className="JpName text-base font-semibold flex items-end">
                {fields.jpName}
              </p>
            </div>
            <div className="Bottoms flex justify-end items-end">
              <div
                className="Bottom mt-3 mr-1 w-16 h-6 bg-accent-color border-2 
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
            <a
              href=""
              className="Appearance m-1 h-5 min-w-24 flex justify-center  border-2 
        border-sub-color rounded-xl"
            >
              <p className="mx-2 h-5 flex justify-center text-xs">
                #エルデンリング
              </p>
            </a>
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
