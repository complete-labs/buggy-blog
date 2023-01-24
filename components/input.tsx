import { InputHTMLAttributes, memo } from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="border border-gray-400 p-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default memo(Input);
