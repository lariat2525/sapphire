import { Article } from "@/features/articles/types/articles";
import { Appearance } from "@/features/manages/types/appearances";
import { Tag } from "@/features/manages/types/tags";

export const articles = {
  id: 1,
  user_id: 1,
  title: "全知全能の神",
  name: "zeus",
  jp_name: "ゼウス",
  release_flg: false,
  preview: 0,
  sentence_enable_flg: true,
  memo: "saaaaaaaaaaaaaa",
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
    strength_value: 60,
    magic_power_value: 100,
    intelligence_value: 25,
    risk_value: 43,
    rarity_value: 17,
    trait_text: "ああああ",
    root_text: "いいいい",
    other_text: "うううう",
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
        path: "/test/test.svg",
        alt: "image alt",
        used_flg: false,
        created_at: "2024-05-01T12:00:00Z",
      },
      {
        id: 6,
        article_id: 5,
        path: "/test/test.svg",
        alt: "image alt",
        used_flg: false,
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
    sentence_enable_flg: true,
    memo: "saaaaaaaaaaaaaa",
    updated_at: "2024-05-01T12:00:00Z",
    post_at: "2024-05-01T12:00:00Z",
    created_at: "2024-05-01T12:00:00Z",
    tags: [
      {
        id: 1,
        main_flg: true,
        jp_name: "幽霊",
        name: "tag1",
        description:
          "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        created_at: "2024-05-01T12:00:00Z",
      },
      {
        id: 2,
        main_flg: false,
        jp_name: "妖怪",
        name: "tag2",
        description:
          "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        created_at: "2024-05-01T12:00:00Z",
      },
    ],
    appearances: [
      {
        id: 1,
        name: "appearance1",
        jp_name: "appearance1_en",
        description:
          "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        created_at: "2024-05-01T12:00:00Z",
      },
      {
        id: 2,
        name: "appearance2",
        jp_name: "appearance2_en",
        description:
          "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
        created_at: "2024-05-01T12:00:00Z",
      },
    ],
  },
];

export const appearances: Appearance[] = [
  {
    id: 1,
    jp_name: "ゲームオブスローンズ",
    name: "Game of Thrones",
    description: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
    created_at: "2024-05-01T12:00:00Z",
  },
  {
    id: 2,
    jp_name: "ガガ",
    name: "gaga",
    description: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
    created_at: "2024-05-07T12:00:00Z",
  },
];

export const tags: Tag[] = [
  {
    id: 1,
    name: "apple",
    jp_name: "アップル",
    main_flg: true,
    description: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
    created_at: "2024-05-02T12:00:00Z",
  },
  {
    id: 2,
    name: "lemon",
    jp_name: "レモン",
    main_flg: false,
    description: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
    created_at: "2024-05-01T08:30:00Z",
  },
  {
    id: 3,
    name: "banana",
    jp_name: "バナナ",
    main_flg: false,
    description: "コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ",
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
    id: 2,
    username: "Tanaka",
    created_at: "2024-05-13T06:14:06.905Z",
  },
];

export const sentences = [
  {
    sentence:
      "特定のブランチで .gitignore の内容を他のブランチとは異なる状態に保ちたい場合、Gitのブランチ管理を利用することで実現できます。以下の手順で進めてください。",
    enable_flg: false,
  },

  { sentence: "まず、特定のブランチに切り替えます。", enable_flg: false },

  {
    sentence:
      "この .gitignore の変更はこのブランチにのみ適用され、他のブランチには影響を与えません。必要に応じて、他のブランチに切り替えても .gitignore はそのブランチの状態のままです。",
    enable_flg: true,
  },

  {
    sentence:
      "必要に応じて、特定のブランチでは .gitignore に含めたくないファイルがある場合、それらのファイルを .git/info/exclude に追加することもできます。これはリポジトリ全体には影響しないローカルな設定です。",
    enable_flg: true,
  },
  { sentence: "sasasaasass", enable_flg: true },
];

export const configs = { username: "ura" };

export const images = [
  {
    id: 1,
    article_id: 5,
    path: "/test/test.svg",
    alt: "image alt",
    used_flg: false,
    created_at: "2024-05-01T12:00:00Z",
  },
  {
    id: 40,
    article_id: 5,
    path: "/test/test2.svg",
    alt: "test",
    used_flg: true,
    created_at: "2024-05-01T12:00:00Z",
  },
];
