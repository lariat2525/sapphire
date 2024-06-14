import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: IconProp;
  children?: React.ReactNode;
  style?: {
    backgroundColor?: string;
    hoverColor?: string;
    textColor?: string;
    widthPadding?: string;
    buttonParent?: string;
    buttonChild?: string;
  };
};

const IconCompactButton: React.FC<Props> = ({
  onClick,
  icon,
  children = "",
  style = {},
}) => {
  return (
    <button onClick={onClick} className={` ${style.buttonParent}`}>
      <div tabIndex={0} className={`text-xs ${style.buttonChild}`}>
        <FontAwesomeIcon icon={icon} />
        {children}
      </div>
    </button>
  );
};

export default IconCompactButton;
