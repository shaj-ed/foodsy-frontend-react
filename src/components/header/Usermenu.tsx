import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "./LogoutButton";

const Usermenu = () => {
  return (
    <div className="ms-2 cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Avatar className="border-2 border-sky-700">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 z-110" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Usermenu;
