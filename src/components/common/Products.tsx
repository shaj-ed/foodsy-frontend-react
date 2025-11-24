import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const onClickProduct = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index}>
          <CardContent className="aspect-square">
            <div className="h-30 bg-amber-200"></div>
            <h3 className="font-semibold mt-2">Pasta</h3>
            <p className="text-sm">Sample description</p>
            <div className="flex gap-1 mt-2">
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
              size="sm"
              className="mt-2 cursor-pointer w-full"
              onClick={() => onClickProduct(index)}
            >
              Order
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Products;
