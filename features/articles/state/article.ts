import { atom } from "recoil";
import { Article } from "@/features/articles/types/articles";

export const articlesState = atom<Article>({
  key: "articlesState",
  default: {
    id: 0,
    user_id: 0,
    title: "",
    name: "",
    jp_name: "",
    release_flg: false,
    updated_at: "",
    post_at: "",
    created_at: "",
    images: [],
    monsters: {
      id: 0,
      article_id: 0,
      name: "",
      jp_name: "",
      size: 0,
      weight: 0,
      habitat: "",
      strength_value: 0,
      magic_power_value: 0,
      intelligence_value: 0,
      risk_value: 0,
      rarity_value: 0,
      trait_text: "",
      root_text: "",
      weakness_text: "",
      updated_at: "",
      created_at: "",
    },
    tags: [],
    appearances: [],
    user: {
      id: 0,
      username: "",
      created_at: "",
    },
  },
});
