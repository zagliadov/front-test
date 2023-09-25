import ContinueButton from "@/components/ContinueButton/ContinueButton";
import NavigateBackButton from "@/components/NavigateBackButton/NavigateBackButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
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
    <PageWrapper>
      <div className="flex justify-between">
        <PageTitle title={"Rent roll"} />
        <div className="flex items-center pb-4">
          <ImportTemplateButton />
          <ImportFileButton />
        </div>
      </div>
      <UnitMixTable />
      <Wrapper classes={"flex justify-end"}>
        <NavigateBackButton />
        <ContinueButton goRoute={"/financing"} />
      </Wrapper>
    </PageWrapper>
  );
}
