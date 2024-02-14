"use client";
import Link from "next/link";
import { useState } from "react";

interface ITabProp {
  label: string;
  content: string;
}

export function Accordion({
  tabs,
  title,
}: {
  tabs: ITabProp[];
  title: string;
}) {
  const [active, setActive] = useState(-1);
  const hasTabs = tabs && tabs.length > 0;

  const handleClick = (idx: number) => {
    setActive(idx);
  };

  return hasTabs ? (
    <div className="flex flex-col py-6">
      <h2 className="leading-relaxed text-gray-900 py-4">{title}</h2>

      <div className="w-full">
        <div className="border rounded-lg overflow-hidden">
          {tabs.map((tab, idx) => (
            <div key={tab.label}>
              <div className="border-b" onClick={() => handleClick(idx)}>
                <button className="w-full p-4 flex justify-between items-center">
                  <span className="text-lg font-medium">{tab.label}</span>
                </button>
              </div>
              <div className={`p-4 ${active != idx && "hidden"}`}>
                <p>{tab.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
