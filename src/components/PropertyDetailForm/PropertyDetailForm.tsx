"use client";

import React, { useState } from "react";
import DataValidationButton from "../DataValidationButton/DataValidationButton";
import DateInput from "../DateInput/DateInput";
import LocationSelector from "../LocationSelector/LocationSelector";
import { TextField } from "../TextField/TextField";
import { FormPropertyData } from "./interface";

export default function PropertyDetailForm() {
  const [formPropertyData, setFormPropertyData] = useState<FormPropertyData>({
    propertyName: "",
    addressLine: "",
    selectedCountry: null,
    selectedCity: null,
    postalCode: "",
    startDate: new Date(),
  });
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
        />
        <div className="flex items-center justify-between pt-4">
          <LocationSelector setter={setFormPropertyData} />
          <div className="w-3/12">
            <TextField
              name={"ZIP/Postal Code"}
              id={"postalCode"}
              autoComplete={"on"}
              placeholder={"SE1 1AB"}
              label={"ZIP/Postal Code"}
              setter={setFormPropertyData}
              property={"postalCode"}
            />
          </div>
        </div>
        <DateInput setter={setFormPropertyData} property={"startDate"} />
      </div>
      <DataValidationButton
        formPropertyData={formPropertyData}
        from={"propertyPage"}
      />
    </>
  );
}
