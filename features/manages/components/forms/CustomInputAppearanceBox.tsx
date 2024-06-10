"use client";
import { articleListState } from "@/features/articles/state/articleList";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { appearanceState } from "@/features/manages/state/appearances";
import {
  formActiveAppearanceState,
  selectIdState,
} from "@/features/manages/state/forms";
import IconButton from "../IconButton";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import MainModal from "@/components/elements/MainModal";
import { Commons, Manages } from "@/constants/common";
import { FormattedAppearance } from "@/features/articles/types/articles";

const mainStyleColor = "bg-manage-tertiary-color";

const emptyAppearance = {
  id: 0,
  name: "",
  jp_name: "",
  main_flg: false,
  created_at: "",
};

const CustomInputAppearanceBox: React.FC = () => {
  const selectId = useRecoilValue(selectIdState);
  const articles = useRecoilValue(articleListState);
  const allAppearances = useRecoilValue(appearanceState);

  const [activeAppearances, setActiveAppearances] = useRecoilState<
    FormattedAppearance[]
  >(formActiveAppearanceState); // 現在アクティブなタグ配列を管理する状態
  const [, setInactiveSelectingAppearance] = useState({}); // 選択された非アクティブタグを管理する状態
  const [activeSelectAppearancesId, setActiveSelectAppearancesId] = useState(0); // 選択されたタグのIDを管理する状態

  // モーダルの取得
  const modal = document.getElementById(
    Manages.Modals.Edit.APPEARANCE_SELECTOR
  ) as HTMLDialogElement;

  // タグセレクターモーダルを表示する関数
  const handleClickAppearanceSelectorModal = (activeAppearanceId: number) => {
    setActiveSelectAppearancesId(activeAppearanceId); // 選択されたタグのIDを設定
    if (modal) modal.showModal();
  };

  // 非アクティブなタグリストを選択した際の処理
  const handleClickInactiveSelectAppearance = (selectAppearance: any) => {
    setInactiveSelectingAppearance(selectAppearance); // 選択された非アクティブタグを設定
    // 選択したタグをアクティブタグの指定の位置に置き換え
    const updatedActiveAppearances = activeAppearances.map(
      (appearance, index) =>
        index === activeSelectAppearancesId - 1 ? selectAppearance : appearance
    );

    setActiveAppearances(updatedActiveAppearances);

    modal.close();
  };

  // 3つの要素を持つ配列にする関数
  const ensureElements = (appearances: FormattedAppearance[]) => {
    const filledAppearances = [...appearances];
    while (filledAppearances.length < Commons.Configs.MAX_APPEARANCE_NUM) {
      filledAppearances.push(emptyAppearance);
    }
    return filledAppearances;
  };

  // 記事が選択された際にアクティブタグを更新
  useEffect(() => {
    const articleAppearances = articles[selectId]?.appearances || [];
    setActiveAppearances(ensureElements(articleAppearances));
  }, [articles, selectId]);

  return (
    <div>
      {/* タグセレクターモーダル */}
      <MainModal modalId={Manages.Modals.Edit.APPEARANCE_SELECTOR}>
        <div className="mb-2">{allAppearances.length}</div>
        <div className="flex gap-2 flex-wrap">
          {allAppearances.map((appearance, index) => {
            return (
              <button
                onClick={() => {
                  handleClickInactiveSelectAppearance(appearance); // タグを選択する処理
                }}
                key={index}
                className="btn btn-outline"
              >
                {appearance.name}
              </button>
            );
          })}
          <button
            onClick={() => {
              handleClickInactiveSelectAppearance(emptyAppearance);
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
          {activeAppearances.map(({ id, name, jp_name }, index) => {
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
                    onClick={() =>
                      handleClickAppearanceSelectorModal(index + 1)
                    }
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

export default CustomInputAppearanceBox;
