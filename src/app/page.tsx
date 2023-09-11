import DataValidationButton from "@/components/DataValidationButton/DataValidationButton";
import DateInput from "@/components/DateInput/DateInput";
import LocationSelector from "@/components/LocationSelector/LocationSelector";
import PropertyDetailForm from "@/components/PropertyDetailForm/PropertyDetailForm";
import { TextField } from "@/components/TextField/TextField";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Property details",
  description: "Property details form",
};

export default function PropertyDetailPage() {
  return (
    <div className="flex flex-col h-full justify-between">
      <PropertyDetailForm />
    </div>
  );
}
