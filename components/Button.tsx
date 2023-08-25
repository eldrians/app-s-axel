type ButtonProps = {
  text: string;
  color?: string;
  colorHover?: string;
};

const Button = ({
  text,
  color = "bg-greenApp",
  colorHover = "bg-darkGreenApp",
}: ButtonProps) => {
  return (
    <button className={`py-3 px-10 ${color}  hover:${colorHover} rounded-full`}>
      <span className="text-whiteApp font-semibold">{text}</span>
    </button>
  );
};

export default Button;
