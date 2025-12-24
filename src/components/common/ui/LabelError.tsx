type LabelErrorType = {
  message: string | undefined;
};

const LabelError = ({ message }: LabelErrorType) => {
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
};

export default LabelError;
