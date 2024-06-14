"use client";
import React from "react";
import { RecoilState, useRecoilValue } from "recoil";
import { selectIdState } from "../state/forms";

type Fields<T> = { [key: string]: T };

type Props<T> = {
  children: React.ReactNode;
  fields: Fields<T>;
  state: any;
};

const FormModalWrapper = <T,>({ children, fields, state }: Props<T>) => {
  const selectingId = useRecoilValue(selectIdState);

  const handleSubmit: ((id: number, fields: Fields<T>) => void) | null =
    useRecoilValue(state);

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

export default FormModalWrapper;
