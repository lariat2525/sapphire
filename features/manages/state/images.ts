import { atom } from "recoil";
import { Image } from "@/features/manages/types/images";

// Define your Recoil state
export const imagesState = atom<Image[]>({
  key: "imagesState",
  default: [],
});
