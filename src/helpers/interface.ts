export enum CountryEnum {
  us = "USA",
  ca = "Canada",
  uc = "United Kingdom",
}

export enum CityEnum {
  nyc = "New York",
  la = "Los Angeles",
  toronto = "Toronto",
  vancouver = "Vancouver",
  london = "London",
  manchester = "Manchester",
}

export type Inputs = {
  lender: string;
  propertyName: string;
  addressLine: string;
  country: CountryEnum;
  city: CityEnum;
  postalCode: string;
  closeDate: Date;
};

export interface ICountry {
  label: string;
  value: string;
}

export interface ICity {
  label: string;
  value: string;
}

export interface ICitiesByCountry {
  [countryValue: string]: ICity[];
}
