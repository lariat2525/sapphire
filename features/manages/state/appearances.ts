import { atom } from "recoil";
import { Appearance } from "../types/appearances";

// Define your Recoil state
export const appearanceState = atom<Appearance[]>({
  key: "appearanceState",
  default: [],
});
