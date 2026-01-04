/* eslint-disable react-refresh/only-export-components */
import SectionHeading from '../common/section/SectionHeading';
import SectionContainer from '../common/section/SectionContainer';
import CategoryCard from '../categories/CategoryCard';
import { useCategoryList } from '@/features/category/hooks/category.query';
import { Suspense } from 'react';
import CategorySkeleton from '@/features/category/components/CategorySkeleton';

const TopCategories = () => {
  return (
    <SectionContainer className="mt-12">
      <SectionHeading headline="Top Categories" />

      <Suspense fallback={<CategorySkeleton />}>
        <TopCategoryContent />
      </Suspense>
    </SectionContainer>
  );
};

export const TopCategoryContent = () => {
  const { data } = useCategoryList();

  return (
    <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {data.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
};

export default TopCategories;
