import SectionContainer from "@/components/common/section/SectionContainer";
import fastfood from "@/assets/images/categories/fastfood.jpg";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturedProduct from "@/components/common/ui/FeaturedProduct";

const ProductDetails = () => {
  return (
    <>
      <div className="bg-slate-800 px-4 md:px-14 py-10 text-white">
        <SectionContainer className="my-8">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="overflow-hidden rounded w-full max-w-96 border-2 border-sky-400">
              <img
                src={fastfood}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-headline">Pasta </h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                excepturi quaerat eveniet necessitatibus pariatur fugit expedita
                voluptatibus! Error deleniti ad officiis, magni unde molestiae,
                asperiores minima minus expedita fugiat eaque.
              </p>
              <p className="text-lg font-medium mt-3">Price: &#2547; 500</p>
              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <Star
                      key={index}
                      size="16px"
                      className="text-amber-300 fill-amber-200"
                    />
                  );
                })}
              </div>

              <Button
                size="lg"
                className="uppercase bg-red-400 hover:bg-red-500 cursor-pointer mt-8"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer className="my-8">
        <FeaturedProduct />
      </SectionContainer>
    </>
  );
};

export default ProductDetails;
