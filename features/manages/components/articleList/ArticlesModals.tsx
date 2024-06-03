"use client";
import React, { useEffect, useState } from "react";
import MainModal from "@/components/elements/MainModal";
import { Manages } from "@/constants/common";
import FormModalWrapper from "../FormModalArticleWrapper";
import CustomInputText from "@/components/elements/CustomInputText";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeading, faPen, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { articleListState } from "@/features/articles/state/articleList";
import { selectingIdState } from "../../state/actions";
import { findObjectByColumnValue } from "@/utils/collections";
import { Article } from "@/features/articles/types/articles";
import CustomInputRadio from "@/components/elements/CustomInputRadio";
import CustomInputImages from "../CustomInputImages";
import SearchImageWrapper from "../SearchImageWrapper";

type Props = {
  modals: string[];
};

const ArticlesModals = ({ modals }: Props) => {
  const selectingId = useRecoilValue(selectingIdState); // 選択された記事のIDを取得
  const articleList = useRecoilValue(articleListState); // 記事のリストを取得

  const [selectingData, setSelectingData] = useState<Article | null>(null); // 選択された記事のデータを保持

  // 各モーダルのフィールドの初期状態を設定
  const [images, setImages] = useState({
    id: 0,
  });
  const [titles, setTitles] = useState({
    title: "",
    name: "",
    jp_name: "",
  });
  const [author, setAuthor] = useState({ username: "" });
  const [release, setRelease] = useState({ release_flg: false });
  const [tags, setTags] = useState({ tag: "" });

  // 選択された記事データが変更された場合に状態を更新
  useEffect(() => {
    const selectedData = findObjectByColumnValue(
      articleList,
      "id",
      selectingId
    );
    setSelectingData(selectedData || null);
    updateStateFromSelectingData(selectedData || null); // 一括更新関数を呼び出す
  }, [selectingId, articleList]);

  // 画像フィールドのクリックハンドラ
  const handleImagesClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const toolImageId = Number(
      event.currentTarget?.getAttribute("data-image_id")
    );
    if (toolImageId) {
      setImages({ id: toolImageId });
    }
  };

  // タイトルフィールドの変更ハンドラ
  const handleTitlesChange = (field: string, value: string) => {
    setTitles((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // 著者フィールドの変更ハンドラ
  const handleAuthorChange = (field: string, value: string) => {
    setAuthor((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // 公開フィールドの変更ハンドラ
  const handleReleaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRelease({ release_flg: event.target.value === "true" });
  };

  // タグフィールドの変更ハンドラ
  const handleTagsChange = (field: string, value: string) => {
    setTags((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // 選択されたデータから状態を一括更新する関数
  const updateStateFromSelectingData = (data: Article | null) => {
    setImages({
      id: data?.images[selectingId]?.id || 0,
    });
    setTitles({
      title: data?.title || "",
      name: data?.name || "",
      jp_name: data?.jp_name || "",
    });
    setAuthor({ username: data?.user.username || "" });
    setRelease({ release_flg: data?.release_flg || false });
  };

  const renders = modals.map((key) => {
    switch (key) {
      case Manages.Modals.Edit.IMAGE:
        return (
          <div key={key}>
            <MainModal modalId={key} customModalStyle="max-w-3xl">
              <FormModalWrapper fields={images}>
                <SearchImageWrapper />
                <CustomInputImages
                  fields={images}
                  onClick={(event) => handleImagesClick(event)}
                ></CustomInputImages>
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      case Manages.Modals.Edit.TITLES:
        return (
          <div key={key}>
            <MainModal modalId={key}>
              <FormModalWrapper fields={titles}>
                <CustomInputText
                  icon={faHeading}
                  value={titles.title}
                  onChange={(event) =>
                    handleTitlesChange("title", event.target.value)
                  }
                  placeholder="タイトル"
                />
                <CustomInputText
                  icon={faUser}
                  value={titles.name}
                  onChange={(event) =>
                    handleTitlesChange("name", event.target.value)
                  }
                  placeholder="英名"
                />
                <CustomInputText
                  icon={faUserTie}
                  value={titles.jp_name}
                  onChange={(event) =>
                    handleTitlesChange("jp_name", event.target.value)
                  }
                  placeholder="和名"
                />
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      case Manages.Modals.Edit.RELEASE:
        return (
          <div key={key}>
            <MainModal modalId={key}>
              <FormModalWrapper fields={release}>
                <CustomInputRadio
                  icon={faPen}
                  value={release.release_flg}
                  onChange={handleReleaseChange}
                  placeholders={{ true: "公開", false: "非公開" }}
                />
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      case Manages.Modals.Edit.AUTHOR:
        return (
          <div key={key}>
            <MainModal modalId={key}>
              <FormModalWrapper fields={author}>
                <CustomInputText
                  icon={faPen}
                  value={author.username}
                  onChange={(event) =>
                    handleAuthorChange("author", event.target.value)
                  }
                  placeholder="著者"
                />
              </FormModalWrapper>
            </MainModal>
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
