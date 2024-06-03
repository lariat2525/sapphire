"use client";
import React from "react";

type Props = {
  modalId: string;
  children: React.ReactNode;
  customModalStyle?: string;
};

const MainModal = ({ modalId, children, customModalStyle = "" }: Props) => {
  return (
    <dialog id={modalId} className="modal">
      <div className={`modal-box ${customModalStyle}`}>{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default MainModal;
