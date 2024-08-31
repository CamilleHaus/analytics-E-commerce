import { BarGraph } from "@/components/dashboard/bar-graph";
import { HorizontalGraph } from "@/components/dashboard/horizontal-bar-graph";
import { PieGraph } from "@/components/dashboard/pie-graph";
import { RadarGraph } from "@/components/dashboard/radar-graph";
import Summary from "@/components/dashboard/summary";
import { TopCustomers } from "@/components/dashboard/top-customers";
import TopProducts from "@/components/dashboard/top-products";
import { Customers } from "@/components/dashboard/top-customers";

const getCustomers = async (): Promise<Customers[]> => {
  const res = await fetch(
    "https://66d3662d184dce1713d01b48.mockapi.io/Customers",
    { cache: "no-store" }
  );

  const data = await res.json();

  return data;
};

export default async function Home() {
  const data = await getCustomers();
  const topCustomers = data.sort((a: any, b: any) => (b.revenue = a.revenue)).slice(0, 4);

  return (
    <div className="p-4 grid gap-5">
      <Summary />

      <div className="grid lg:grid-cols-2 gap-10">
        <BarGraph />
        <RadarGraph />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <PieGraph />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <HorizontalGraph />
        <TopCustomers data={topCustomers}/>
      </div>
    </div>
  );
}
