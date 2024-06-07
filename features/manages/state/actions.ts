import { atom } from "recoil";

// ジェネリック型を使用したイベントハンドラーの型定義
type Handler<T> = ((id: number, fields: { [key: string]: T }) => void) | null;

export const handlerArticleSingleState = atom<Handler<unknown>>({
  key: "handlerArticleSingleState",
  default: null,
});

export const handlerTagState = atom<Handler<unknown>>({
  key: "handlerTagState",
  default: null,
});

export const handlerAppearanceState = atom<Handler<unknown>>({
  key: "handlerAppearanceState",
  default: null,
});
