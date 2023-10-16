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
      className={`py-2.5 md:py-3 lg:py-3 px-4 md:px-10 bg-gradient-to-br from-green-500 to-darkGreenApp 
      text-xs lg:text-sm rounded-xl focus:from-darkApp focus:to-darkGreenApp hover:from-darkGreenApp hover:to-darkGreenApp 
      transition duration-300 shadow-xl group`}
      onClick={handleClick}
      type={btnType}
    >
      <span className="text-whiteApp group-hover:font-bold font-medium ">
        {text}
      </span>
    </button>
  );
};

export default Button;
