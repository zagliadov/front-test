"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Добавляем ноль в начало, если месяц состоит из одной цифры
  const day = String(date.getDate()).padStart(2, "0"); // Добавляем ноль в начало, если день состоит из одной цифры
  return `${day}/${month}/${year}`;
} 
export default function DateInput() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col relative rounded-lg shadow-sm text-gray-500 pt-5">
      <label className="text-gray-400 text-sm">Close Date</label>
      <DatePicker
        showIcon={false}
        selected={startDate}
        className="border rounded-lg p-1"
        onChange={(date: Date) => setStartDate(date)}
        customInput={
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute left-2 top-2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <input
              type="text"
              className="pl-8 pr-4 py-2 rounded border-gray-300 focus:outline-none focus:border-blue-400"
              value={formatDate(startDate)}
              readOnly
            />
          </div>
        }
      />
    </div>
  );
}
