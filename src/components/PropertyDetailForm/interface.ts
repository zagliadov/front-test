export interface FormPropertyData {
  propertyName: string;
  addressLine: string;
  selectedCountry: string | null;
  selectedCity: string | null;
  postalCode: string;
  startDate: Date;
}

export interface NestedData {
  [key: string]: FormPropertyData;
}