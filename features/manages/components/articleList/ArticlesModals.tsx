"use client";
import React, { useEffect, useState } from "react";
import MainModal from "@/components/elements/MainModal";
import { Manages } from "@/constants/common";
import FormModalWrapper from "@/features/manages/components/FormModalArticleWrapper";
import CustomInputText from "@/components/elements/forms/CustomInputText";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeading, faPen, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { articleListState } from "@/features/articles/state/articleList";
import {
  formActiveTagState,
  selectIdState,
} from "@/features/manages/state/forms";
import { findObjectByColumnValue } from "@/utils/collections";
import { Article } from "@/features/articles/types/articles";
import CustomInputRadio from "@/components/elements/forms/CustomInputRadio";
import CustomInputImages from "@/features/manages/components/forms/CustomInputImages";
import SearchImageWrapper from "@/features/manages/components/SearchImageWrapper";
import CustomInputSelectBox from "@/components/elements/forms/CustomInputSelectBox";
import { userState } from "@/features/manages/state/user";
import CustomInputTagBox from "@/features/manages/components/forms/CustomInputTagBox";
import { appearanceState } from "@/features/manages/state/appearances";
import { tagState } from "@/features/manages//state/tags";

type Props = {
  modals: string[];
};

const ArticlesModals = ({ modals }: Props) => {
  // 選択された記事のIDを取得
  const selectingId = useRecoilValue(selectIdState);
  // 記事のリストを取得
  const articleList = useRecoilValue(articleListState);
  // 全タグを取得
  const tags = useRecoilValue(tagState);
  // 全出演作品を取得
  const appearances = useRecoilValue(appearanceState);
  // 全ユーザーを取得
  const users = useRecoilValue(userState);

  const [, setSelectingData] = useState<Article | null>(null); // 選択された記事のデータを保持

  // 各モーダルのフィールドの初期状態を設定
  const [imageFields, setImageFields] = useState({
    id: 0,
  });
  const [titleFields, setTitleFields] = useState({
    title: "",
    name: "",
    jp_name: "",
  });
  const [authorFields, setAuthorFields] = useState({ id: 0 });
  const [releaseFields, setReleaseFields] = useState({ release_flg: false });
  const formActiveTagFields = useRecoilValue(formActiveTagState); // 編集されたタグを取得

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
      setImageFields({ id: toolImageId });
    }
  };

  // タイトルフィールドの変更ハンドラ
  const handleTitlesChange = (field: string, value: string) => {
    setTitleFields((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // 著者フィールドの変更ハンドラ
  const handleAuthorChange = (value: string) => {
    setAuthorFields({ id: Number(value) });
  };

  // 公開フィールドの変更ハンドラ
  const handleReleaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReleaseFields({ release_flg: event.target.value === "true" });
  };

  // 選択されたデータから状態を一括更新する関数
  const updateStateFromSelectingData = (data: Article | null) => {
    setImageFields({
      id: data?.images[selectingId]?.id || 0,
    });
    setTitleFields({
      title: data?.title || "",
      name: data?.name || "",
      jp_name: data?.jp_name || "",
    });
    setAuthorFields({ id: data?.user.id || 0 });
    setReleaseFields({ release_flg: data?.release_flg || false });
  };

  const renders = modals.map((key) => {
    switch (key) {
      case Manages.Modals.Edit.IMAGE:
        return (
          <div key={key}>
            <MainModal modalId={key} customModalStyle="max-w-3xl">
              <FormModalWrapper fields={imageFields}>
                <SearchImageWrapper />
                <CustomInputImages
                  fields={imageFields}
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
              <FormModalWrapper fields={titleFields}>
                <CustomInputText
                  icon={faHeading}
                  value={titleFields.title}
                  onChange={(event) =>
                    handleTitlesChange("title", event.target.value)
                  }
                  placeholder="タイトル"
                />
                <CustomInputText
                  icon={faUser}
                  value={titleFields.name}
                  onChange={(event) =>
                    handleTitlesChange("name", event.target.value)
                  }
                  placeholder="英名"
                />
                <CustomInputText
                  icon={faUserTie}
                  value={titleFields.jp_name}
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
              <FormModalWrapper fields={releaseFields}>
                <CustomInputRadio
                  icon={faPen}
                  value={releaseFields.release_flg}
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
              <FormModalWrapper fields={authorFields}>
                <CustomInputSelectBox
                  items={users.map(({ id, username }) => {
                    return { id, label: username };
                  })}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    handleAuthorChange(event.target.value)
                  }
                />
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      case Manages.Modals.Edit.TAG:
        return (
          <div key={key}>
            <MainModal modalId={key} customModalStyle="max-w-3xl">
              <FormModalWrapper
                fields={{ list: formActiveTagFields }}
                mode="tag"
              >
                <CustomInputTagBox />
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      case Manages.Modals.Edit.APPEARANCE:
        return (
          <div key={key}>
            <MainModal modalId={key} customModalStyle="max-w-3xl">
              <FormModalWrapper
                fields={{ list: formActiveTagFields }}
                mode="appearance"
              >
                <CustomInputTagBox />
              </FormModalWrapper>
            </MainModal>
          </div>
        );

      default:
        return null;
    }
  });

  return <div>{renders}</div>;
};

export default ArticlesModals;
