import { atom } from "recoil";
import { User } from "@/features/manages/types/user";

// Define your Recoil state
export const userState = atom<User[]>({
  key: "userState",
  default: [],
});
