"use client";
import { useState } from "react";
import IconCompactButton from "@/features/manages/components/IconCompactButton";
import useGetImageList from "@/features/manages/hooks/useGetImageList";
import { useRecoilState } from "recoil";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { imagesState } from "@/features/manages/state/images";
import SearchBox from "@/components/elements/SearchBox";
import CustomInputSelectBox from "@/components/elements/forms/CustomInputSelectBox";
import DropMenuOption from "@/features/manages/components/DropMenuOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useConfirmDialog } from "@/hooks/useConfirmDialog";
import { useReadModal } from "@/hooks/useReadModal"; // カスタムフックをインポート
import ReadModal from "@/components/elements/modals/ReadModal";

const SelectBoxItems = [
  { id: 0, label: "新しい順" },
  { id: 1, label: "古い順" },
  { id: 2, label: "使用中で絞る" },
  { id: 4, label: "未使用で絞る" },
];

/* TSX */
export default function Images() {
  // 画像取得API呼び出し
  useGetImageList();

  const [images, setImages] = useRecoilState(imagesState);
  const [selectImageCardId, setSelectImageCardId] = useState<number | null>(
    null
  );
  const [keyword, setKeyword] = useState<string>("");

  // ２択ダイアログカスタムフック
  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog();
  // 読み取り専用モーダルカスタムフック
  const { isVisible, openModal, modalRef } = useReadModal();

  const handleSearch = (searchKeyword: string) => {
    setKeyword(searchKeyword);
    // TODO: 検索API
  };

  const handleSelectImageCards = (id: number) => {
    setSelectImageCardId(id);
    openModal();
  };

  const handleDeleteImage = (id: number) => {
    showConfirmDialog({
      text: "画像を削除してもいいですか？",
      onConfirm: (confirmed) => {
        if (confirmed) {
          deleteImage(id);
        }
      },
    });
  };

  const deleteImage = async (id: number) => {
    // TODO: API接続
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="Board relative">
      {ConfirmDialogComponent}
      <ReadModal
        isVisible={isVisible && selectImageCardId !== null}
        modalRef={modalRef}
      >
        <img
          className="h-full w-full"
          src={
            images.find((image) => image.id === selectImageCardId)?.path || ""
          }
          alt=""
        />
      </ReadModal>
      <div className="Filters w-full h-12 mb-10 flex justify-center items-center">
        <div className="Search w-1/3">
          <SearchBox
            placeholder="画像を検索"
            onSearch={handleSearch}
            initialKeyword={keyword}
          />
        </div>
        <div className="Radio w-1/3 flex gap-4 ml-4">
          {/* TODO: API接続 絞り込み */}
          <CustomInputSelectBox items={SelectBoxItems} onChange={() => {}} />
        </div>
        <div className="Radio flex gap-4 ml-4">
          <DropMenuOption>
            <li className="rounded hover:bg-slate-500 hover:text-white">
              <p className="p-0">
                <FontAwesomeIcon icon={faPlus} />
                Create
              </p>
            </li>
          </DropMenuOption>
        </div>
      </div>
      <div className="Images flex flex-wrap justify-center gap-y-4 gap-x-2">
        {images?.map(({ id, path, alt, used_flg }, index) => (
          <div
            key={index}
            className="w-1/5 flex flex-col items-center rounded border-solid border-2 py-2 shadow cursor-pointer"
          >
            {used_flg ? (
              <div className="badge badge-neutral text-xs">OFFLINE</div>
            ) : (
              <div className="badge badge-accent text-xs">ONLINE</div>
            )}
            <div
              onClick={() => handleSelectImageCards(id)}
              className="stat-figure text-secondary"
            >
              <div className="avatar">
                <div className="w-36 rounded">
                  <img width={80} height={80} src={path} alt={alt} />
                </div>
              </div>
            </div>
            <div className="stat-desc">No.{id}</div>
            <div className="flex gap-x-2">
              <div className="stat-value text-sm">{alt}</div>
              <IconCompactButton
                onClick={() => handleDeleteImage(id)}
                icon={faTrash}
                style={{ buttonParent: `text-orange-600` }}
              />
            </div>
            <div className="stat-desc">created 2020/03/11</div>
          </div>
        ))}
      </div>
    </div>
  );
}
