"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTable } from "../ui/data-table";
import React from "react";
import AnalyticsCard from "./analytics-card";
import { ProductsDummyData } from "@/constants/data";

export type TTopProducts = {
  id: number;
  name: string;
  revenue: number;
  price: number;
  image: string;
};

export const topProductsColumns: ColumnDef<TTopProducts>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt="Product Image"
          className="border-2 border-primary"
        />
      );
    },
  },
];

const TopProducts = () => {

  const topProducts = ProductsDummyData.sort((a, b) => b.revenue = a.revenue).slice(0, 4);
  return (
    <AnalyticsCard
      title={"Top Products"}
      subtitle={"Showing Most Sold Products"}
    >
      <DataTable columns={topProductsColumns} data={topProducts} />
    </AnalyticsCard>
  );
};

export default TopProducts;
