type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export const Heading = ({ children, level }: HeadingProps) => {
  return <h1>{children}</h1>;
};
