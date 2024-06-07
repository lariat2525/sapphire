"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import * as actions from "../state/actions";
import { selectIdState } from "../state/forms";

type Fields<T> = { [key: string]: T };

type Props<T> = {
  children: React.ReactNode;
  fields: Fields<T>;
  mode?: "article" | "tag" | "appearance";
};

const FormModalArticleWrapper = <T,>({
  children,
  fields,
  mode = "article",
}: Props<T>) => {
  const selectingId = useRecoilValue(selectIdState);

  let handleSubmit: ((id: number, fields: Fields<T>) => void) | null = null;

  // モードごとにハンドラーを取得
  if (mode === "article") {
    handleSubmit = useRecoilValue(actions.handlerArticleSingleState);
  } else if (mode === "tag") {
    handleSubmit = useRecoilValue(actions.handlerTagState);
  } else if (mode === "appearance") {
    handleSubmit = useRecoilValue(actions.handlerAppearanceState);
  }

  if (!handleSubmit) return null;

  return (
    <div className="flex flex-col gap-6 p-8">
      {children}
      <button
        onClick={() => handleSubmit && handleSubmit(selectingId, fields)}
        className="btn btn-outline bg-manage-tertiary-color"
      >
        Edit
      </button>
    </div>
  );
};

export default FormModalArticleWrapper;
