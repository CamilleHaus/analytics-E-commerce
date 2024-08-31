
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Logo from "./logo";
import MenuToggle from "./menu-toggle";
import ModeToggle from "./mode-toggle";

const NavBar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="md:w-[95%] sm:w-[92%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
            <Logo />
            <MenuToggle />
        </div>
        <div className="flex gap-8 items-center">
            <ModeToggle />
            <span className="max-md:hidden">Welcome back, Camille</span>
            <Avatar>
                <AvatarImage src="avatar-image.avif"/>
                <AvatarFallback>Me</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
