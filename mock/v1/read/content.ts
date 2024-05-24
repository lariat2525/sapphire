import { Article } from "@/features/articles/types/articles";

export const articles = {
  id: 1,
  user_id: 1,
  title: "全知全能の神",
  name: "zeus",
  jp_name: "ゼウス",
  release_flg: false,
  updated_at: "2024-05-13T06:14:06.961Z",
  post_at: "2024-05-13T06:14:06.966Z",
  created_at: "2024-05-13T06:14:06.961Z",
  images: [
    {
      id: 1,
      path: "/goblin.png",
      alt: "goblin",
      created_at: "2024-05-13T06:14:07.011Z",
      article_id: 1,
    },
  ],
  monsters: {
    id: 1,
    article_id: 1,
    name: "goblin",
    jp_name: "ゴブリン",
    size: 150,
    weight: 80,
    habitat: "オランダ",
    strength_value: 6,
    magic_power_value: 1,
    intelligence_value: 2,
    risk_value: 4,
    rarity_value: 1,
    trait_text: "ああああ",
    root_text: "いいいい",
    weakness_text: "うううう",
    updated_at: "2024-05-13T06:14:07.075Z",
    created_at: "2024-05-13T06:14:07.075Z",
  },
  tags: [
    {
      id: 1,
      name: "god",
      jp_name: "神",
      created_at: "2024-05-13T06:14:07.044Z",
      main_flg: true,
    },
    {
      id: 2,
      name: "UMA",
      jp_name: "UMA",
      created_at: "2024-05-13T06:14:07.044Z",
      main_flg: false,
    },
  ],
  appearances: [
    {
      id: 1,
      name: "Game Of Thrones",
      jp_name: "ゲームオブスローンズ",
      created_at: "2024-05-13T06:14:07.115Z",
    },
  ],
  user: {
    id: 1,
    username: "Ura",
    created_at: "2024-05-13T06:14:06.905Z",
  },
};

export const articleList: Article[] = [
  {
    id: 1,
    user_id: 2,
    images: [
      {
        id: 5,
        article_id: 5,
        path: "/image/path",
        alt: "image alt",
        created_at: "2024-05-01T12:00:00Z",
      },
    ],
    user: {
      id: 6,
      username: "username",
      created_at: "2024-05-01T12:00:00Z",
    },
    title: "海外の有名SNSシェアボタンsasasa",
    jp_name: "レネクトン",
    name: "renekton",
    preview: 6214,
    release_flg: true,
    updated_at: "2024-05-01T12:00:00Z",
    post_at: "2024-05-01T12:00:00Z",
    created_at: "2024-05-01T12:00:00Z",
    tags: [
      {
        id: 1,
        main_flg: true,
        jp_name: "幽霊",
        name: "tag1",
        created_at: "2024-05-01T12:00:00Z",
      },
      {
        id: 2,
        main_flg: false,
        jp_name: "妖怪",
        name: "tag2",
        created_at: "2024-05-01T12:00:00Z",
      },
    ],
    appearances: [
      {
        id: 1,
        name: "appearance1",
        jp_name: "appearance1_en",
        created_at: "2024-05-01T12:00:00Z",
      },
      {
        id: 2,
        name: "appearance2",
        jp_name: "appearance2_en",
        created_at: "2024-05-01T12:00:00Z",
      },
    ],
  },
];

export const appearances = [
  {
    id: 2,
    name: "スローン",
    en_name: "thrones",
    created_at: "2024-05-01T12:00:00Z",
  },
  {
    id: 1,
    name: "ガガ",
    en_name: "gaga",
    created_at: "2024-05-07T12:00:00Z",
  },
];

export const tags = [
  {
    id: 1,
    name: "タグ名1",
    created_at: "2024-05-02T12:00:00Z",
  },
  {
    id: 2,
    name: "タグ名2",
    created_at: "2024-05-01T08:30:00Z",
  },
  {
    id: 3,
    name: "タグ名3",
    created_at: "2024-04-30T15:45:00Z",
  },
];

export const rankings = [
  {
    id: 1,
    image: {
      id: 1,
      path: "/path/to/image1.jpg",
      alt: "Image 1",
    },
    article: {
      id: 1,
      username: "user1",
    },
    title: "ブログタイトル1",
    en_name: "Blog Title 1",
    preview: "ブログのプレビュー1",
    release_flg: true,
    updated_at: "2024-05-02T12:00:00Z",
    post_at: "2024-05-01T08:30:00Z",
    created_at: "2024-04-30T15:45:00Z",
    tags: [
      {
        id: 1,
        name: "タグ名1",
      },
      {
        id: 2,
        name: "タグ名2",
      },
    ],
    appearances: [
      {
        id: 1,
        name: "出演者名1",
        en_name: "Performer Name 1",
      },
      {
        id: 2,
        name: "出演者名2",
        en_name: "Performer Name 2",
      },
    ],
  },
  {
    id: 2,
    image: {
      id: 2,
      path: "/path/to/image2.jpg",
      alt: "Image 2",
    },
    article: {
      id: 2,
      username: "user2",
    },
    title: "ブログタイトル2",
    en_name: "Blog Title 2",
    preview: "ブログのプレビュー2",
    release_flg: true,
    updated_at: "2024-05-01T10:00:00Z",
    post_at: "2024-04-30T12:00:00Z",
    created_at: "2024-04-29T18:30:00Z",
    tags: [
      {
        id: 3,
        name: "タグ名3",
      },
      {
        id: 4,
        name: "タグ名4",
      },
    ],
    appearances: [
      {
        id: 3,
        name: "出演者名3",
        en_name: "Performer Name 3",
      },
      {
        id: 4,
        name: "出演者名4",
        en_name: "Performer Name 4",
      },
    ],
  },
];

export const category = [
  {
    id: 1,
    en_name: "Blog Header 1",
    tags: [
      {
        id: 1,
        name: "Tag 1",
      },
      {
        id: 2,
        name: "Tag 2",
      },
    ],
  },
  {
    id: 2,
    en_name: "Blog Header 2",
    tags: [
      {
        id: 3,
        name: "Tag 3",
      },
      {
        id: 4,
        name: "Tag 4",
      },
    ],
  },
];

export const users = [
  {
    id: 1,
    username: "Ura",
    created_at: "2024-05-13T06:14:06.905Z",
  },
  {
    id: 1,
    username: "Tanaka",
    created_at: "2024-05-13T06:14:06.905Z",
  },
];
