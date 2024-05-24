"use client";
import DotLine from "@/components/elements/shapes/DotLine";

// TODO: childrenのtype
type Props = { children: any; title?: string };

/* TSX */
export default function SentenceTemplate({ children, title }: Props) {
  return (
    <>
      <div className="Labels">
        <div className="Label">
          {title && <h3 className="px-2 pt-2 mt-0.5 text-2xl">{title}</h3>}
        </div>
        <div className="Line flex">
          <DotLine />
        </div>
      </div>
      <div className="Text mt-6">
        <p className="inline-block px-8 my-0.5 text-base tracking-widest leading-9 ">
          {children}
        </p>
      </div>
    </>
  );
}
