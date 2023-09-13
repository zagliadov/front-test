import ImportFileButton from "@/components/UnitMixTable/ImportFileButton/ImportFileButton";
import ImportTemplateButton from "@/components/UnitMixTable/ImportTemplateButton/ImportTemplateButton";
import UnitMixTable from "@/components/UnitMixTable/UnitMixTable";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Unit mix page",
  description: "Unit mix form",
};

export default function UnitMixPage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <h2 className="text-gray-600 font-medium">Rent roll</h2>
        <div className="flex items-center pb-4">
          <ImportTemplateButton />
          <ImportFileButton />
        </div>
      </div>
      <UnitMixTable/>
    </div>
  )
}