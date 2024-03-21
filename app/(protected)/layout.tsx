interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
