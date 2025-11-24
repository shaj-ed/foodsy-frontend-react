import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

export function TrendingCarousel() {
  return (
    <Carousel
      className="w-full mt-4"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
          >
            <Card>
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
                <Button size="sm" className="mt-2 cursor-pointer w-full">
                  Order
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
