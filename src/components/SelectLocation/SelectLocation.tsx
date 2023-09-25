import { ICity, ICountry } from "@/helpers/interface";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface ISelectLocationProps {
  register: UseFormRegister<any>;
  errors: Record<string, any>;
  label: string;
  propertyName: string;
  option?: ICountry[] | ICity[];
  defaultValue: string;
};

export const SelectLocation: FC<ISelectLocationProps> = ({
  register,
  errors,
  label,
  propertyName,
  option,
  defaultValue,
}) => {
  return (
    <div className="relative rounded-lg shadow-sm w-4/12">
      <label className="text-gray-400 text-sm">{label}</label>
      <select
        {...register(propertyName)}
        defaultValue={defaultValue}
        className="block pt-3 pb-3.5 rounded-lg border-0 px-2 w-full text-gray-900 ring-1 ring-inset"
      >
        {option &&
          option.map(({ label, value }: ICountry | ICity) => {
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          })}
      </select>
      {errors[propertyName] && <span className="absolute">This field is required</span>}
    </div>
  );
};
