"use client";
import React from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { imagesState } from "@/features/manages/state/images";
import { Commons } from "@/constants/common";
import { truncateString } from "@/utils/formatted";

type Props = {
  fields: { [key: string]: string | number | boolean };
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const CustomInputImages = ({ fields, onClick }: Props) => {
  const images = useRecoilValue(imagesState);
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {images.map(({ id, path, alt, article_id }, index) => {
        return (
          <div
            className={`text-center cursor-pointer ${
              Number(fields.id) === id
                ? "border border-solid border-yellow-500"
                : ""
            }`}
            key={index}
          >
            <div onClick={onClick} data-image_id={id}>
              <Image
                src={path}
                alt={`${alt}${Commons.JSX.ALT_AFTER_TEXT}`}
                width={100}
                height={100}
              />
            </div>
            <p>{truncateString(alt, 9)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomInputImages;
