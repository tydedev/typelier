const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl font-medium font-heading mt-20 uppercase tracking-widest border-b border-foreground/10 pb-2 text-foreground/70 mb-20">
      {children}
    </h1>
  );
};

export default Heading;
