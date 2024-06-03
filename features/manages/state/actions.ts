import { atom } from "recoil";

// ManageArticleList選択モーダルID
export const selectingIdState = atom<number>({
  key: "selectingIdState",
  default: -1,
});

// ManageArticleListイベントハンドラー格納
export const handlerArticleSingleState = atom<
  | ((id: number, fields: { [key: string]: string | number | boolean }) => void)
  | null
>({
  key: "handlerArticleSingleState",
  default: null,
});

// ManageArticleListイベントハンドラー格納
export const selectingImageIdState = atom<number>({
  key: "selectingImageIdState",
  default: -1,
});
