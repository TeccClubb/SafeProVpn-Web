"use client";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const pieData = [
  { name: 'Streaming', value: 45, color: '#3b82f6' },
  { name: 'Browsing', value: 25, color: '#10b981' },
  { name: 'Social Media', value: 20, color: '#f97316' },
  { name: 'Gaming', value: 5, color: '#8b5cf6' },
  { name: 'Other', value: 5, color: '#9ca3af' },
];

const barData = [
  { name: 'Morning', usage: 45 },
  { name: 'Afternoon', usage: 75 },
  { name: 'Evening', usage: 110 },
  { name: 'Night', usage: 70 },
];

export default function UsageCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-medium mb-4">Usage by Application</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-medium mb-4">Usage by Time of Day</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}