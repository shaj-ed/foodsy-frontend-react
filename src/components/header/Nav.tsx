import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type NavProps = {
  viewClass: string;
};

const Nav = ({ viewClass }: NavProps) => {
  return (
    <NavigationMenu className={viewClass}>
      <NavigationMenuList className="flex-col items-start md:items-center md:flex-row">
        {/* Home */}
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className="font-medium text-white md:text-black">
              Homepage
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Category */}
        <NavigationMenuItem className="hidden md:block">
          <ErrorBoundary fallbackRender={({}) => <div></div>}>
            <Suspense fallback={<div></div>}>
              <CategoryDropdown />
            </Suspense>
          </ErrorBoundary>
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
