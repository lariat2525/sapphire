import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IconButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: IconProp;
  children?: React.ReactNode;
  style?: {
    buttonParent?: string;
    buttonChild?: string;
  };
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  children = "",
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`dropdown btn px-3 border-1 border-slate-400 ${style.buttonParent} text-nowrap min-h-6 h-1`}
    >
      <div tabIndex={0} className={`text-xs ${style.buttonChild}`}>
        <FontAwesomeIcon icon={icon} />
        {children}
      </div>
    </button>
  );
};

export default IconButton;
