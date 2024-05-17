// APIレスポンスとして使用される記事タグの型
export type ResponseArticleTag = {
  id: number; // タグの一意識別子
  article_id: number; // 関連する記事のID
  main_flg: boolean; // メインタグかどうかを示すフラグ
  tag_id: number; // タグのID
  tags: Tag; // タグの詳細情報
};

// タグの詳細情報の型
type Tag = {
  id: number; // タグの一意識別子
  name: string; // タグの名前
  jp_name: string; // タグの日本語名
  created_at: Date; // タグの作成日時
};

// フォーマット後のタグの型
export type FormattedTag = {
  id: number; // タグの一意識別子
  main_flg: boolean; // メインタグかどうかを示すフラグ
  name: string; // タグの名前
  jp_name: string; // タグの日本語名
  created_at: string; // タグの作成日時（ISO形式の文字列）
};

// 出演情報の詳細の型
type Appearance = {
  id: number; // 出演情報の一意識別子
  name: string; // 出演情報の名前
  jp_name: string; // 出演情報の日本語名
  created_at: Date; // 出演情報の作成日時
};

// APIレスポンスとして使用される出演情報の型
export type ResponseAppearance = {
  id: number; // 出演情報の一意識別子
  article_id: number; // 関連する記事のID
  appearance_id: number; // 出演情報のID
  appearances: Appearance; // 出演情報の詳細
};

// フォーマット後の出演情報の型
export type FormattedAppearance = {
  id: number; // 出演情報の一意識別子
  name: string; // 出演情報の名前
  jp_name: string; // 出演情報の日本語名
  created_at: string; // 出演情報の作成日時（ISO形式の文字列）
};
