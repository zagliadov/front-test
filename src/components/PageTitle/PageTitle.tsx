import React from "react";

interface IPageTitle {
  title: string;
};

export default function PageTitle({ title }: IPageTitle) {

  return (
    <h2 className="text-gray-700 font-medium text-2xl">{title}</h2>
  )
}