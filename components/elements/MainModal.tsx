"use client";
import React from "react";

type Props = { modalId: string; children: React.ReactNode };

const MainModal = ({ modalId, children }: Props) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default MainModal;
