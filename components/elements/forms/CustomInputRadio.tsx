import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholders: { true: string; false: string };
};

const CustomInputRadio: React.FC<Props> = ({
  value,
  onChange,
  placeholders,
}) => {
  return (
    <>
      <label className="label cursor-pointer">
        <span className="label-text">{placeholders.true}</span>
        <input
          type="radio"
          name="radio-6"
          className="radio radio-warning"
          checked={value === true}
          onChange={onChange}
          value="true"
        />
      </label>
      <label className="label cursor-pointer">
        <span className="label-text">{placeholders.false}</span>
        <input
          type="radio"
          name="radio-6"
          className="radio border-rbg-slate-200"
          checked={value === false}
          onChange={onChange}
          value="false"
        />
      </label>
    </>
  );
};

export default CustomInputRadio;
