"use client";

import React, { useState } from "react";
import DataValidationButton from "../DataValidationButton/DataValidationButton";
import DateInput from "../DateInput/DateInput";
import LocationSelector from "../LocationSelector/LocationSelector";
import { TextField } from "../TextField/TextField";
import { FormPropertyData, NestedData } from "./interface";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function PropertyDetailForm() {
  const [value, setValue] = useLocalStorage("Data", {} as NestedData);
  const propertyPage = value?.propertyPage;
  
  const defaultFormPropertyData: FormPropertyData = {
    propertyName: "",
    addressLine: "",
    selectedCountry: null,
    selectedCity: null,
    postalCode: "",
    startDate: new Date(),
  };
  
  const [formPropertyData, setFormPropertyData] = useState<FormPropertyData>(
    propertyPage || defaultFormPropertyData
  );

  return (
    <>
      <div>
        <h2 className="font-semibold text-xl text-black">Property details</h2>
        <h3 className="font-medium text-lg pt-5 text-black">Property Detail</h3>
        <TextField
          name={"Property name"}
          id={"3"}
          autoComplete={"on"}
          placeholder={"Storage A"}
          label={"Property name"}
          classes={"pt-4"}
          setter={setFormPropertyData}
          property={"propertyName"}
          value={propertyPage?.propertyName}
        />
        <TextField
          name={"Address line"}
          id={"4"}
          autoComplete={"on"}
          placeholder={"3549 102nd Avenue Cranbrook, BC V1C 2R9"}
          label={"Address line"}
          classes={"pt-4"}
          setter={setFormPropertyData}
          property={"addressLine"}
          value={propertyPage?.addressLine}
        />
        <div className="flex items-center justify-between pt-4">
          <LocationSelector
            setter={setFormPropertyData}
            countryValue={propertyPage?.selectedCountry}
            cityValue={propertyPage?.selectedCity}
          />
          <div className="w-3/12">
            <TextField
              name={"ZIP/Postal Code"}
              id={"postalCode"}
              autoComplete={"on"}
              placeholder={"SE1 1AB"}
              label={"ZIP/Postal Code"}
              setter={setFormPropertyData}
              property={"postalCode"}
              value={propertyPage?.postalCode}
            />
          </div>
        </div>
        <DateInput
          setter={setFormPropertyData}
          value={propertyPage?.startDate}
        />
      </div>
      <DataValidationButton
        formPropertyData={formPropertyData}
        from={"propertyPage"}
      />
    </>
  );
}
