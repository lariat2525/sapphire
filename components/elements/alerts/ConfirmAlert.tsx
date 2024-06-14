import React from "react";

type Props = {
  text: string;
  onConfirm: (result: boolean) => void;
};

const ConfirmAlert: React.FC<Props> = ({ text, onConfirm }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex z-50 justify-center">
      <div role="alert" className="alert w-1/2 h-16 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{text}</span>
        <div className="flex gap-1">
          <button className="btn btn-sm" onClick={() => onConfirm(false)}>
            Deny
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onConfirm(true)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
