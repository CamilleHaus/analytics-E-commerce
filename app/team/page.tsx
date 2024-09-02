import AnalyticsCard from "@/components/dashboard/analytics-card";
import TeamList from "@/components/teams/team-list";

export interface ITeam {
  isAdmin: boolean;
  name: string;
  image: string;
  isApproved: boolean;
  email: string;
}

const getTeam = async (): Promise<ITeam[]> => {
    const res = await fetch(
      "https://66d3662d184dce1713d01b48.mockapi.io/Team",
      { cache: "no-store" }
    );
  
    const data = await res.json();
  
    return data;
};

const Page = async () => {

    const data = await getTeam();

    return (
        <div className="p-6">
            <TeamList data={data}/>
        </div>
    )
};

export default Page;