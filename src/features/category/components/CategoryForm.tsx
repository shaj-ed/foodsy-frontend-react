import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import {
  CategoryFormValues,
  categorySchema,
  initCategoryFormValues,
} from '../schemas/category.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFInput from '@/components/common/form/RHFInput';
import { toast } from 'sonner';
import { useCreateCategory, useUpdateCategory } from '../hooks/category.query';
import useCategoryStore from '../store/category.store';
import { useEffect } from 'react';
import { base64ToFile } from '@/lib/file/fileUtils';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import RHFDropFileUpload from '@/components/common/form/RHFDropFileUpload';

const CategoryForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: initCategoryFormValues,
  });
  const { mutateAsync: createCategory } = useCreateCategory();
  const { mutateAsync: updateCategory } = useUpdateCategory();
  const { openModal, setOpenModal, selectedCategory } = useCategoryStore();

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      toast.loading('Processing..');
      if (selectedCategory) {
        await updateCategory({ id: selectedCategory.data.id, ...values });
      } else {
        console.log(values);
        await createCategory(values);
      }
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss();
      setOpenModal(false);
    }
  };

  const cancelForm = () => {
    reset(initCategoryFormValues);
  };

  useEffect(() => {
    reset(initCategoryFormValues);

    if (selectedCategory) {
      const { data } = selectedCategory;
      let file = data.image ? base64ToFile(data.image, `${data.categoryName}.jpg`) : undefined;
      // const file: File = base64ToFile(data.image, `${data.categoryName}.jpg`)
      reset({ categoryName: data.categoryName, description: data.description, file });
    }
  }, [selectedCategory]);

  return (
    <Sheet open={openModal} onOpenChange={setOpenModal}>
      <form onSubmit={handleSubmit(onSubmit)} id="categoryForm">
        <SheetTrigger asChild>
          <Button variant="default">+ Add Category</Button>
        </SheetTrigger>
        <DialogContent className="sm:max-w-[425px] mx-auto px-8 z-[100] py-10 max-h-[88vh] overflow-y-auto">
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
                name="categoryName"
                control={control}
                label="Category name"
                placeholder="Enter category name"
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <RHFInput<CategoryFormValues>
                name="description"
                control={control}
                label="Description"
                placeholder="Short description"
              />
            </div>

            {/* Upload Image */}
            <RHFDropFileUpload<CategoryFormValues>
              name="file"
              control={control}
              label="Upload Image"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={cancelForm}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} form="categoryForm">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Sheet>
  );
};

export default CategoryForm;
