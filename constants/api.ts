namespace EndPoint {
  export const Read = {
    //　記事取得API
    ARTICLE_SINGLE: "/api/v1/read/articles/{article_id}",
    //　記事一覧取得API
    ARTICLE_LIST: "/api/v1/read/articles/list",
    //　ユーザー取得API
    USER: "/api/v1/read/manages/user",
    //　イメージリスト取得API
    IMAGE_LIST: "/api/v1/read/manages/images/list",
    //　タグ全取得API
    TAG: "/api/v1/read/tags",
    //　作品全取得API
    APPEARANCE: "/api/v1/read/appearances",
  };
  namespace Write {}
}

export { EndPoint };
