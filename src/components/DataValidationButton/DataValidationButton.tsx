"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPropertyData } from "../PropertyDetailForm/interface";
import { object, string, date, minLength, parse, toTrimmed } from "valibot";

const PropertyFormSchema = object({
  propertyName: string("Property name must be a string.", [
    toTrimmed(),
    minLength(5, "Please enter a property name"),
  ]),
  addressLine: string("Address line must be a string", [
    toTrimmed(),
    minLength(5, "Please enter address line"),
  ]),
  selectedCountry: string("Please select a country"),
  selectedCity: string("Please select a city"),
  postalCode: string("Please enter a postal code"),
  startDate: date(),
});
interface IProps {
  formPropertyData: FormPropertyData;
  from: string;
}
interface NestedData {
  [key: string]: FormPropertyData;
}
export default function DataValidationButton({
  formPropertyData,
  from,
}: IProps) {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const router = useRouter();
  const dataValidation = () => {
    const nestedObject: NestedData = {};
    switch (from) {
      case "propertyPage":
        nestedObject[from] = parse(PropertyFormSchema, formPropertyData);
        localStorage.setItem("Data", JSON.stringify(nestedObject));
        router.push("/unit-mix");
        setIsDisabled(false);
        break;
    }
  };
  return (
    <div className="flex justify-end">
      <button
        disabled={isDisabled}
        onClick={dataValidation}
        className="bg-teal-950 text-white px-5 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
