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
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function PieChartWrapper() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
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
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
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
                          Visitors
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
            <div className="border-2 p-2 border-[var(--border-color)] 
                    bg-[var(--bg-secondary)] rounded-lg">

         <Wallet className="h-8 w-8 text-[var(--text-primary)]" /> 
         
            </div>
         <div className=" flex flex-col gap-1">
            <p className="text-[var(--text-primary)] text-xl font-medium">$12,167</p>
            <p className="text-[var(--text-secondary)] font-300 text-[14px]"> From January</p>
            </div>
        </div>
   <div className="flex items-center gap-2 font-medium leading-none">
            <div className="border-2 p-2 border-[var(--border-color)] 
                    bg-[var(--bg-secondary)] rounded-lg">

         <Wallet className="h-8 w-8 text-[var(--text-primary)]" /> 
         
            </div>
         <div className=" flex flex-col gap-1">
            <p className="text-[var(--text-primary)] text-xl font-medium">$12,167</p>
            <p className="text-[var(--text-secondary)] font-300 text-[14px]"> From January</p>
            </div>
        </div>
       
      </CardFooter>
    </Card>
  )
}
