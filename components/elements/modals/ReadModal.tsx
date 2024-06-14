import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  children: ReactNode;
}

const ReadModal: React.FC<ModalProps> = ({ isVisible, modalRef, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        ref={modalRef}
        className="OverRay relative w-3/4 h-3/4 bg-white p-6 rounded-lg shadow-lg z-40"
      >
        {children}
      </div>
    </div>
  );
};

export default ReadModal;
