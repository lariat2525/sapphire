"use client";

// TODO: childrenのtype

type Props = {
  field: {
    id: string;
  };
};

/* TSX */
export default function PaginationButton({ field }: Props) {
  const buttonPage = () => {
    return (
      <button className="join-item btn btn-xs border border-black bg-white btn-active">
        {field.id}
      </button>
    );
  };

  return (
    <>
      <div className="join shadow shadow-gray-300">{buttonPage()}</div>
    </>
  );
}
