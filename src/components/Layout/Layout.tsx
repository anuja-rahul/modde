import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="h-auto w-full">
      <NavBar />
      {children}
      <Footer />
    </section>
  );
}
