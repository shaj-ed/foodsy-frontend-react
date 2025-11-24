import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const dummyCategory = [
  {
    id: 1,
    title: "Pizza & Pasta",
    description: "Classic Pizzas, Pasta Dishes, Garlic Bread",
  },
  {
    id: 2,
    title: "Rice & Curry",
    description: "Biryani, Fried Rice, Thai Curry, Dal Tadka",
  },
  {
    id: 3,
    title: "Fast Food",
    description: "Burgers, Fries, Fried Chicken, Sandwiches",
  },
  {
    id: 4,
    title: "Healthy & Salads",
    description: "Caesar Salad, Greek Salad, Keto Meals",
  },
];

const CategoryDropdown = () => {
  const navigate = useNavigate();

  const onSeemore = () => navigate("/categories");

  return (
    <>
      <NavigationMenuTrigger className="bg-transparent shadow-none hover:bg-transparent text-black px-2 py-1 cursor-pointer">
        Category
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {dummyCategory.map((category) => {
            return (
              <li key={category.id}>
                <NavigationMenuLink>
                  <Link
                    to="/"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      {category.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {category.description}
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
