import ContentLoading from '@/components/common/ui/ContentLoading';
import { useCategoryList } from '../hooks/category.query';
import CategoryCard from './CategoryCard';
import AlertOneLiner from '@/components/common/ui/AlertOneLiner';
import ContentError from '@/components/common/ui/ContentError';

const CategoryList = () => {
  const { data, isLoading, error } = useCategoryList();

  if (isLoading) return <ContentLoading />;

  if (error) return <ContentError />;

  if (!data) return <AlertOneLiner title="No Category Found" />;

  return (
    <section className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <CategoryCard key={item.id} category={item} />
      ))}
    </section>
  );
};

export default CategoryList;
