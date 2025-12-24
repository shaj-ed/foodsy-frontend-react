import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import {  CategoryFormValues, categorySchema, initCategoryFormValues,  } from "../schemas/category.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import RHFInput from "@/components/common/form/RHFInput"
import { RHFFileUpload } from "@/components/common/form/RHFFileUpload"

const CategoryForm = () => {
   const {control, handleSubmit, formState: {isSubmitting}, reset} =  useForm<CategoryFormValues>({
      resolver: zodResolver(categorySchema),
      defaultValues: initCategoryFormValues
    })

    const onSubmit = async (values: CategoryFormValues) => {
      console.log(values);
    }

    const cancelForm = () => {
      reset()
    }

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)} id="categoryForm">
        <DialogTrigger asChild>
          <Button variant="default">+ Add Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
            <DialogDescription>
              Add a category and make sure you add a image for that category.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Category name */}
            <div className="grid gap-3">
              <RHFInput<CategoryFormValues>
                name='categoryName'
                control={control}
                label="Category name"
                placeholder="Enter category name"
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
               <RHFInput<CategoryFormValues>
                name='description'
                control={control}
                label="Description"
                placeholder="Short description"
              />
            </div>

            {/* Upload image */}
            <div>
              <RHFFileUpload<CategoryFormValues>
                name="file"
                control={control}
                label="Upload image"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={cancelForm}>Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} form="categoryForm">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default CategoryForm