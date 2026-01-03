import AdminHeader from '@/components/header/AdminHeader';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  return (
    <SidebarProvider>
      <div className="flex flex-1 mt-16">
        {/* <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} /> */}
        <AppSidebar />
        <main className="flex-1 p-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <AdminHeader isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
