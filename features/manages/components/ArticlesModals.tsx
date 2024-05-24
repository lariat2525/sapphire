"use client";
import React from "react";
import MainModal from "@/components/elements/MainModal";
import { Manages } from "@/constants/common";

type Props = {
  modals: string[];
};

const ArticlesModals = ({ modals }: Props) => {
  const renders = modals.map((key) => {
    switch (key) {
      case Manages.Modals.Edit.IMAGE:
        return (
          <div key={key}>
            <MainModal modalId={key}>image</MainModal>
          </div>
        );

      case Manages.Modals.Edit.TITLES:
        return (
          <div key={key}>
            <MainModal modalId={key}>titles</MainModal>
          </div>
        );

      case Manages.Modals.Edit.RELEASE:
        return (
          <div key={key}>
            <MainModal modalId={key}>release</MainModal>
          </div>
        );

      case Manages.Modals.Edit.AUTHOR:
        return (
          <div key={key}>
            <MainModal modalId={key}>author</MainModal>
          </div>
        );

      case Manages.Modals.Edit.TAG:
        return (
          <div key={key}>
            <MainModal modalId={key}>tag</MainModal>
          </div>
        );

      case Manages.Modals.Edit.APPEARANCE:
        return (
          <div key={key}>
            <MainModal modalId={key}>appearance</MainModal>
          </div>
        );

      default:
        return null;
    }
  });

  return <div>{renders}</div>;
};

export default ArticlesModals;
