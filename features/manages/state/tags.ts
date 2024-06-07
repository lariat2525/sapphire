import { atom } from "recoil";
import { Tag } from "../types/tags";

// Define your Recoil state
export const tagState = atom<Tag[]>({
  key: "tagState",
  default: [],
});
