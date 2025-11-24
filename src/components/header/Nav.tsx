import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

type NavProps = {
  viewClass: string;
};

const Nav = ({ viewClass }: NavProps) => {
  return (
    <NavigationMenu className={viewClass}>
      <NavigationMenuList className="flex-col items-start md:items-center md:flex-row">
        {/* Home */}
        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className="font-medium text-white md:text-black">
              Homepage
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Category */}
        <NavigationMenuItem className="hidden md:block">
          <CategoryDropdown />
        </NavigationMenuItem>
        <NavigationMenuItem className="md:hidden">
          <Link to="/categories">
            <NavigationMenuLink className="font-medium text-white md:text-black">
              Category
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Blog */}
        <NavigationMenuItem>
          <Link to="/blogs">
            <NavigationMenuLink className="font-medium text-white md:text-black">
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
