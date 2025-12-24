import CategoryCard from "@/components/categories/CategoryCard";
import SectionContainer from "@/components/common/section/SectionContainer";
import SectionHeading from "@/components/common/section/SectionHeading";
import { topCategories } from "@/components/home/TopCategories";

const CategoriesPage = () => {
  return (
    <SectionContainer>
      <div className="my-10">
        <SectionHeading headline="Categories" />

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {topCategories.map((category) => (
            <CategoryCard category={category} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CategoriesPage;
