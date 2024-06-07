import React from "react";

type Props = {
  items: { id: string | number; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CustomInputSelectBox: React.FC<Props> = ({ items, onChange }) => {
  return (
    <select className="select select-bordered w-full" onChange={onChange}>
      {items.map(({ id, label }, index) => {
        return (
          <option key={index} value={id}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default CustomInputSelectBox;
