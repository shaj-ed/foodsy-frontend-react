import CategoryHeader from "@/features/category/components/CategoryHeader";
import CategoryList from "@/features/category/components/CategoryList";

const CategoryAdmin = () => {
  return (
  <div>
    <h2 className="text-xl font-semibold mb-5">Category</h2>

    <CategoryHeader/>
    <CategoryList/>
  </div>
  )
};

export default CategoryAdmin;
