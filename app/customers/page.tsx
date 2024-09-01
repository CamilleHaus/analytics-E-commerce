import { DataTable } from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { Customers, columns } from "./columns";

const getCustomers = async (): Promise<Customers[]> => {
  const res = await fetch(
    "https://66d3662d184dce1713d01b48.mockapi.io/Customers",
    { cache: "no-store" }
  );

  const data = await res.json();

  return data;
};

const Page = async () => {
  const data = await getCustomers();

  return (
    <section className="p-6">
      <AnalyticsCard
        title={"Customers"}
        subtitle={"Showing all customers with orders"}
      >
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={columns} data={data}/>
      </AnalyticsCard>
    </section>
  );
};

export default Page;
