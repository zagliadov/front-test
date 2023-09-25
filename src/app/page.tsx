"use client";
import React from "react";
import PropertyDetailForm from "@/components/PropertyDetailForm/PropertyDetailForm";
import { Metadata } from "next/types";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const metadata: Metadata = {
  title: "Property details",
  description: "Property details form",
};

export default function PropertyDetailPage() {
  return (
    <PageWrapper>
      <PageTitle title={"Property details"} />
      <h3 className="font-medium text-lg pt-5 text-black">Property Detail</h3>
      <PropertyDetailForm />
    </PageWrapper>
  );
}
