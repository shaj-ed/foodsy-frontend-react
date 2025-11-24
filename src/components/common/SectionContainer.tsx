import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: Props) => {
  return (
    <section
      className={`w-full px-2 md:px-6 max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
