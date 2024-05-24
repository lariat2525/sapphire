import { atom } from "recoil";

// Define your Recoil state
export const globalState = atom({
  key: "globalState",
  default: {
    path: "",
  },
});
