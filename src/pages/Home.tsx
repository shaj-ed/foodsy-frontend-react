import Hero from "@/components/home/Hero";
import { Separator } from "@/components/ui/separator";
import BlogAndRecipes from "@/components/home/BlogAndRecipes";
import TopCategories from "@/components/home/TopCategories";
import TrendingFoods from "@/components/home/TrendingFoods";
import Newsletter from "@/components/home/Newsletter";

export const Home = () => {
  return (
    <>
      <Hero />
      <TopCategories />
      <Newsletter />
      <TrendingFoods />
      <Separator className="my-10" />
      <BlogAndRecipes />
    </>
  );
};
