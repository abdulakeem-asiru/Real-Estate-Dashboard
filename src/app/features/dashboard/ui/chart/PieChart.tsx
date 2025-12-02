"use client"

import * as React from "react"
import {  Wallet } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { earning: "income", sales: 275, fill: "var(--chart-1)" },
  { earning: "expenses", sales: 200, fill: "var(--chart-2)" },
]

const chartConfig = {
  sales: {
    label: "sales",
  },
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  }
} satisfies ChartConfig

export function PieChartWrapper() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0 text-2xl text-[var(--text-primary)]">
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="earning"
              innerRadius={70}
            outerRadius={100}
            paddingAngle={10}
            stroke="none"
              strokeWidth={9}
            >
              <Label className=""
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Sales
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-around items-center gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
            <div className="border p-2 border-[var(--border-color)] 
                    bg-[var(--icon-background)] rounded-lg">

         <Wallet className="h-6 w-6 text-[var(--icon-color)]" /> 
         
            </div>
         <div className=" flex flex-col gap-1">
            <p className="text-[var(--text-primary)] text-[14px] font-medium">$12,167</p>
            <p className="text-[var(--text-secondary)] font-300 text-[14px]"> From January</p>
            </div>
        </div>
   <div className="flex items-center gap-2 font-medium leading-none">
            <div className="border p-2 border-[var(--border-color)] 
                    bg-[var(--icon-background)] rounded-lg">
         <Wallet className="h-6 w-6 text-[var(--icon-color)]" />    
            </div>
         <div className=" flex flex-col gap-1">
            <p className="text-[var(--text-primary)] text-[14px] font-medium">$12,167</p>
            <p className="text-[var(--text-secondary)] font-300 text-[14px]"> From January</p>
            </div>
        </div>
       
      </CardFooter>
    </Card>
  )
}
