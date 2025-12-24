import {
  LayoutDashboard,
  Logs,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {  NavLink } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Category",
    url: "/admin/category",
    icon: Logs,
  },
  //   {
  //     title: "Settings",
  //     url: "/admin/settings",
  //     icon: Settings,
  //   },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-gray-800 pt-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        className={`flex items-center gap-2 w-full text-gray-100 px-3 py-2 rounded-md cursor-pointer ${
                          isActive
                            ? "bg-gray-300 text-gray-900 font-semibold"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
