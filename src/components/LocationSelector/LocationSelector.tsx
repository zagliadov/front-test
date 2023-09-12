"use client";
import React, { useState } from "react";
import { SelectField } from "../SelectField/SelectField";

type Country = {
  label: string;
  value: string;
};

type City = {
  label: string;
  value: string;
};

const countries: Country[] = [
  { label: "USA", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
];

const cities: Record<string, City[]> = {
  us: [
    { label: "New York", value: "nyc" },
    { label: "Los Angeles", value: "la" },
  ],
  ca: [
    { label: "Toronto", value: "toronto" },
    { label: "Vancouver", value: "vancouver" },
  ],
  uk: [
    { label: "London", value: "london" },
    { label: "Manchester", value: "manchester" },
  ],
};

interface IProps {
  setter: any;
  countryValue: string | null;
  cityValue: string | null;
}
export default function LocationSelector({
  setter,
  countryValue,
  cityValue,
}: IProps) {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    countryValue
  );
  const [selectedCity, setSelectedCity] = useState<string | null>(cityValue);

  const handleCountryChange = (selectedCountryValue: string) => {
    setSelectedCountry(selectedCountryValue);
    setSelectedCity(null);

    setter((prevState: any) => ({
      ...prevState,
      selectedCountry: selectedCountryValue,
      selectedCity: null,
    }));
  };

  const handleCityChange = (selectedCityValue: string) => {
    setSelectedCity(selectedCityValue);

    setter((prevState: any) => ({
      ...prevState,
      selectedCity: selectedCityValue,
    }));
  };
  return (
    <>
      <div className="w-4/12">
        <SelectField
          name="country"
          id={"Country"}
          label={"Country"}
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
        />
      </div>
      <div className="w-4/12">
        <SelectField
          name="cities"
          id={"Cities"}
          label={"Cities"}
          value={selectedCity}
          options={selectedCountry ? cities[selectedCountry] : []}
          onChange={handleCityChange}
          isDisabled={!selectedCountry}
        />
      </div>
    </>
  );
}
