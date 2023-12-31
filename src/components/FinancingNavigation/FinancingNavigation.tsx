"use client";

import React, { useState, useEffect } from "react";
import DebtTab from "./DebtTab";
import { Wrapper } from "../Wrapper/Wrapper";

export default function FinancingNavigation() {
  const initialActiveTab: string = "Debt 1";
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab);

  const getTabsFromLocalStorage = () => {
    const tabsLength = Number(localStorage.getItem("debtNumber"));
    if (tabsLength) {
      return Array.from({ length: tabsLength }, (_, index) => ({
        name: `Debt ${index + 1}`,
        content: <DebtTab debtName={`Debt ${index + 1}`} />,
      }));
    } else {
      return [{ name: "Debt 1", content: <DebtTab debtName="Debt 1" /> }];
    }
  };
  interface Tab {
    name: string;
    content: JSX.Element;
  }
  const [tabs, setTabs] = useState<Tab[]>([]);
  useEffect(() => {
    setTabs(getTabsFromLocalStorage());
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleAddDebtClick = () => {
    if (tabs.length < 7) {
      const newDebtName = `Debt ${tabs.length + 1}`;
      const newTab = {
        name: newDebtName,
        content: <DebtTab debtName={newDebtName} />,
      };
      setTabs((prevTabs) => [...prevTabs, newTab]);
      localStorage.setItem("debtNumber", String(tabs.length + 1));
      setActiveTab(newDebtName);
    }
  };

  return (
    <Wrapper>
      <div className="flex space-x-4 pt-4 text-black">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            label={tab.name}
            isActive={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
          />
        ))}
        {tabs.length < 7 && (
          <Tab
            label="Add debt"
            isActive={activeTab === "add_debt"}
            onClick={handleAddDebtClick}
          />
        )}
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </Wrapper>
  );
}

function Tab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${
        isActive
          ? "relative z-10 border-b-2 border-teal-500"
          : "border-b-2 border-white"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
