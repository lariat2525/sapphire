import {
  FormattedAppearance,
  FormattedTag,
} from "@/features/articles/types/articles";
import { atom } from "recoil";

// ManageArticleListイベントハンドラー格納
export const formImageIdState = atom<number>({
  key: "formImageIdState",
  default: -1,
});

// ManageArticleListイベントハンドラー格納
export const formActiveTagState = atom<FormattedTag[]>({
  key: "formActiveTagState",
  default: [],
});
// ManageArticleListイベントハンドラー格納
export const formActiveAppearanceState = atom<FormattedAppearance[]>({
  key: "formActiveAppearanceState",
  default: [],
});

// ManageArticleList選択モーダルID
export const selectIdState = atom<number>({
  key: "selectIdState",
  default: 0,
});
