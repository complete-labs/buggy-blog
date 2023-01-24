import { ButtonHTMLAttributes, memo } from "react";

const Button = ({
  type,
  name,
  disabled,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={
        disabled
          ? "bg-accent-1 text-gray"
          : "bg-black" +
            " hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
      }
      type={type}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default memo(Button);
