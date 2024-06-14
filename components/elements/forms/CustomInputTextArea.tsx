import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const CustomInputTextArea: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <label className=" flex items-center gap-2">
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};

export default CustomInputTextArea;
