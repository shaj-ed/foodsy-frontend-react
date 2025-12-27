import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon } from 'lucide-react';

type ContentErrorProps = {
  title?: string;
  description?: string;
  classname?: string;
};

const ContentError = ({
  title = 'Unable to get your data.',
  description = 'Please contact support or try again.',
  classname = 'w-full sm:w-[330px] mx-auto mt-10',
}: ContentErrorProps) => {
  return (
    <Alert variant="destructive" className={classname}>
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        <p>{description}</p>
      </AlertDescription>
    </Alert>
  );
};

export default ContentError;
