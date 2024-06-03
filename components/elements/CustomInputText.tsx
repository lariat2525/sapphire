import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const CustomInputText: React.FC<Props> = ({
  icon,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 opacity-70" />
      <input
        type="text"
        className="grow"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default CustomInputText;
