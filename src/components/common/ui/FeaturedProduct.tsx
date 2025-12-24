import SectionHeading from "../section/SectionHeading";
import Products from "./Products";

const FeaturedProduct = () => {
  return (
    <div>
      <SectionHeading headline="More Foods" />
      <div className="mb-4"></div>
      <Products />
    </div>
  );
};

export default FeaturedProduct;
