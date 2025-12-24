import Logo from "../common/ui/Logo";
import Usermenu from "./Usermenu";
import Notification from "../common/ui/Notification";
import {  SidebarTrigger } from "@/components/ui/sidebar";

type Props = {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
};

const AdminHeader = ({ isOpenSidebar, toggleSidebar }: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 py-4 px-4 z-100">
      <nav className="flex items-center justify-between">
        {/* <div className="md:hidden absolute">
          <button type="button" className="text-white" onClick={toggleSidebar}>
            {isOpenSidebar ? (
              <AlignRight className="cursor-pointer" />
            ) : (
              <AlignLeft className="cursor-pointer" />
            )}
          </button>
        </div> */}
        <div className="">
          <SidebarTrigger className="text-white" />
          <Logo size="text-3xl" color="text-white" />
        </div>

        <div className="flex gap-2 items-center">
          <Notification />
          <Usermenu />
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
