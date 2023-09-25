"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NavigateBackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}className="bg-white text-teal-950 px-5 py-2 rounded-lg cursor-pointer">
      Back
    </button>
  );
}
