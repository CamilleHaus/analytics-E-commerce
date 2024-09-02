import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../products/columns";
import { ProductsDummyData } from "@/constants/data";

const Page = () => {
  return (
    <div className="p-6">
      <AnalyticsCard title={"Products"} subtitle={"Showing All Products"}>
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={columns} data={ProductsDummyData} />
      </AnalyticsCard>
    </div>
  );
};

export default Page;
