"use client";

import React from "react";

interface IProps {
  startDate: Date;
}
export default function DataValidationButton({ startDate }: IProps) {

  const dataValidation = () => {
    console.log("validation", startDate);
  }
  return (
    <div className="flex justify-end">
      <button
        onClick={dataValidation}
        className="bg-teal-950 text-white px-5 py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}
