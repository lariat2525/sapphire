"use client";

import Image from "next/image";
import DotLineList from "@/components/elements/shapes/DotLineList";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedAppearance, FormattedTag } from "../types/articles";
import SimpleTag from "../../../components/elements/SimpleTag";
import AppearanceTag from "./AppearanceTag";

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
          {fields.appearances?.map(({ name, jp_name }, index) => {
            return (
              <AppearanceTag key={index} href={`/article/${name}`}>
                {jp_name}
              </AppearanceTag>
            );
          })}
        </div>
        <div className="Manages h-5 mr-5 flex justify-end items-end">
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            投稿時間：{fields.postedAt}
          </p>
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            視聴数：{fields.preview}
          </p>
          <p className="Manages mx-1 utl-fontSize-10 text-neutral-color">
            著者：{fields.author}
          </p>
        </div>
      </div>
    </div>
  );
}
