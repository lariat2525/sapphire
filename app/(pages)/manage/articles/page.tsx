/* eslint-disable @next/next/no-img-element */
"use client";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as formattedUtils from "@/utils/formatted";
import { Manages } from "@/constants/common";
import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import { articleListState } from "@/features/articles/state/articleList";
import ArticlesModals from "@/features/manages/components/articleList/ArticlesModals";
import DropMenuOption from "@/features/manages/components/DropMenuOption";
import * as actions from "@/features/manages/state/actions";
import useGetImageList from "@/features/manages/hooks/useGetImageList";
import useGetUser from "@/features/manages/hooks/useGetUser";
import useGetTags from "@/features/manages/hooks/useGetTags";
import useGetAppearances from "@/features/manages/hooks/useGetAppearance";
import { appearanceState } from "@/features/manages/state/appearances";
import IconButton from "@/features/manages/components/IconButton";
import { selectIdState } from "@/features/manages/state/forms";

const modals = [
  Manages.Modals.Edit.IMAGE,
  Manages.Modals.Edit.AUTHOR,
  Manages.Modals.Edit.TAG,
  Manages.Modals.Edit.APPEARANCE,
  Manages.Modals.Edit.TITLES,
  Manages.Modals.Edit.RELEASE,
];

const mainStyleColor = "bg-manage-tertiary-color";

const iconStyles = {
  buttonParent: `${mainStyleColor} hover:${mainStyleColor}`,
};

/* TSX */
export default function ManageArticleList() {
  const articles = useRecoilValue(articleListState);
  const setSelectingId = useSetRecoilState(selectIdState);

  // アクションSTATE
  const setHandlerArticleSingle = useSetRecoilState(actions.handlerTagState);
  const setHandlerTag = useSetRecoilState(actions.handlerArticleSingleState);
  const setHandlerAppearance = useSetRecoilState(
    actions.handlerAppearanceState
  );

  const callGetArticleList = useGetArticleList();

  const [canImageFetch, setCanImageFetch] = useState<boolean>(false);
  const [canTagFetch, setCanTagFetch] = useState<boolean>(false);
  const [canAppearanceFetch, setCanAppearanceFetch] = useState<boolean>(false);

  // ユーザー情報取得API呼び出し
  useGetUser();
  // タグ全取得API呼び出し（モーダル押下時）
  useGetTags(canTagFetch);
  // 作品全取得API呼び出し（モーダル押下時）
  useGetAppearances(canAppearanceFetch);
  // 画像取得API呼び出し（モーダル押下時）
  useGetImageList(canImageFetch, {});

  const openModalAndSetId = (modalId: string, id: number) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;

    if (modal) {
      modal.showModal();

      // 指定のモーダルがクリックされたときに初めてAPIをフェッチする
      if (modalId === Manages.Modals.Edit.IMAGE) {
        setCanImageFetch(true);
      }
      if (modalId === Manages.Modals.Edit.TAG) {
        setCanTagFetch(true);
      }
      if (modalId === Manages.Modals.Edit.APPEARANCE) {
        setCanAppearanceFetch(true);
      }
      setSelectingId(id);
    }
  };

  // イベント
  const handleSubmitArticleSingle = async (
    id: number,
    field: { [key: string]: string | number }
  ) => {
    console.log(id, field);
  };

  const handleSubmitTag = async (
    id: number,
    field: { [key: string]: string | number }
  ) => {
    console.log(id, field);
  };

  const handleSubmitAppearance = async (
    id: number,
    field: { [key: string]: string | number }
  ) => {
    console.log(id, field);
  };

  useEffect(() => {
    setHandlerArticleSingle(() => handleSubmitArticleSingle);
    setHandlerTag(() => handleSubmitTag);
    setHandlerAppearance(() => handleSubmitAppearance);
  }, [callGetArticleList]);

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Release</th>
            <th>PV</th>
            <th>Author</th>
            <th>Times</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(
            (
              {
                id,
                name,
                jp_name,
                title,
                release_flg,
                preview,
                user,
                created_at,
                post_at,
                updated_at,
              },
              index
            ) => {
              return (
                <tr key={index} className="z-16 border-y-slate-200 h-28">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-1.5">{id}</div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="relative bottom-8">
                        <div
                          onClick={() =>
                            openModalAndSetId(Manages.Modals.Edit.IMAGE, id)
                          }
                          className="text-slate-400 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={icons.faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* タイトル関連カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5 text-nowrap">
                      <div className="flex flex-col">
                        <span className="badge badge-outline badge-sm">
                          {formattedUtils.truncateString(title)}
                        </span>
                        <div className="font-bold text-lg pt-1">{jp_name}</div>
                        <div className="text-slate-400">
                          {formattedUtils.toUpperFirstLetter(name)}
                        </div>
                      </div>
                      <div className="relative top-14">
                        <div
                          onClick={() =>
                            openModalAndSetId(Manages.Modals.Edit.TITLES, id)
                          }
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={icons.faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* 公開/非公開カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5">
                      <span
                        className={`text-nowrap badge badge-ghost ${
                          release_flg ? mainStyleColor : "bg-slate-200"
                        }`}
                      >
                        {release_flg
                          ? Manages.Wamei.RELEASE_STATUS_TEXT
                          : Manages.Wamei.NO_RELEASE_STATUS_TEXT}
                      </span>
                      <div className="relative top-8">
                        <div
                          onClick={() =>
                            openModalAndSetId(Manages.Modals.Edit.RELEASE, id)
                          }
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={icons.faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* PV数カラム */}
                  <td>
                    <div className="badge badge-md">
                      {preview && preview.toLocaleString()}
                    </div>
                  </td>
                  {/* 著者カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5">
                      <div>
                        {formattedUtils.truncateString(user?.username, 8)}
                      </div>
                      <div className="relative top-8">
                        <div
                          onClick={() =>
                            openModalAndSetId(Manages.Modals.Edit.AUTHOR, id)
                          }
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={icons.faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-1.5 text-nowrap">
                      <div className="flex flex-col gap-y-2 text-xs text-gray-500">
                        <div className="flex justify-between border-b gap-2">
                          <div className="font-medium">Updated</div>
                          <div>
                            {updated_at
                              ? formattedUtils.formatCustomDate(updated_at)
                              : "-"}
                          </div>
                        </div>
                        <div className="flex justify-between border-b">
                          <div className="font-medium">Posted</div>
                          <div>
                            {post_at
                              ? formattedUtils.formatCustomDate(post_at)
                              : "-"}
                          </div>
                        </div>
                        <div className="flex justify-between border-b">
                          <div className="font-medium">Created</div>
                          <div>
                            {created_at
                              ? formattedUtils.formatCustomDate(created_at)
                              : "-"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="gap-1 utl-flex-center-colum">
                      <div>
                        <DropMenuOption text="操作" size="xs">
                          <>
                            <li className="p-1">delete</li>
                          </>
                        </DropMenuOption>
                      </div>
                      <div className="flex gap-x-1">
                        <IconButton
                          onClick={() =>
                            openModalAndSetId(Manages.Modals.Edit.TAG, id)
                          }
                          icon={icons.faTag}
                          style={iconStyles}
                        />
                        <IconButton
                          onClick={() =>
                            openModalAndSetId(
                              Manages.Modals.Edit.APPEARANCE,
                              id
                            )
                          }
                          icon={icons.faFilm}
                          style={iconStyles}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <ArticlesModals modals={modals} />
    </div>
  );
}
