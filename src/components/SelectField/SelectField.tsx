import React, { SelectHTMLAttributes } from 'react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  id: string;
  label: string;
  options: { value: string; label: string }[];
  classes?: string;
}

export function SelectField({ name, id, label, options, classes }: SelectFieldProps) {
  return (
    <div className={`${classes}`}>
      <div className="relative rounded-lg shadow-sm">
        <div className="">
          <label className="text-gray-400 text-sm" htmlFor={name}>
            {label}
          </label>
          <select
            name={name}
            id={id}
            className="block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
