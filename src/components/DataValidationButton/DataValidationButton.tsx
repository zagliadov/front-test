"use client";
import React from "react";

export default function DataValidationButton() {

  const dataValidation = () => {
    console.log("validation");
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
