import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useCategoryList } from '@/features/category/hooks/category.query';

const CategoryDropdown = () => {
  const navigate = useNavigate();
  const { data } = useCategoryList();

  const onSeemore = () => navigate('/categories');

  return (
    <>
      <NavigationMenuTrigger className="bg-transparent shadow-none hover:bg-transparent text-black px-2 py-1 cursor-pointer">
        Category
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {data.slice(0, 4).map((category) => {
            const { id, categoryName, description } = category;
            return (
              <li key={id}>
                <NavigationMenuLink>
                  <Link
                    to="/"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">{categoryName}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>

        <div className="text-end">
          <Button
            className="bg-transparent underline cursor-pointer text-black hover:text-white"
            onClick={onSeemore}
          >
            See More
          </Button>
        </div>
      </NavigationMenuContent>
    </>
  );
};

export default CategoryDropdown;
