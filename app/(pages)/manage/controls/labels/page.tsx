"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import IconCompactButton from "@/features/manages/components/IconCompactButton";
import useGetImageList from "@/features/manages/hooks/useGetImageList";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  faChurch,
  faCrutch,
  faPen,
  faQuestion,
  faTag,
  faTrash,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { imagesState } from "@/features/manages/state/images";
import SearchBox from "@/components/elements/SearchBox";
import CustomInputSelectBox from "@/components/elements/forms/CustomInputSelectBox";
import { tagState } from "@/features/manages/state/tags";
import { appearanceState } from "@/features/manages/state/appearances";
import useGetTags from "@/features/manages/hooks/useGetTags";
import useGetAppearances from "@/features/manages/hooks/useGetAppearance";
import { Manages } from "@/constants/common";
import { selectIdState } from "@/features/manages/state/forms";
import MainModal from "@/components/elements/MainModal";
import FormModalWrapper from "@/features/manages/components/FormModalWrapper";
import { CommonLabel } from "@/types/articles";
import { handlerArticleSingleState } from "@/features/manages/state/actions";
import CustomInputText from "@/components/elements/forms/CustomInputText";
import CustomInputTextArea from "@/components/elements/forms/CustomInputTextArea";
import { findObjectByColumnValue } from "@/utils/collections";
import { useReadModal } from "@/hooks/useReadModal";
import ReadModal from "@/components/elements/modals/ReadModal";

const APPEARANCE = "appearance";
const TAG = "tag";

const globalColorStyle = "bg-manage-tertiary-color";

const tabActiveStyle = `tab-active ${globalColorStyle}`;

type TabMode = "tag" | "appearance";

const SelectBoxItems = [
  { id: 0, label: "新しい順" },
  { id: 1, label: "古い順" },
  { id: 2, label: "人気順" },
];

const initFields = {
  name: "",
  jp_name: "",
  description: "",
};

