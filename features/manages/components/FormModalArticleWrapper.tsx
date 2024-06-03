"use client";
import React from "react";

import { useRecoilValue } from "recoil";
import { handlerArticleSingleState, selectingIdState } from "../state/actions";

type Props = {
  children: any;
  fields: { [key: string]: string | number | boolean };
};

const FormModalArticleWrapper = ({ children, fields }: Props) => {
  const selectingId = useRecoilValue(selectingIdState);
  const handleSubmitArticleSingle = useRecoilValue(handlerArticleSingleState);

  if (!handleSubmitArticleSingle) return null;

  return (
    <div className="flex flex-col gap-6 p-8">
      {children}
      <button
        onClick={() => handleSubmitArticleSingle(selectingId, fields)}
        className="btn btn-outline bg-manage-tertiary-color "
      >
        Edit
      </button>
    </div>
  );
};

export default FormModalArticleWrapper;
