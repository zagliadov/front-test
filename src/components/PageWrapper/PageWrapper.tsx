import React, { ReactNode } from "react";

interface IPageWrapperProps {
  children: ReactNode;
}
export default function PageWrapper({ children }: IPageWrapperProps) {

  return (
    <div className="w-full h-full flex flex-col justify-between py-11 px-4">
      { children }
    </div>
  )
}