import FilterCard from "@/components/categories/FilterCard";
import Products from "@/components/common/ui/Products";
import SectionContainer from "@/components/common/section/SectionContainer";
import SectionHeading from "@/components/common/section/SectionHeading";

const CategoryDetail = () => {
  return (
    <SectionContainer>
      <div className="my-8">
        <div>
          {/* <h3>Category Detail</h3> */}
          <SectionHeading headline="Fast Food" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row mt-4">
          <div className="flex-1">
            <FilterCard />
          </div>

          <div className="flex-1/2">
            <Products />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CategoryDetail;
