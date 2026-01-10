/* eslint-disable react-refresh/only-export-components */
import SectionHeading from '../common/section/SectionHeading';
import SectionContainer from '../common/section/SectionContainer';
import CategoryCard from '../categories/CategoryCard';
import { useCategoryList } from '@/features/category/hooks/category.query';
import { Suspense } from 'react';
import CategorySkeleton from '@/features/category/components/CategorySkeleton';
import { ErrorBoundary } from 'react-error-boundary';

const TopCategories = () => {
  return (
    <SectionContainer className="mt-12">
      <SectionHeading headline="Top Categories" />

      <Suspense fallback={<CategorySkeleton />}>
        <ErrorBoundary
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              <p className="text-red-500">Failed to load categories</p>
              <button onClick={resetErrorBoundary}>Retry</button>
            </div>
          )}
        >
          <TopCategoryContent />
        </ErrorBoundary>
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
