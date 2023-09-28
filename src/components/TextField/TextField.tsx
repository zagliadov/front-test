import React, { InputHTMLAttributes, FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  errors: Record<string, any>;
  label: string;
  propertyName: string;
  defaultValue: string;
  type?: string;
}

export const TextField: FC<TextFieldProps> = ({
  register,
  errors,
  label,
  propertyName,
  defaultValue,
  type = "text",
}) => {
  return (
    <div className="relative rounded-lg shadow-sm">
      <label className="text-gray-400 text-sm">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        {...register(propertyName, {
          required: true,
        })}
        className="block w-full pt-3 pb-3 rounded-lg border-0 pl-3 text-gray-900 ring-1 ring-inset"
      />
      {errors[propertyName] && (
        <span className="absolute">This field is required</span>
      )}
    </div>
  );
};
