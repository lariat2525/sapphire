import { atom } from "recoil";
import { ArticleList } from "@/features/articles/types/articles";

export const articleListState = atom<ArticleList>({
  key: "articleListState",
  default: { list: [], totalCount: 0 },
});
