/* eslint-disable @next/next/no-img-element */
"use client";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as formattedUtils from "@/utils/formatted";
import { Manages } from "@/constants/common";
import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import { articleListState } from "@/features/articles/state/articleList";
import ArticlesModals from "@/features/manages/components/modals/ArticlesModals";
import DropMenuOption from "@/features/manages/components/DropMenuOption";
import * as actions from "@/features/manages/state/actions";
import useGetImageList from "@/features/manages/hooks/useGetImageList";
import useGetUser from "@/features/manages/hooks/useGetUser";
import useGetTags from "@/features/manages/hooks/useGetTags";
import useGetAppearances from "@/features/manages/hooks/useGetAppearance";
import { appearanceState } from "@/features/manages/state/appearances";
import IconButton from "@/features/manages/components/IconButton";
import { selectIdState } from "@/features/manages/state/forms";
import usePostMetaArticles from "@/features/manages/hooks/usePostMetaArticles";
import ReadModal from "@/components/elements/modals/ReadModal";
import { useReadModal } from "@/hooks/useReadModal";
import MainModal from "@/components/elements/MainModal";
import CustomInputRadio from "@/components/elements/forms/CustomInputRadio";
import CustomInputSelectBox from "@/components/elements/forms/CustomInputSelectBox";
import CustomInputText from "@/components/elements/forms/CustomInputText";
import FormModalWrapper from "@/features/manages/components/FormModalWrapper";
import SearchImageWrapper from "@/features/manages/components/SearchImageWrapper";
import CustomInputAppearanceBox from "@/features/manages/components/forms/CustomInputAppearanceBox";
import CustomInputImages from "@/features/manages/components/forms/CustomInputImages";
import CustomInputTagBox from "@/features/manages/components/forms/CustomInputTagBox";
import { users } from "@/mock/v1/read/content";
import { findObjectByColumnValue } from "@/utils/collections";

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
  const [selectingId, setSelectingId] = useRecoilState(selectIdState);

  // アクションSTATE
  const setHandlerArticleSingle = useSetRecoilState(
    actions.handlerArticleSingleState
  );
  const setHandlerTag = useSetRecoilState(actions.handlerTagState);
  const setHandlerAppearance = useSetRecoilState(
    actions.handlerAppearanceState
  );

  const callGetArticleList = useGetArticleList();

  const [fields, setFields] = useState<any>({});
  const [saves, setSaves] = useState<any>({});

  const [selectModalKey, setSelectModalKey] = useState<string>("");

  const [canImageFetch, setCanImageFetch] = useState<boolean>(false);
  const [canTagFetch, setCanTagFetch] = useState<boolean>(false);
  const [canAppearanceFetch, setCanAppearanceFetch] = useState<boolean>(false);

  // 読み取り専用モーダルカスタムフック
  const { isVisible, openModal, modalRef } = useReadModal();

  // ヘッダー情報更新API呼び出し
  const { triggerMetaArticles } = usePostMetaArticles();

  // ユーザー情報取得API呼び出し
  useGetUser();
  // タグ全取得API呼び出し（モーダル押下時）
  useGetTags(canTagFetch);
  // 作品全取得API呼び出し（モーダル押下時）
  useGetAppearances(canAppearanceFetch);
  // 画像取得API呼び出し（モーダル押下時）
  useGetImageList(canImageFetch, {});

  // イベント
  const handleSubmitArticleSingle = async (
    id: number,
    field: { [key: string]: string | number }
  ) => {
    console.log(id, field);
    await triggerMetaArticles({ id, fields: field });
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

  // 画像フィールドのクリックハンドラ
  const handleImagesClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const toolImageId = Number(
      event.currentTarget?.getAttribute("data-image_id")
    );
    if (toolImageId) {
      setSaves({ id: toolImageId });
    }
  };

  // タイトルフィールドの変更ハンドラ
  const handleTitlesChange = (field: string, value: string) => {
    setSaves((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // 著者フィールドの変更ハンドラ
  const handleAuthorChange = (value: string) => {
    setSaves({ id: Number(value) });
  };

  // 公開フィールドの変更ハンドラ
  const handleReleaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaves({ release_flg: event.target.value === "true" });
  };

  const openModalAndSetId = async (modalKey: string, id: number) => {
    setSelectingId(id);

    const selectedData = findObjectByColumnValue(
      callGetArticleList.data as any,
      "id",
      id
    );

    setFields(selectedData);

    setSelectModalKey(modalKey);
    // 指定のモーダルがクリックされたときに初めてAPIをフェッチする
    if (modalKey === Manages.Modals.Edit.IMAGE) {
      setCanImageFetch(true);
    }
    if (modalKey === Manages.Modals.Edit.TAG) {
      setCanTagFetch(true);
    }
    if (modalKey === Manages.Modals.Edit.APPEARANCE) {
      setCanAppearanceFetch(true);
    }
    openModal();
  };

  useEffect(() => {
    setHandlerArticleSingle(() => handleSubmitArticleSingle);
    setHandlerTag(() => handleSubmitTag);
    setHandlerAppearance(() => handleSubmitAppearance);
  }, [callGetArticleList]);

  const switchModals = (key: string) => {
    switch (key) {
      case Manages.Modals.Edit.IMAGE:
        return (
          <div key={key}>
            <FormModalWrapper
              fields={fields}
              state={actions.handlerArticleSingleState}
            >
              <SearchImageWrapper />
              <CustomInputImages
                fields={fields}
                onClick={(event) => handleImagesClick(event)}
              />
            </FormModalWrapper>
          </div>
        );

      case Manages.Modals.Edit.TITLES:
        return (
          <div key={key} className="flex flex-col gap-y-8">
            <FormModalWrapper
              fields={fields}
              state={actions.handlerArticleSingleState}
            >
              <CustomInputText
                icon={icons.faHeading}
                value={fields?.title}
                onChange={(event) =>
                  handleTitlesChange("title", event.target.value)
                }
                placeholder="タイトル"
              />
              <CustomInputText
                icon={icons.faUser}
                value={fields?.name}
                onChange={(event) =>
                  handleTitlesChange("name", event.target.value)
                }
                placeholder="英名"
              />
              <CustomInputText
                icon={icons.faUserTie}
                value={fields?.jp_name}
                onChange={(event) =>
                  handleTitlesChange("jp_name", event.target.value)
                }
                placeholder="和名"
              />
            </FormModalWrapper>
          </div>
        );

      case Manages.Modals.Edit.RELEASE:
        return (
          <div key={key}>
            <FormModalWrapper
              fields={fields}
              state={actions.handlerArticleSingleState}
            >
              <CustomInputRadio
                icon={icons.faPen}
                value={fields?.release_flg}
                onChange={handleReleaseChange}
                placeholders={{ true: "公開", false: "非公開" }}
              />
            </FormModalWrapper>
          </div>
        );

      case Manages.Modals.Edit.AUTHOR:
        return (
          <div key={key}>
            <FormModalWrapper
              fields={fields}
              state={actions.handlerArticleSingleState}
            >
              <CustomInputSelectBox
                items={users.map(({ id, username }) => {
                  return { id, label: username };
                })}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  handleAuthorChange(event.target.value)
                }
              />
            </FormModalWrapper>
          </div>
        );

      case Manages.Modals.Edit.TAG:
        return (
          <div key={key}>
            <FormModalWrapper
              fields={{ list: fields }}
              state={actions.handlerTagState}
            >
              <CustomInputTagBox />
            </FormModalWrapper>
          </div>
        );

      case Manages.Modals.Edit.APPEARANCE:
        return (
          <div key={key}>
            <FormModalWrapper
              fields={{ list: fields }}
              state={actions.handlerAppearanceState}
            >
              <CustomInputAppearanceBox />
            </FormModalWrapper>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <ReadModal isVisible={isVisible} modalRef={modalRef}>
        {switchModals(selectModalKey)}
      </ReadModal>
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
                        <DropMenuOption text="操作">
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
    </div>
  );
}
