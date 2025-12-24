import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="ms-2 cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Bell className="text-sky-100" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-100 z-110" align="end">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>One</DropdownMenuItem>
          <DropdownMenuItem>Two</DropdownMenuItem>
          <DropdownMenuItem>Three</DropdownMenuItem>
          <DropdownMenuItem>Four</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notification;
