"use client";
import React from "react";
import PropertyDetailForm from "@/components/PropertyDetailForm/PropertyDetailForm";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Property details",
  description: "Property details form",
};

export default function PropertyDetailPage() {
  return (
    <div className="h-full">
      <PropertyDetailForm />
    </div>
  );
}
