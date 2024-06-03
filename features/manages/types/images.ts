// 画像情報を表す型
export type Image = {
  id: number; // 画像ID
  path: string; // 画像のパス
  alt: string; // 画像の代替テキスト
  created_at: string; // 画像の作成日時
  article_id: number; // 関連する記事のID
};
