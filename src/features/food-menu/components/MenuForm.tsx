import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import useMenuStore from '../store/menu.store';
import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogFooter } from '@/components/ui/dialog';

const MenuForm = () => {
  const { openModal, setOpenModal } = useMenuStore();

  return (
    <Sheet open={openModal} onOpenChange={setOpenModal}>
      <form>
        <SheetTrigger asChild>
          <Button variant="default">+ Add Menu</Button>
        </SheetTrigger>

        <DialogContent className="sm:max-w-[425px] md:max-w-2xl xl:max-w-4xl mx-auto px-8 z-[100] py-10 max-h-[88vh] overflow-y-auto">
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="categoryForm">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Sheet>
  );
};

export default MenuForm;
