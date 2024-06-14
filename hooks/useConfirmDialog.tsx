import ConfirmAlert from "@/components/elements/alerts/ConfirmAlert";
import { useState } from "react";

type ConfirmDialogOptions = {
  text: string; // 確認ダイアログに表示するテキスト
  onConfirm: (confirmed: boolean) => void; // 確認ダイアログの結果を処理するためのコールバック関数
};

// useConfirmDialogフックを定義
export const useConfirmDialog = () => {
  // 確認ダイアログのオプションを状態として管理
  const [confirmDialogOptions, setConfirmDialogOptions] =
    useState<ConfirmDialogOptions | null>(null);

  // 確認ダイアログを表示する関数
  const showConfirmDialog = (options: ConfirmDialogOptions) => {
    setConfirmDialogOptions(options);
  };

  // 確認ダイアログのコンポーネント
  const ConfirmDialogComponent = confirmDialogOptions ? (
    <ConfirmAlert
      text={confirmDialogOptions.text}
      onConfirm={(confirmed: boolean) => {
        confirmDialogOptions.onConfirm(confirmed); // ユーザーの応答を処理
        setConfirmDialogOptions(null); // 確認ダイアログを閉じる
      }}
    />
  ) : null;

  return { showConfirmDialog, ConfirmDialogComponent };
};
