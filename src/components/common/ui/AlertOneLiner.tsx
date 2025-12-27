import { Alert, AlertTitle } from '@/components/ui/alert';
import { PopcornIcon } from 'lucide-react';

type AlertOneLinerProps = {
  title?: string;
  classname?: string;
};

const AlertOneLiner = ({
  title = 'No Data Available',
  classname = 'w-full sm:w-[330px] mx-auto mt-10',
}: AlertOneLinerProps) => {
  return (
    <Alert className={classname}>
      <PopcornIcon />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
};

export default AlertOneLiner;
