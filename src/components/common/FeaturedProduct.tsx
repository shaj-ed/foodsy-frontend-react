import React from "react";
import SectionHeading from "./SectionHeading";
import Products from "./Products";
import { Separator } from "../ui/separator";

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
