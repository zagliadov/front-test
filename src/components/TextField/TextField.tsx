import React, { InputHTMLAttributes, FC } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  autoComplete: string;
  placeholder: string;
  label: string;
  setter: (value: string) => void;
  property: string;
  classes?: string;
}

export const TextField: FC<TextFieldProps> = ({ name, id, autoComplete, placeholder, label, setter, property, classes }) => {
  return (
    <div className={`${classes}`}>
      <div className="relative rounded-lg shadow-sm">
        <div>
          <label className="text-gray-400 text-sm" htmlFor={name}>{label}</label>
          <input
            type="text"
            name={name}
            id={id}
            value={property}
            onChange={(e) => setter(e.target.value)}
            autoComplete={autoComplete}
            className="block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}


