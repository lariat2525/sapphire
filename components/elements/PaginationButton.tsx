"use client";

import { useRouter } from "next/navigation"; // useRouterを追加

type Props = {
  field: {
    id: string;
  };
};

/* TSX */
export default function PaginationButton({ field }: Props) {
  const router = useRouter(); // useRouterの初期化

  const buttonPage = () => {
    const handleClick = () => {
      const newParams = new URLSearchParams(window.location.search);
      newParams.set("page", field.id);
      router.push(`?${newParams.toString()}`);
    };

    return (
      <div className="join shadow shadow-gray-300">
        <button
          className="join-item btn btn-xs border border-black bg-white btn-active"
          onClick={handleClick} // onClickイベントハンドラーを追加
        >
          {field.id}
        </button>
      </div>
    );
  };

  return <>{buttonPage()}</>;
}
