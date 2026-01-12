import FilterCard from '@/components/categories/FilterCard';
import Products from '@/components/common/ui/Products';
import SectionContainer from '@/components/common/section/SectionContainer';
import SectionHeading from '@/components/common/section/SectionHeading';
import { useState } from 'react';
import { MenuFilter } from '@/features/food-menu/types/menu.type';

const ProductsPage = () => {
  const [filtersMenu, setFiltersMenu] = useState<MenuFilter>({
    minPrice: 0,
    maxPrice: 2000,
  });

  const onResetFilter = () => {
    setFiltersMenu({ minPrice: 0, maxPrice: 2000 });
  };

  return (
    <SectionContainer>
      <div className="my-8">
        <div>
          {/* <h3>Category Detail</h3> */}
          <SectionHeading headline="Fast Food" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row mt-4">
          <div className="flex-1">
            <FilterCard
              filtersMenu={filtersMenu}
              onApply={setFiltersMenu}
              onResetFilter={onResetFilter}
            />
          </div>

          <div className="flex-1/2">
            <Products filterMenu={filtersMenu} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProductsPage;
