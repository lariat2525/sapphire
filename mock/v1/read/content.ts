export const articles = {
  id: 5,
  image: {
    id: 6,
    path: "/image/path",
    alt: "image alt",
  },
  article: {
    id: 7,
    username: "username",
  },
  title: "title",
  en_name: "english name",
  preview: "preview text",
  release_flg: true,
  updated_at: "2024-05-01T12:00:00Z",
  post_at: "2024-05-01T12:00:00Z",
  created_at: "2024-05-01T12:00:00Z",
  tags: [
    {
      id: 1,
      name: "tag1",
    },
    {
      id: 2,
      name: "tag2",
    },
  ],
  appearances: [
    {
      id: 1,
      name: "appearance1",
      en_name: "appearance1_en",
    },
    {
      id: 2,
      name: "appearance2",
      en_name: "appearance2_en",
    },
  ],
  monsters: {
    id: 13,
    name: "monster name",
    jp_name: "モンスター名",
    size: 100,
    weight: 50,
    habitat: "habitat",
    strength_value: 80,
    magic_power_value: 60,
    intelligence_value: 70,
    risk_value: 40,
    rarity_value: 90,
    trait_text: "trait text",
    root_text: "root text",
    weakness_text: "weakness text",
  },
};

export const articleList = [
  {
    id: 1,
    image: {
      id: 5,
      path: "/image/path",
      alt: "image alt",
    },
    article: {
      id: 6,
      username: "username",
    },
    title: "title",
    en_name: "english name",
    preview: "preview text",
    release_flg: true,
    updated_at: "2024-05-01T12:00:00Z",
    post_at: "2024-05-01T12:00:00Z",
    created_at: "2024-05-01T12:00:00Z",
    tags: [
      {
        id: 1,
        name: "tag1",
      },
      {
        id: 2,
        name: "tag2",
      },
    ],
    appearances: [
      {
        id: 1,
        name: "appearance1",
        en_name: "appearance1_en",
      },
      {
        id: 2,
        name: "appearance2",
        en_name: "appearance2_en",
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
