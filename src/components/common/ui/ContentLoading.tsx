import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

type ContentLoadingProps = {
  classname?: string;
};

const ContentLoading = ({ classname = 'mt-5' }: ContentLoadingProps) => {
  return (
    <div className={cn('flex flex-col justify-center items-center', classname)}>
      Please wait..
      <Spinner className="size-6" />
    </div>
  );
};

export default ContentLoading;
