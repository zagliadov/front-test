import React from "react";
import { getRent } from "../../../services/getRent";

export default async function UnitMixTable() {
  const rentData = await getRent();
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="pt-2">
          <div className="flex justify-around py-2">
            <span className="w-full pl-5">ID</span>
            <span className="w-full pl-5">Type</span>
            <span className="w-full pl-5">Rent</span>
            <span className="w-full pl-5">Width(ft)</span>
            <span className="w-full pl-5">Length(ft)</span>
            <span className="w-full pl-5">Market Rent</span>
            <span className="w-full pl-5">Status</span>
            <span className="w-full pl-5">SQFT/SQM</span>
          </div>
        </div>
        <div className="h-[75vh] overflow-y-auto">
          {rentData &&
            rentData.map(
              ({
                id,
                type,
                rent,
                width,
                length,
                marketRent,
                status,
                sqft_sqm,
              }: any) => {
                return (
                  <div key={id} className="flex justify-around">
                    <span className="w-full border py-6 pl-5">{id}</span>
                    <span className="w-full border py-6 pl-5">{type}</span>
                    <span className="w-full border py-6 pl-5">${rent}</span>
                    <span className="w-full border py-6 pl-5">{width}</span>
                    <span className="w-full border py-6 pl-5">{length}</span>
                    <span className="w-full border py-6 pl-5">{marketRent}</span>
                    <span className="w-full border py-6 pl-4">{status}</span>
                    <span className="w-full border py-6 pl-4">{sqft_sqm}</span>
                  </div>
                );
              }
            )}
        </div>
      </div>
      Table
    </div>
  );
}
