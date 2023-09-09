import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  id: string;
  autoComplete: string;
  placeholder: string;
  label: string;
  classes?: string;
}

export function TextField({ type = "text", name, id, autoComplete, placeholder, label, classes, ...restProps }: TextFieldProps) {
  return (
    <div className={`${classes}`}>
      <div className="relative rounded-lg shadow-sm">
        <div className="">
          <label className="text-gray-400 text-sm" htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            className="block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            required
            {...restProps}
          />
        </div>
      </div>
    </div>
  );
}


