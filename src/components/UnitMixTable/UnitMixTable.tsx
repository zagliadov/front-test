import React from "react";
import { getRent } from "../../../services/getRent";
import { Rent } from "@/app/api/rent/rent";

export default async function UnitMixTable() {
  const rentData = await getRent();
  return (
    <div>
      <div className="border rounded-md w-full h-[70vh] overflow-y-auto">
        <table className="table-auto text-black w-full">
          <thead>
            <tr>
              <th className="border-b p-5">ID</th>
              <th className="border-b p-5">Type</th>
              <th className="border-b p-5">Rent</th>
              <th className="border-b p-5">Width(ft)</th>
              <th className="border-b p-5">Length(ft)</th>
              <th className="border-b p-5">Market Rent</th>
              <th className="border-b p-5">Status</th>
              <th className="border-b p-5">SQFT/SQM</th>
            </tr>
          </thead>
          <tbody>
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
                }: Rent) => {
                  return (
                    <tr key={id}>
                      <td className="border-b border-r p-5">{id}</td>
                      <td className="border-b border-r p-5">{type}</td>
                      <td className="border-b border-r p-5">{rent}</td>
                      <td className="border-b border-r p-5">{width}</td>
                      <td className="border-b border-r p-5">{length}</td>
                      <td className="border-b border-r p-5">{marketRent}</td>
                      <td className="border-b border-r p-5">{status}</td>
                      <td className="border-b border-r p-5">{sqft_sqm}</td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
