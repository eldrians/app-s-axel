import React, { ChangeEvent } from "react";

type InputTextProps = {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const InputText = ({
  label,
  placeholder,
  id,
  name,
  value,
  onChange,
}: InputTextProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        id="urlSheet"
        className="text-xs font-semibold text-darkApp/80 ml-2"
      >
        {label}
        <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="py-3 px-2 bg-whiteApp border border-gray-300
                      text-darkApp
                      text-sm
                      focus:outline-none
                      focus:ring-[0.5px]
                      focus:ring-greenApp
                      rounded-lg w-full "
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        // value={urlSheet}
        // onChange={handleUrlSheetChange}
      />
    </div>
  );
};

export default InputText;
