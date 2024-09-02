import { ITeam } from "@/app/team/page";
import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface ITeamCardProps {
  member: ITeam;
  isPending: boolean;
}

const TeamCard = ({ member, isPending }: ITeamCardProps) => {
  return (
    <Card className="dark:bg-tertiary bg-slate-100 flex flex-col justify-between 
    items-center overflow-hidden rounded-lg p-4 gap-4">
        <Image 
        className="rounded-full"
        src={member.image}
        width={100}
        height={100}
        alt={`Image of ${member.name}`}
        />
        <h1 className="text-center">{member.name}</h1>
        <div>{member.isAdmin ? "Admin" : ""}</div>
        <div className="flex items-center gap-2">
            {isPending ? (
                <>
                <Button>Approve</Button>
                <Button variant="destructive">Decline</Button>
                </>
            ): (
                <>
                <Button>Edit</Button>
                <Button variant="destructive">Delete</Button>
                </>
            )}
        </div>
    </Card>
  );
};

export default TeamCard;
