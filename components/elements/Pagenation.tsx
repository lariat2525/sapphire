"use client";

// TODO: childrenのtype

/* TSX */
export default function Pagination() {
  return (
    <>
      <div className="join shadow shadow-gray-300">
        <button className="join-item btn btn-xs border border-black bg-white">
          1
        </button>
        <button className="join-item btn btn-xs border border-black bg-white btn-active">
          2
        </button>
        <button className="join-item btn btn-xs border border-black bg-white">
          3
        </button>
        <button className="join-item btn btn-xs border border-black bg-white">
          4
        </button>
      </div>
    </>
  );
}
