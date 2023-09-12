import React, { InputHTMLAttributes, FC, ChangeEvent, useState } from "react";
import { FormPropertyData } from "../PropertyDetailForm/interface";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  autoComplete: string;
  placeholder: string;
  label: string;
  setter: any;
  property: string;
  classes?: string;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  id,
  autoComplete,
  placeholder,
  label,
  setter,
  property,
  classes,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isInputValid =
      value.length >= 4 && /^[a-zA-Z0-9\s]*$/.test(value);

    setIsValid(isInputValid);
    setInputValue(value);

    if (isInputValid) {
      setter((prevState: FormPropertyData) => ({
        ...prevState,
        [property]: value,
      }));
    }
  };

  return (
    <div className={`${classes}`}>
      <div className={`relative rounded-lg shadow-sm`}>
        <div>
          <label className="text-gray-400 text-sm" htmlFor={name}>
            {label}
          </label>
          <input
            type="text"
            name={name}
            id={id}
            value={inputValue}
            onChange={handleInputChange}
            autoComplete={autoComplete}
            className={`block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ${
              isValid ? "ring-gray-300" : "ring-red-500"
            } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
              isValid ? "focus:ring-indigo-600" : "focus:ring-red-500"
            } sm:text-sm sm:leading-6`}
            placeholder={placeholder}
            required
          />
        </div>
        {!isValid && <span className="text-red-500 text-xs absolute left-5">{name} must have a min of 4 characters</span>}
      </div>
    </div>
  );
};
