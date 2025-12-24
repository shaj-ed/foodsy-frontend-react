import SectionContainer from "@/components/common/section/SectionContainer";
import SectionHeading from "@/components/common/section/SectionHeading";
import pizzapasta from "@/assets/images/categories/pizzapasta.jpg";
import {
  Minus,
  MinusCircle,
  MinusCircleIcon,
  MinusIcon,
  Plus,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
  Trash,
} from "lucide-react";

const CartPage = () => {
  return (
    <SectionContainer className="my-8">
      <SectionHeading headline="Cart" />

      <div className="mt-8">
        <div className="flex gap-3  rounded w-full max-w-[450px]">
          <div className="w-full h-full max-w-40 rounded overflow-hidden">
            <img src={pizzapasta} className="w-full h-full" alt="" />
          </div>

          <div className="w-full me-2 py-2 flex justify-between items-center">
            <div className="">
              <p className="font-medium text-md">Pizza & Pasta</p>
              <p className="text-sm text-gray-700">Sample description</p>

              <p className="font-medium text-sm mb-1">&#2547; 500</p>
              <div className="flex gap-4 items-center">
                <button
                  type="button"
                  className="cursor-pointer hover:opacity-70 p-[2px] bg-red-500 rounded"
                >
                  <Minus size="20px" className="text-white" />
                </button>
                <span className="text-md">1</span>
                <button
                  type="button"
                  className="cursor-pointer hover:opacity-70 p-[2px] bg-red-500 rounded"
                >
                  <Plus size="20px" className="text-white" />
                </button>
              </div>
            </div>

            <div>
              <Trash />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CartPage;
