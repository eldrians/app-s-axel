"use client";
import { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  colorHover?: string;
};

const Button = ({
  text,
  btnType,
  handleClick,
  color = "bg-greenApp",
  colorHover = "hover:bg-darkGreenApp",
}: ButtonProps) => {
  return (
    <button
      className={`py-3 px-10 ${color} ${colorHover} rounded-full`}
      onClick={handleClick}
      type={btnType}
    >
      <span className="text-whiteApp font-semibold">{text}</span>
    </button>
  );
};

export default Button;
