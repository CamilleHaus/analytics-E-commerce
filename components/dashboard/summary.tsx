import {
  Users,
  ArrowUp,
  ArrowDown,
  Shirt,
  DollarSign,
  Package,
  LucideIcon,
} from "lucide-react";
import AnalyticsCard from "./analytics-card";

interface ISummaryCard {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: string;
}

const SummaryCard: React.FC<ISummaryCard> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
}) => {
  return (
    <div className="p-6 rounded-md flex-auto dark:bg-tertiary bg-slate-100 border">
      <div className="flex items-center gap-4 justify-center max-md:justify-between">
        <p>{title}</p>
        <h2 className="font-bold text-2xl">{value}</h2>
        <div>
          <Icon className="bg-primary text-white p-3 rounded-full" size={45} />
        </div>
      </div>
      <div
        className={`flex gap-1 mt-2 md:justify-center ${
          changeType === "increase" ? "text-green-500" : "text-red-500"
        }`}
      >
        {changeType === "increase" ? <ArrowUp size={20}/> : <ArrowDown size={20}/>}
        <span className="text-sm">{change}</span>
      </div>
    </div>
  );
};

const Summary = () => {
  const summaryData = [
    {
      title: "Orders",
      value: "1,342",
      icon: Package,
      change: "+30% since last year",
      changeType: "increase",
    },
    {
      title: "Revenue",
      value: "$29,072",
      icon: DollarSign,
      change: "-80% since last year",
      changeType: "decrease",
    },
    {
      title: "Customers",
      value: "3,242",
      icon: Users,
      change: "+10% since last year",
      changeType: "increase",
    },
    {
      title: "Products",
      value: "20",
      icon: Shirt,
      change: "-11% since last year",
      changeType: "decrease",
    },
  ];

  return (
    <AnalyticsCard title="Summary" subtitle="2024 Year Summary">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-10 mb-3">
        {summaryData.map((data, index) => (
          <SummaryCard
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
            change={data.change}
            changeType={data.changeType}
          />
        ))}
      </div>
    </AnalyticsCard>
  );
};

export default Summary;
