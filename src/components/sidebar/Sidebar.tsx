import { NavLink } from "react-router-dom";

type Props = {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpenSidebar, toggleSidebar }: Props) => {
  return (
    <aside
      className={`bg-slate-600 fixed top-16 bottom-0 w-64 border-r border-gray-200 ${
        isOpenSidebar ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform`}
    >
      <nav className="h-full overflow-y-auto custom-scrollbar p-4">
        <ul>
          <li>
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
