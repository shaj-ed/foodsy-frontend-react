import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
  return (
    <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
