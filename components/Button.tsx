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
      className={`py-2 md:py-3 lg:py-3 px-6 md:px-10 bg-gradient-to-br from-green-500 to-darkGreenApp 
      text-xs md:text-sm lg:text-sm rounded-xl focus:bg-green-900 shadow-xl`}
      onClick={handleClick}
      type={btnType}
    >
      <span className="text-whiteApp font-medium">{text}</span>
    </button>
  );
};

export default Button;