/* TSX */
export default function Labels() {
  const [activeTab, setActiveTab] = useState<TabMode>(TAG);
  const [activeData, setActiveData] = useState<CommonLabel[]>([]);
  const [tagFields, setTagFields] = useState(initFields);
  const [appearanceFields, setAppearanceFields] = useState(initFields);
  const [selectingId, setSelectingId] = useRecoilState(selectIdState);
  const setHandlerArticleSingle = useSetRecoilState(handlerArticleSingleState);

  // 画像取得API呼び出し
  useGetTags(activeTab === TAG);
  useGetAppearances(activeTab === APPEARANCE);

  const [tags, setTags] = useRecoilState(tagState);
  const [appearances, setAppearances] = useRecoilState(appearanceState);

  const [keyword, setKeyword] = useState<string>("");

  // 読み取り専用モーダルカスタムフック
  const { isVisible, openModal, modalRef } = useReadModal();

  // イベント
  const handleSubmitSingle = async (
    id: number,
    field: { [key: string]: string | number }
  ) => {
    console.log(id, field);
  };

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    // TODO: 検索API
  };

  const handleClickReadModal = (id: number) => {
    setSelectingId(id);
    openModal();
  };

  const handleDeleteImage = (id: number) => {
    // TODO: API接続
    // setImages(images.filter((image) => image.id !== id));
  };

  const handleToggleTab = (mode: TabMode) => {
    setActiveTab(mode);
  };

  const openModalAndSetId = (modalId: string, id: number) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;

    if (modal) {
      modal.showModal();
      setSelectingId(id);
    }
  };

  useEffect(() => {
    if (tags && activeTab === TAG) setActiveData(tags);
    if (appearances && activeTab === APPEARANCE) setActiveData(appearances);
  }, [activeTab, tags, appearances]);

  useEffect(() => {
    setHandlerArticleSingle(() => handleSubmitSingle);
  }, [tags, appearances]);

  // 選択された記事データが変更された場合に状態を更新
  useEffect(() => {
    const selectedData = findObjectByColumnValue(
      activeTab === TAG ? tags : appearances,
      "id",
      selectingId
    );
    // 一括更新関数を呼び出す
    updateStateFromSelectingData(selectedData || null);
  }, [selectingId, tags, appearances]);

  // 選択されたデータから状態を一括更新する関数
  const updateStateFromSelectingData = (data: CommonLabel | null) => {
    const shareFields = {
      name: data?.name || "",
      jp_name: data?.jp_name || "",
      description: data?.description || "",
    };
    if (activeTab === TAG) setTagFields(shareFields);
    if (activeTab === APPEARANCE) setAppearanceFields(shareFields);
  };

  const renderModals = (key: string) => {
    if (key === Manages.Modals.Edit.TAG)
      return (
        <MainModal modalId={Manages.Modals.Edit.TAG}>
          <FormModalWrapper
            fields={tagFields}
            state={handlerArticleSingleState}
          >
            <CustomInputText
              icon={faChurch}
              value={tagFields.name}
              onChange={(e) =>
                setTagFields((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              placeholder="英名"
            />
            <CustomInputText
              icon={faUserNinja}
              value={tagFields.jp_name}
              onChange={(e) =>
                setTagFields((prevState) => ({
                  ...prevState,
                  jp_name: e.target.value,
                }))
              }
              placeholder="和名"
            />
            <CustomInputTextArea
              value={tagFields.description}
              onChange={(e) =>
                setTagFields((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
              placeholder="説明"
            />
          </FormModalWrapper>
        </MainModal>
      );

    if (key === Manages.Modals.Edit.APPEARANCE)
      return (
        <MainModal modalId={Manages.Modals.Edit.APPEARANCE}>
          <FormModalWrapper
            fields={appearanceFields}
            state={handlerArticleSingleState}
          >
            <CustomInputText
              icon={faChurch}
              value={appearanceFields.name}
              onChange={(e) =>
                setAppearanceFields((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              placeholder="英名"
            />
            <CustomInputText
              icon={faUserNinja}
              value={appearanceFields.jp_name}
              onChange={(e) =>
                setAppearanceFields((prevState) => ({
                  ...prevState,
                  jp_name: e.target.value,
                }))
              }
              placeholder="和名"
            />
            <CustomInputTextArea
              value={appearanceFields.description}
              onChange={(e) =>
                setAppearanceFields((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
              placeholder="説明"
            />
          </FormModalWrapper>
        </MainModal>
      );
  };

  const renderReadModal = () => {
    const selectedData = findObjectByColumnValue(
      activeTab === TAG ? tags : appearances,
      "id",
      selectingId
    );
    return (
      <ReadModal isVisible={isVisible} modalRef={modalRef}>
        <div className="stat-title flex flex-col justify-center text-2xl">
          <span className="text-center">{selectedData?.name}</span>
          <span className="text-center text-zinc-600">
            {selectedData?.jp_name}
          </span>
        </div>
        <div className="stat-desc text-xl flex justify-center mt-10">
          {selectedData?.description}
        </div>
      </ReadModal>
    );
  };

  return (
    <div className="Board relative">
      {isVisible && renderReadModal()}
      {renderModals(
        activeTab === TAG
          ? Manages.Modals.Edit.TAG
          : Manages.Modals.Edit.APPEARANCE
      )}
      <div
        role="tablist"
        className={` text-manage-primary-color tabs rounded bg-slate-200 mb-4`}
      >
        <a
          role="tab"
          onClick={() => handleToggleTab(TAG)}
          className={`tab rounded  m-1 ${activeTab === TAG && tabActiveStyle}`}
        >
          Tag
        </a>
        <a
          role="tab"
          onClick={() => handleToggleTab(APPEARANCE)}
          className={`tab rounded  m-1 ${
            activeTab === APPEARANCE && tabActiveStyle
          }`}
        >
          Appearance
        </a>
      </div>
      <div className="Filters w-full h-10 mb-10 flex justify-center">
        <div className="Search w-2/3">
          <SearchBox
            placeholder={`${activeTab === TAG ? "タグ" : "出演作品"}を検索`}
            onSearch={handleSearch}
            initialKeyword={keyword}
          />
        </div>
        <div className="Radio w-1/3 flex gap-4 ml-4">
          {/* TODO: API接続 絞り込み */}
          <CustomInputSelectBox items={SelectBoxItems} onChange={() => {}} />
        </div>
      </div>
      <div className="Images flex flex-wrap justify-center gap-y-4 gap-x-2">
        {activeData?.map(({ id, name, jp_name, description }, index) => {
          return (
            <div
              key={index}
              className={`w-1/5 flex flex-col items-center rounded border-solid border-2 py-2 shadow cursor-pointer`}
            >
              <div className="stat-desc">No.{index + 1}</div>
              <div
                onClick={() => handleClickReadModal(id)}
                className="flex gap-x-2 mt-2"
              >
                <div className="stat-value text-sm flex flex-col justify-center">
                  <span className="text-center">{name}</span>
                  <span className="text-center text-zinc-600">{jp_name}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="stat-desc">created 2020/03/11</div>
                <IconCompactButton
                  onClick={() => {
                    openModalAndSetId(
                      activeTab === TAG
                        ? Manages.Modals.Edit.TAG
                        : Manages.Modals.Edit.APPEARANCE,
                      id
                    );
                  }}
                  icon={faPen}
                  style={{
                    buttonParent: `text-lime-600`,
                  }}
                />
                <IconCompactButton
                  onClick={() => {
                    handleDeleteImage(id);
                  }}
                  icon={faTrash}
                  style={{
                    buttonParent: `text-orange-600`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
