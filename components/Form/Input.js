import { useState } from "react";

const Input = ({ type, name, placeholder, onChange, value, isRequired }) => {
  return (
    <input
      className="shadow-inner h-10 w-[100%] p-6 rounded-lg text-left mb-[30px]
        my-4 focus:outline-none placeholder:text-center placeholder: font-medium placeholder:text-purple-400
        "
      name={name}
      type={type}
      placeholder={placeholder}
      required={isRequired}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
