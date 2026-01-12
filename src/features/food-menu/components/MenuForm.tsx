import useMenuStore from '../store/menu.store';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { initMenuFormValues, MenuFormType, menuSchema } from '../schemas/menu.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFInput from '@/components/common/form/RHFInput';
import { useCategoryOptions } from '@/hooks/list/useOptionsList';
import RHFSelect from '@/components/common/form/RHFSelect';
import RHFDropFileUpload from '@/components/common/form/RHFDropFileUpload';
import { useAddMenu, useUpdateMenu } from '../hooks/menu.query';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { getValueById } from '@/lib/helpers/array.helper';

const MenuForm = () => {
  const {
    openModal,
    setOpenModal,
    selectedMenu,
    selectedMenuFiles,
    clearSelected,
    setSelectedMenu,
  } = useMenuStore();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = useForm<MenuFormType>({
    resolver: zodResolver(menuSchema),
    defaultValues: initMenuFormValues,
  });
  const categoryOptions = useCategoryOptions();
  const { mutateAsync: addMenu } = useAddMenu();
  const { mutateAsync: updateMenu } = useUpdateMenu();

  const onSubmit = async (data: MenuFormType) => {
    try {
      toast.loading('Processing..');
      const { categoryName, categoryId, ...payload } = data;
      const sendvalues = { categoryId: data.categoryId!, ...payload };
      if (selectedMenu) {
        await updateMenu({
          id: selectedMenu.id,
          ...sendvalues,
        });
      } else {
        await addMenu(sendvalues);
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
    clearSelected();
    setSelectedMenu(null);
  };

  useEffect(() => {
    if (!selectedMenu) {
      reset(initMenuFormValues);
      return;
    }

    if (selectedMenu && selectedMenuFiles) {
      console.log('from here');
      reset({
        productName: selectedMenu.productName,
        description: selectedMenu.description,
        price: selectedMenu.price,
        categoryId: selectedMenu.categoryId,
        categoryName: getValueById(categoryOptions, selectedMenu.categoryId, 'label'),
        files: selectedMenuFiles,
      });
    }
  }, [selectedMenu, selectedMenuFiles]);

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <form onSubmit={handleSubmit(onSubmit)} id="menu-form">
        <DialogTrigger asChild>
          <Button variant="default" onClick={cancelForm}>
            + Add Menu
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] md:max-w-2xl xl:max-w-4xl mx-auto px-8 z-[100] py-10 max-h-[88vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create Menu</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Menu name */}
            <div className="grid gap-3">
              <RHFInput<MenuFormType>
                name="productName"
                control={control}
                label="Menu name"
                placeholder="Enter menu name"
              />
            </div>

            {/* Price */}
            <div className="grid gap-3">
              <RHFInput<MenuFormType>
                name="price"
                control={control}
                label="Price"
                placeholder="Enter price"
                type="number"
              />
            </div>

            {/* Category name */}
            <div className="grid gap-3">
              <RHFSelect<MenuFormType>
                name="categoryName"
                control={control}
                setValue={setValue}
                label="Category name"
                placeholder="Select category"
                options={categoryOptions}
              />
            </div>

            {/* Description */}
            <div className="grid gap-3">
              <RHFInput<MenuFormType>
                name="description"
                control={control}
                label="Description"
                placeholder="Short description"
              />
            </div>

            {/* Upload Image */}
            <RHFDropFileUpload<MenuFormType>
              name="files"
              control={control}
              label="Upload Image"
              multiple={true}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={cancelForm} disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" form="menu-form" disabled={isSubmitting}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default MenuForm;
