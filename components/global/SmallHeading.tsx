type Props = {
  margin?: string;
  children: React.ReactNode;
};

const SmallHeading = ({ children, margin = "mt-20" }: Props) => {
  return (
    <h3
      className={`text-xl font-medium font-heading ${margin} uppercase tracking-widest border-b border-foreground/10 text-foreground/70`}
    >
      {children}
    </h3>
  );
};

export default SmallHeading;
