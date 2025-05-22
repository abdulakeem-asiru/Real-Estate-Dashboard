"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { chartData } from "@/app/api/data/chartData";
import { SelectComponent } from "./SortChart";

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function SalesChart() {
  return (
    
  <Card className="h-full ">
    <CardHeader className="flex justify-between ">
      <p className="font-medium text-[24px] text-[var(--text-primary)]">Sales Analytics</p>
      <SelectComponent button ={<p> </p>} />
      
    </CardHeader>
  <CardContent className="flex-1 pb-0">
    <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
      <ResponsiveContainer >
        <AreaChart data={chartData}
        accessibilityLayer>
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
            axisLine={false}
            tickLine={false}
            domain={[0, 15000]}
            ticks={[0, 1000, 5000, 10000, 15000]}
            tickFormatter={(value) => `${Math.round(value / 1000)}K`}
            interval="preserveStartEnd"
          />
          <ChartTooltip 
          cursor={{
       stroke: "#FC9D6E",     
       strokeWidth: 20,        
      
  }}
  content={<ChartTooltipContent />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            stroke={chartConfig.income.color}
            dot={false}
            activeDot={{ r: 6 }}
            strokeWidth={2}
            fill="url(#colorIncome)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke={chartConfig.expenses.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
    </ CardContent>
  </Card>
  );
}

export default SalesChart;
