/* eslint-disable react-refresh/only-export-components */
import fastFood from "@/assets/images/categories/fastfood.jpg";
import noodlesAndAsia from "@/assets/images/categories/noodlesandasia.jpg";
import pizzaPasta from "@/assets/images/categories/pizzapasta.jpg";
import seafood from "@/assets/images/categories/seafood.jpg";
import { url } from "inspector";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import SectionContainer from "../common/SectionContainer";
import CategoryCard from "../categories/CategoryCard";

export const topCategories = [
  {
    id: 1,
    title: "Fast Food",
    description: "Burgers, Fries, Fried Chicken, Sandwiches",
    src: fastFood,
  },
  {
    id: 2,
    title: "Noodles And Asian",
    description: "Ramen, Chow Mein, Sushi, Dumplings",
    src: noodlesAndAsia,
  },
  {
    id: 3,
    title: "Pizza & Pasta",
    description: "Classic Pizzas, Pasta Dishes, Garlic Bread",
    src: pizzaPasta,
  },
  {
    id: 4,
    title: "Seafood",
    description: "Fish & Chips, Shrimp, Sushi, Lobster",
    src: seafood,
  },
];

const TopCategories = () => {
  return (
    <SectionContainer className="mt-12">
      <SectionHeading headline="Top Categories" />

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {topCategories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default TopCategories;
