import { atom } from "recoil";
import { Article } from "@/features/articles/types/articles";

export const articleListState = atom<Article[]>({
  key: "articleListState",
  default: [],
});
