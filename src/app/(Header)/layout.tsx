import Main from '@/components/main';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Main />
      {children}
    </div>
  );
};

export default Layout;
