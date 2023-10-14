import React, { ChangeEventHandler } from "react";

type InputDropdownProps = {
  label?: string;
  id?: string;
  name?: string;
  option: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const InputDropdown = ({
  label = "",
  option,
  id,
  name,
  onChange,
}: InputDropdownProps) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <label
          id="urlSheet"
          className="text-xs font-semibold text-darkApp/80 ml-2"
        >
          {label}
        </label>
        <select
          name={name}
          id={id}
          className="py-3 px-2 bg-whiteApp border border-gray-300
                        text-darkApp/70
                        text-sm
                        focus:outline-none
                        focus:ring-[0.5px]
                        focus:ring-greenApp
                        rounded-lg w-full"
          onChange={onChange}
          required
        >
          {option.map((option, index) => (
            <option className="text-darkApp/70" value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputDropdown;
