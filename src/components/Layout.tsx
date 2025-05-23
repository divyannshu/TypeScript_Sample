import Header from "./Header/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
