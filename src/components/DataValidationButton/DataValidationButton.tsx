"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FormPropertyData, NestedData } from "../PropertyDetailForm/interface";

interface IProps {
  formPropertyData: FormPropertyData;
  from: string;
}

export default function DataValidationButton({
  formPropertyData,
  from,
}: IProps) {
  const router = useRouter();

  const dataValidation = () => {
    if (
      !formPropertyData.propertyName ||
      !formPropertyData.addressLine ||
      !formPropertyData.selectedCountry ||
      !formPropertyData.selectedCity ||
      !formPropertyData.postalCode ||
      !formPropertyData.startDate
    ) {
      alert("Please fill in all the fields");
      return;
    }

    const nestedObject: NestedData = {};
    switch (from) {
      case "propertyPage":
        nestedObject[from] = formPropertyData;
        localStorage.setItem("Data", JSON.stringify(nestedObject));
        router.push("/unit-mix");
        break;
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={dataValidation}
        className="bg-teal-950 text-white px-5 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
