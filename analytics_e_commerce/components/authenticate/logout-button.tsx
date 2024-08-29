"use client"

import { Button } from "../ui/button";
import Link from "next/link";
import { useMenuStore } from "@/store/toggleMenuStore";
import { LogOut } from "lucide-react";

const LogOutButton = () => {

  const { isOpen } = useMenuStore();
  return (
    <div>
      <Button asChild>
        <Link href={"/"} className="flex gap-2">
          <LogOut />
          <span className={`${!isOpen && "max-md:hidden"} ${isOpen && "hidden"}`}>
            Logout
          </span>
        </Link>
      </Button>
    </div>
  )
}

export default LogOutButton;
