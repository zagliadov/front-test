import { formatDate } from "@/helpers/helpers";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

interface ICustomDateInput {
  register: UseFormRegister<any>;
  value: Date;
  propertyName: string;
}
export const CustomDateInput: FC<ICustomDateInput> = ({ register, value, propertyName}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute left-2 top-2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
      <input
        className="pl-8 pr-4 py-3 w-full rounded-lg border-gray-300 ring-1 ring-inset"
        value={formatDate(value)}
        {...register(propertyName, { required: true })}
      />
    </>
  );
};
