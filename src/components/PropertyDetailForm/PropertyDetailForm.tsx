"use client";

import React, { useState } from "react";
import DataValidationButton from "../DataValidationButton/DataValidationButton";
import DateInput from "../DateInput/DateInput";
import LocationSelector from "../LocationSelector/LocationSelector";
import { TextField } from "../TextField/TextField";

export default function PropertyDetailForm() {
  const [propertyName, setPropertyName] = useState<string>("");
  const [addressLine, setAddressLine] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
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
          setter={setPropertyName}
          property={propertyName}
        />
        <TextField
          name={"Address line"}
          id={"4"}
          autoComplete={"on"}
          placeholder={"3549 102nd Avenue Cranbrook, BC V1C 2R9"}
          label={"Address line"}
          classes={"pt-4"}
          setter={setAddressLine}
          property={addressLine}
        />
        <div className="flex items-center justify-between pt-4">
          <LocationSelector />
          <div className="w-3/12">
            <TextField
              name={"ZIP/Postal Code"}
              id={"postalCode"}
              autoComplete={"on"}
              placeholder={"SE1 1AB"}
              label={"ZIP/Postal Code"}
              setter={setPostalCode}
              property={postalCode}
            />
          </div>
        </div>
        <DateInput setStartDate={setStartDate} startDate={startDate} />
      </div>
      <DataValidationButton startDate={startDate} />
    </>
  );
}
