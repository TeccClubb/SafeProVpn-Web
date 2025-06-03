"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  CalendarDaysIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const data = [
  { name: "Feb", value: 100 },
  { name: "Mar", value: 120 },
  { name: "Apr", value: 110 },
  { name: "May", value: 160 },
  { name: "Jun", value: 180 },
  { name: "Jul", value: 150 },
  { name: "Aug", value: 160 },
  { name: "Sep", value: 140 },
  { name: "Oct", value: 180 },
  { name: "Nov", value: 175 },
  { name: "Dec", value: 190 },
  { name: "Jan", value: 220 },
];

const DataUsageChart = () => {
  const [view, setView] = useState("daily");

  const views = [
    { label: "Daily", value: "daily", icon: <CalendarDaysIcon className="w-4 h-4" /> },
    { label: "Weekly", value: "weekly", icon: <CalendarIcon className="w-4 h-4" /> },
    { label: "Monthly", value: "monthly", icon: <ChartBarIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Data Usage Trends</h3>
        <div className="inline-flex items-center rounded-md bg-gray-100 p-1">
          {views.map((option) => (
            <button
              key={option.value}
              onClick={() => setView(option.value)}
              className={`flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-md transition-all ${
                view === option.value
                  ? "bg-cyan-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="name" tick={{ fill: '#888' }} />
            <YAxis tick={{ fill: '#888' }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              fill="#cffafe"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default DataUsageChart;