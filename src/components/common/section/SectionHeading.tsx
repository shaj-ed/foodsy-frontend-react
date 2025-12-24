type Props = {
  headline: string;
};

const SectionHeading = ({ headline }: Props) => {
  return (
    <h2 className="font-headline text-2xl md:text-4xl font-semibold">
      {headline}
    </h2>
  );
};

export default SectionHeading;
