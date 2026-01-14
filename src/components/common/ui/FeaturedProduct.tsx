import { useMenuList } from '@/features/food-menu/hooks/menu.query';
import SectionHeading from '../section/SectionHeading';
import CardSkeleton from './CardSkeleton';
import AlertOneLiner from './AlertOneLiner';
import MenuCard from '@/features/food-menu/components/MenuCard';

type FeaturedProductProps = {
  categoryId: number;
  currentMenuId: number;
};

const FeaturedProduct = ({ categoryId, currentMenuId }: FeaturedProductProps) => {
  const { data, isLoading, isError } = useMenuList(0, 4, categoryId);

  if (isLoading)
    return (
      <>
        <SectionHeading headline="More Foods" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index + '12'} />
          ))}
        </div>
      </>
    );

  if (isError)
    return (
      <>
        <SectionHeading headline="More Foods" />
        <AlertOneLiner title="Failed to load similar product" />
      </>
    );

  const menus = data?.data.filter((menu) => menu.id !== currentMenuId);

  if (!menus || menus?.length === 0)
    return (
      <>
        <SectionHeading headline="More Foods" />
        <AlertOneLiner title="Similar product not available" />
      </>
    );

  return (
    <>
      <SectionHeading headline="More Foods" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProduct;
