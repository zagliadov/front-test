"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface IContinueButtonProps {
  goRoute: string;
};

export default function ContinueButton({ goRoute }: IContinueButtonProps) {
  const router = useRouter();

  const handleGoNext = () => {
    router.push(goRoute);
  }
  return (
    <input
      onClick={handleGoNext}
      type="submit"
      className="bg-teal-950 text-white px-5 py-2 rounded-lg cursor-pointer"
      value="Continue"
    />
  );
}
