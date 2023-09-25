import ContinueButton from "@/components/ContinueButton/ContinueButton";
import NavigateBackButton from "@/components/NavigateBackButton/NavigateBackButton";
import ImportFileButton from "@/components/UnitMixTable/ImportFileButton/ImportFileButton";
import ImportTemplateButton from "@/components/UnitMixTable/ImportTemplateButton/ImportTemplateButton";
import UnitMixTable from "@/components/UnitMixTable/UnitMixTable";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Unit mix page",
  description: "Unit mix form",
};

export default function UnitMixPage() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex justify-between">
        <h2 className="text-gray-600 font-medium">Rent roll</h2>
        <div className="flex items-center pb-4">
          <ImportTemplateButton />
          <ImportFileButton />
        </div>
      </div>
      <UnitMixTable />
      <Wrapper classes={"flex justify-end py-5"}>
        <NavigateBackButton />
        <ContinueButton goRoute={"/financing"} />
      </Wrapper>
    </div>
  );
}
