import ContinueButton from "@/components/ContinueButton/ContinueButton";
import FinancingNavigation from "@/components/FinancingNavigation/FinancingNavigation";
import NavigateBackButton from "@/components/NavigateBackButton/NavigateBackButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Financing page",
  description: "Financing form",
};

export default function FinancingPage() {
  return (
    <PageWrapper>
      <Wrapper classes={"flex flex-col"}>
        <PageTitle title={"Financing"} />
        <FinancingNavigation />
      </Wrapper>
    </PageWrapper>
  );
}
