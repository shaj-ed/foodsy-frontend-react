import SectionContainer from '@/components/common/section/SectionContainer';
import SectionHeading from '@/components/common/section/SectionHeading';
import { TopCategoryContent } from '@/components/home/TopCategories';
import CategorySkeleton from '@/features/category/components/CategorySkeleton';
import { Suspense } from 'react';

const CategoriesPage = () => {
  return (
    <SectionContainer className="h-screen">
      <div className="my-10">
        <SectionHeading headline="Categories" />

        <Suspense fallback={<CategorySkeleton />}>
          <TopCategoryContent />
        </Suspense>
      </div>
    </SectionContainer>
  );
};

export default CategoriesPage;
