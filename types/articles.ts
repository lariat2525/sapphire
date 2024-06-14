import { User } from "@/features/manages/types/users";
import { Image } from "@/features/manages/types/images";

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
  description?: string; // タグの説明
  created_at: string; // タグの作成日時（ISO形式の文字列）
};

// 出演情報の詳細の型
type Appearance = {
  id: number; // 出演情報の一意識別子
  name: string; // 出演情報の名前
  jp_name: string; // 出演情報の日本語名
  description?: string; // 出演情報の説明
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
  description?: string; // タグの説明
  created_at: string; // 出演情報の作成日時（ISO形式の文字列）
};

// 記事情報を表す型
export type Article = {
  id: number; // 記事ID
  user_id: number; // ユーザーID
  title: string; // 記事のタイトル
  name: string; // 記事の名前
  preview: number; // PV数
  jp_name: string; // 記事の日本語名
  release_flg: boolean; // 公開フラグ
  sentence_enable_flg: boolean; // テキスト利用フラグ
  memo?: string; // 管理用メモ
  updated_at: string; // 記事の更新日時
  post_at: string; // 記事の投稿日時
  created_at: string; // 記事の作成日時
  images: Image[]; // 画像の配列
  monsters?: Monster; // モンスター情報
  tags: FormattedTag[]; // タグの配列
  appearances: FormattedAppearance[]; // 出演の配列
  user: User; // ユーザー情報
};

// モンスター情報を表す型
type Monster = {
  id: number; // モンスターID
  article_id: number; // 関連する記事のID
  name: string; // モンスターの名前
  jp_name: string; // モンスターの日本語名
  size: number; // モンスターのサイズ
  weight: number; // モンスターの重さ
  habitat: string; // モンスターの生息地
  strength_value: number | null; // モンスターの強さの値
  magic_power_value: number | null; // モンスターの魔力の値
  intelligence_value: number | null; // モンスターの知性の値
  risk_value: number | null; // モンスターの危険度の値
  rarity_value: number | null; // モンスターの希少度の値
  trait_text: string; // モンスターの特徴テキスト
  root_text: string; // モンスターの起源テキスト
  other_text: string;
  updated_at: string; // モンスターの更新日時
  created_at: string; // モンスターの作成日時
};

// 出演情報の詳細の型
export type CommonLabel = {
  id: number;
  name: string;
  jp_name: string;
  description?: string;
  main_flg?: boolean;
  created_at?: string;
};
