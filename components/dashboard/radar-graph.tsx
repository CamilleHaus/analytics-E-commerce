"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AnalyticsCard from "./analytics-card";

export const description = "A radar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2463EB",
  },
  mobile: {
    label: "Mobile",
    color: "#5DA3F4",
  },
} satisfies ChartConfig;

export function RadarGraph() {
  return (
    <AnalyticsCard title={"Visitors Radar Chart"} subtitle={"Showing visitors for the last 6 months"}>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <RadarChart
          data={chartData}
          margin={{
            top: -40,
            bottom: -10,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <PolarAngleAxis dataKey="month" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={0.6}
          />
          <Radar dataKey="mobile" fill="var(--color-mobile)" />
          <ChartLegend className="mt-8" content={<ChartLegendContent />} />
        </RadarChart>
      </ChartContainer>
    </AnalyticsCard>
  );
}
