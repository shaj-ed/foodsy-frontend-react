import SectionHeading from "../common/section/SectionHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import SectionContainer from "../common/section/SectionContainer";

const BlogAndRecipes = () => {
  return (
    <SectionContainer className="mb-10">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 items-center">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <CardDescription>
                    <div className="flex gap-2 items-center">
                      <Avatar className="border-2 border-sky-700">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p>Daniel D. Lewis</p>
                    </div>
                  </CardDescription>
                  <CardTitle>Fresh taste at a great price</CardTitle>
                  <span className="block text-sm">18/03/2025</span>
                </CardHeader>
                <CardContent>
                  <p>
                    Food is a restaurant, bar and coffee roastery located on a
                    busy corner site in Farringdon's Exmouth Market. With
                    glazed.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    size="sm"
                    className="cursor-pointer bg-amber-200 text-black"
                  >
                    see more
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="order-first lg:order-last">
          <SectionHeading headline="Blogs / Recipes" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
            excepturi quaerat eveniet necessitatibus pariatur fugit expedita
            voluptatibus! Error deleniti ad officiis, magni unde molestiae,
            asperiores minima minus expedita fugiat eaque.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default BlogAndRecipes;
