import ContentError from '@/components/common/ui/ContentError';
import { useMenuList } from '../hooks/menu.query';
import ContentLoading from '@/components/common/ui/ContentLoading';
import AlertOneLiner from '@/components/common/ui/AlertOneLiner';

const MenuList = () => {
  const { data, isLoading, error } = useMenuList(0, 10);

  if (isLoading) return <ContentLoading />;

  if (error) return <ContentError />;

  if (!data || data.data.length < 1) return <AlertOneLiner />;

  return (
    <section className="mt-6">
      {data.data.map((menu) => (
        <p>{menu.productName}</p>
      ))}
    </section>
  );
};

export default MenuList;
