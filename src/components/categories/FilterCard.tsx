import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type FilterFormType = {
  priceRange: number[];
};

const FilterCard = () => {
  const defaultRange = [0, 2000];
  const { register, handleSubmit, control, reset, watch } =
    useForm<FilterFormType>({
      defaultValues: {
        priceRange: defaultRange,
      },
    });

  const [sliderKey, setSliderKey] = useState(0);

  const onSubmitFilter = (data: FilterFormType) => {
    console.log(data);
  };

  const onReset = () => {
    reset();
    setSliderKey((prev) => prev + 1); // Change key to re-render slider
  };

  return (
    <Card>
      <CardHeader className="flex gap-2 items-center justify-between">
        <CardTitle>Filter</CardTitle>
        <span className="hover:underline cursor-pointer" onClick={onReset}>
          Reset Filter
        </span>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmitFilter)}>
          <Label className="mb-4">
            Price Range: &#2547; {watch("priceRange")[0]} - &#2547;{" "}
            {watch("priceRange")[1]}
          </Label>
          <Controller
            key={sliderKey}
            name="priceRange"
            control={control}
            render={({ field }) => (
              <Slider
                defaultValue={field.value}
                min={0}
                max={2000}
                step={10}
                onValueChange={(value) => {
                  field.onChange(value);
                }}
              />
            )}
          />

          <Button className="mt-10">Apply</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
