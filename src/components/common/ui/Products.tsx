import { useSearchParams } from 'react-router-dom';
import { useMenuList } from '@/features/food-menu/hooks/menu.query';
import CardSkeleton from './CardSkeleton';
import MenuCard from '@/features/food-menu/components/MenuCard';
import AlertOneLiner from './AlertOneLiner';
import { MenuFilter } from '@/features/food-menu/types/menu.type';

type ProductsProps = {
  filterMenu: MenuFilter;
};

const Products = ({ filterMenu }: ProductsProps) => {
  const [searchParams] = useSearchParams();

  const categoryId = searchParams.get('categoryId');
  const { data, isLoading } = useMenuList(
    0,
    10,
    categoryId ? Number(categoryId) : undefined,
    filterMenu
  );

  if (isLoading)
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index + '12'} />
        ))}
      </div>
    );

  if (!data) return <AlertOneLiner title="No Product Found" />;

  if (!data?.data) return <AlertOneLiner title="No Product Found" />;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.data.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default Products;
