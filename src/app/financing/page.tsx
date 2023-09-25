import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Financing page",
  description: "Financing form",
};

export default function FinancingPage() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <span className="text-gray-500">Financing</span>
    </div>
  );
}
