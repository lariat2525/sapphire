/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faFilm,
  faPenToSquare,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  formatCustomDate,
  toUpperFirstLetter,
  truncateString,
} from "@/utils/core";
import { Manages } from "@/constants/common";
import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import { articleListState } from "@/features/articles/state/articleList";
import ArticlesModals from "@/features/manages/components/ArticlesModals";
import DropMenuOption from "@/features/manages/components/DropMenuOption";

const modals = [
  Manages.Modals.Edit.IMAGE,
  Manages.Modals.Edit.AUTHOR,
  Manages.Modals.Edit.TAG,
  Manages.Modals.Edit.APPEARANCE,
  Manages.Modals.Edit.TITLES,
  Manages.Modals.Edit.RELEASE,
];

/* TSX */
export default function ManageArticleList() {
  const articles = useRecoilValue(articleListState);
  const callGetArticleList = useGetArticleList();

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  useEffect(() => {
    callGetArticleList();
  }, [callGetArticleList]);

  console.log(articles);

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
                          onClick={() => openModal(Manages.Modals.Edit.IMAGE)}
                          className="text-slate-400 cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* タイトル関連カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5 text-nowrap">
                      <div className="flex flex-col">
                        <span className="badge badge-outline badge-sm">
                          {truncateString(title)}
                        </span>
                        <div className="font-bold text-lg pt-1">{jp_name}</div>
                        <div className="text-slate-400">
                          {toUpperFirstLetter(name)}
                        </div>
                      </div>
                      <div className="relative top-14">
                        <div
                          onClick={() => openModal(Manages.Modals.Edit.TITLES)}
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* 公開/非公開カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5">
                      <span
                        className={`text-nowrap badge badge-ghost ${
                          release_flg
                            ? "bg-manage-tertiary-color"
                            : "bg-slate-200"
                        }`}
                      >
                        {release_flg
                          ? Manages.Wamei.RELEASE_STATUS_TEXT
                          : Manages.Wamei.NO_RELEASE_STATUS_TEXT}
                      </span>
                      <div className="relative top-8">
                        <div
                          onClick={() => openModal(Manages.Modals.Edit.RELEASE)}
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* PV数カラム */}
                  <td>
                    <div className="badge badge-md">
                      {preview.toLocaleString()}
                    </div>
                  </td>
                  {/* 著者カラム */}
                  <td>
                    <div className="flex justify-between gap-1.5">
                      <div>{truncateString(user.username, 8)}</div>
                      <div className="relative top-8">
                        <div
                          onClick={() => openModal(Manages.Modals.Edit.AUTHOR)}
                          className="text-manage-accent-color cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
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
                            {updated_at ? formatCustomDate(updated_at) : "-"}
                          </div>
                        </div>
                        <div className="flex justify-between border-b">
                          <div className="font-medium">Posted</div>
                          <div>{post_at ? formatCustomDate(post_at) : "-"}</div>
                        </div>
                        <div className="flex justify-between border-b">
                          <div className="font-medium">Created</div>
                          <div>
                            {created_at ? formatCustomDate(created_at) : "-"}
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
                        <button
                          onClick={() => openModal(Manages.Modals.Edit.TAG)}
                          className={`dropdown btn px-3 border-1 border-slate-400 bg-manage-tertiary-color hover:bg-manage-tertiary-color text-nowrap min-h-6 h-1`}
                        >
                          <div
                            tabIndex={0}
                            className={`text-xs text-slate-700`}
                          >
                            <FontAwesomeIcon icon={faTag} />
                          </div>
                        </button>
                        <button
                          onClick={() =>
                            openModal(Manages.Modals.Edit.APPEARANCE)
                          }
                          className={`dropdown btn px-3 border-1 border-slate-400 bg-manage-tertiary-color hover:bg-manage-tertiary-color text-nowrap min-h-6 h-1`}
                        >
                          <div
                            tabIndex={0}
                            className={`text-xs text-slate-700`}
                          >
                            <FontAwesomeIcon icon={faFilm} />
                          </div>
                        </button>
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
