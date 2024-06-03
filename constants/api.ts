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
  };
  namespace Write {}
}

export { EndPoint };
