import { Button } from '@/components/ui/button';
import { Edit, Trash } from 'lucide-react';
import useMenuStore from '../store/menu.store';
import { toast } from 'sonner';
import { getMenuById, getMenuImagesById } from '../api/menu.api';
import { base64ToFile } from '@/lib/file/fileUtils';
import { useDeleteMenu } from '../hooks/menu.query';

type MenuActionCellProps = {
  id: number;
};

const MenuActionCell = ({ id }: MenuActionCellProps) => {
  const { setOpenModal, setSelectedMenu, selectedMenu, setSelectedMenuFiles } = useMenuStore();
  const { mutateAsync: deleteMenu } = useDeleteMenu();

  const handleEdit = async () => {
    toast.loading('Processing..');
    const { data } = await getMenuById(id);
    const { data: images } = await getMenuImagesById(id);
    setSelectedMenu(data);
    const files: File[] = images.map((d, idx) =>
      base64ToFile(d, `${selectedMenu?.productName}-${idx + 1}`)
    );
    setSelectedMenuFiles(files);

    setOpenModal(true);
    toast.dismiss();
  };

  const handleDelete = async () => {
    toast.loading('Processing..');
    await deleteMenu(id);
    toast.dismiss();
    toast.success('Deleted menu');
  };

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={handleEdit}>
        <Edit />
      </Button>
      <Button variant="ghost" size="icon" onClick={handleDelete}>
        <Trash className="text-red-500" />
      </Button>
    </div>
  );
};

export default MenuActionCell;
