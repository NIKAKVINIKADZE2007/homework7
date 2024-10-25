import Main from '@/components/main';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Main />
      {children}
    </div>
  );
};

export default Layout;
