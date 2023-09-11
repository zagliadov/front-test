import DataValidationButton from "@/components/DataValidationButton/DataValidationButton";
import DateInput from "@/components/DateInput/DateInput";
import LocationSelector from "@/components/LocationSelector/LocationSelector";
import { TextField } from "@/components/TextField/TextField";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Property details",
  description: "Property details form",
};

export default function PropertyDetailPage() {
  return (
    <div className="flex flex-col h-full justify-between">
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
        />
        <TextField
          name={"Address line"}
          id={"4"}
          autoComplete={"on"}
          placeholder={"3549 102nd Avenue Cranbrook, BC V1C 2R9"}
          label={"Address line"}
          classes={"pt-4"}
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
            />
          </div>
        </div>
        <DateInput />
      </div>
      <DataValidationButton />
    </div>
  );
}
