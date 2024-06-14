"use client";
import { articleListState } from "@/features/articles/state/articleList";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tagState } from "@/features/manages/state/tags";
import {
  formActiveTagState,
  selectIdState,
} from "@/features/manages/state/forms";
import IconButton from "../IconButton";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import MainModal from "@/components/elements/MainModal";
import { Commons, Manages } from "@/constants/common";
import { FormattedTag } from "@/features/articles/types/articles";

const mainStyleColor = "bg-manage-tertiary-color";

const emptyTag = {
  id: 0,
  name: "",
  jp_name: "",
  main_flg: false,
  created_at: "",
};

const CustomInputTagBox: React.FC = () => {
  const selectId = useRecoilValue(selectIdState);
  const articles = useRecoilValue(articleListState);
  const allTags = useRecoilValue(tagState);

  const [activeTags, setActiveTags] =
    useRecoilState<FormattedTag[]>(formActiveTagState); // 現在アクティブなタグ配列を管理する状態
  const [, setInactiveSelectingTag] = useState({}); // 選択された非アクティブタグを管理する状態
  const [activeSelectTagsId, setActiveSelectTagsId] = useState(0); // 選択されたタグのIDを管理する状態

  // モーダルの取得
  const modal = document.getElementById(
    Manages.Modals.Edit.TAG_SELECTOR
  ) as HTMLDialogElement;

  // タグセレクターモーダルを表示する関数
  const handleClickTagSelectorModal = (activeTagsId: number) => {
    setActiveSelectTagsId(activeTagsId); // 選択されたタグのIDを設定
    if (modal) modal.showModal();
  };

  // 非アクティブなタグリストを選択した際の処理
  const handleClickInactiveSelectTag = (selectTag: any) => {
    setInactiveSelectingTag(selectTag); // 選択された非アクティブタグを設定

    // 選択したタグをアクティブタグの指定の位置に置き換え
    const updatedActiveTags = activeTags.map((tag, index) =>
      index === activeSelectTagsId - 1 ? selectTag : tag
    );

    setActiveTags(updatedActiveTags);

    modal.close();
  };

  // 3つの要素を持つ配列にする関数
  const ensureElements = (tags: FormattedTag[]) => {
    const filledTags = [...tags];
    while (filledTags.length < Commons.Configs.MAX_TAG_NUM) {
      filledTags.push(emptyTag);
    }
    return filledTags;
  };

  // 記事が選択された際にアクティブタグを更新
  useEffect(() => {
    const articleTags = articles[selectId - 1]?.tags || [];
    setActiveTags(ensureElements(articleTags));
  }, [articles, selectId]);

  return (
    <div>
      {/* タグセレクターモーダル */}
      <MainModal modalId={Manages.Modals.Edit.TAG_SELECTOR}>
        <div className="mb-2">{allTags.length}</div>
        <div className="flex gap-2 flex-wrap">
          {allTags.map((tag, index) => {
            return (
              <button
                onClick={() => {
                  handleClickInactiveSelectTag(tag); // タグを選択する処理
                }}
                key={index}
                className="btn btn-outline"
              >
                {tag.name}
              </button>
            );
          })}
          <button
            onClick={() => {
              handleClickInactiveSelectTag(emptyTag);
            }}
            className="btn btn-outline btn-error"
          >
            リセット
          </button>
        </div>
      </MainModal>
      {/* タグのテーブル表示 */}
      <table className="table">
        <thead>
          <tr>
            <th>Number</th>
            <th>UID</th>
            <th>Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {activeTags.map(({ id, name, jp_name }, index) => {
            return (
              <tr
                key={index}
                className={`${index % 2 > 0 ? "" : "bg-base-200"}`}
              >
                <th>{index + 1}</th>
                <th>{id || "-"}</th>
                <td>{jp_name && name ? `${jp_name}/${name}` : "-"}</td>
                <td className="flex gap-1 justify-center">
                  <IconButton
                    onClick={() => handleClickTagSelectorModal(index + 1)}
                    icon={faPenNib}
                    style={{
                      buttonParent: `${mainStyleColor} hover:${mainStyleColor} px-5`,
                      buttonChild: "gap-x-1 flex items-center",
                    }}
                  >
                    編集
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomInputTagBox;
