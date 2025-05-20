"use client";

import {
  Area,
  AreaChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { chartData } from "@/app/api/data/chartData";

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)"
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function SalesChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={150}
          data={chartData}
         
        >
            <defs>
  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#FB6D26" stopOpacity={0.3} />
    <stop offset="95%" stopColor="#FB6D26" stopOpacity={0} />
  </linearGradient>

  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#859DFF" stopOpacity={0.3} />
    <stop offset="95%" stopColor="#859DFF" stopOpacity={0} />
  </linearGradient>
</defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis
  domain={[0, 16000]}
  ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000]}
/>
          <Tooltip />
          <Legend />
          <Area type="monotone"
            dataKey="income"
            stroke={chartConfig.income.color}
             dot={false}
  activeDot={{ r: 6 }}
            strokeWidth={2}fill="url(#colorIncome)" />
  <Area  type="monotone"
            dataKey="expenses"
            stroke={chartConfig.expenses.color}
            strokeWidth={2}
             dot={false}
  activeDot={{ r: 6 }} fill="url(#colorExpenses)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default SalesChart;
