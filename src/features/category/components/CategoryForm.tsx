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
import { toast } from "sonner"
import { useCreateCategory, useUpdateCategory } from "../hooks/category.query"
import useCategoryStore from "../store/category.store"
import { useEffect } from "react"
import { base64ToFile } from "@/lib/file/fileUtils"

const CategoryForm = () => {
   const {control, handleSubmit, formState: {isSubmitting}, reset} =  useForm<CategoryFormValues>({
      resolver: zodResolver(categorySchema),
      defaultValues: initCategoryFormValues
    })
    const {mutateAsync: createCategory} = useCreateCategory()
    const {mutateAsync: updateCategory} = useUpdateCategory()
    const {openModal, setOpenModal, selectedCategory} = useCategoryStore()

    const onSubmit = async (values: CategoryFormValues) => {
      try {
        toast.loading("Processing..")
        if(selectedCategory) {
          await updateCategory({id: selectedCategory.data.id, ...values})
        } else {
          await createCategory(values)
        }
        reset()
      } catch (error) {
        console.log(error)
      } finally {
        toast.dismiss()
        setOpenModal(false)
      }
    }

    const cancelForm = () => {
      reset(initCategoryFormValues)
    }

    useEffect(() => {
      reset(initCategoryFormValues)

      if(selectedCategory) {
        const {data} = selectedCategory
        let file = data.image ? base64ToFile(data.image, `${data.categoryName}.jpg`) : undefined
        // const file: File = base64ToFile(data.image, `${data.categoryName}.jpg`)
        reset({categoryName: data.categoryName, description: data.description, file})
      }

    }, [selectedCategory])

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
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