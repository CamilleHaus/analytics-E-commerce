"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AnalyticsCard from "./analytics-card";

export const description = "A mixed bar chart";

const chartData = [
  {
    country: "USA",
    visitors: 275,
    fill: "#2563EB",
  },
  {
    country: "India",
    visitors: 200,
    fill: "#3B86F7",
  },
  {
    country: "China",
    visitors: 225,
    fill: "#61A8FB",
  },
  {
    country: "Cuba",
    visitors: 150,
    fill: "#90C7FE",
  },
  {
    country: "Brazil",
    visitors: 125,
    fill: "#BEDCFE",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  USA: {
    label: "USA",
  },
  India: {
    label: "India",
  },
  China: {
    label: "China",
  },
  Cuba: {
    label: "Cuba",
  },
  Brazil: {
    label: "Brazil",
  },
} satisfies ChartConfig;

export function HorizontalGraph() {
  return (
    <AnalyticsCard
      title={"Traffic Bar Chart"}
      subtitle={"Showing visitors from different countries"}
    >
      <ChartContainer config={chartConfig} 
      className="mx-auto aspect-square w-full max-h-[400px] mt-10">
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="country"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <XAxis dataKey="visitors" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="visitors" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </AnalyticsCard>
  );
}
