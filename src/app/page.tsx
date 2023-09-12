import PropertyDetailForm from "@/components/PropertyDetailForm/PropertyDetailForm";
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
