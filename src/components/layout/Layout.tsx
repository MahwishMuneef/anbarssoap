import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "@/contexts/CartContext";
import { HelmetProvider } from "react-helmet-async";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <CartProvider>
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </CartProvider>
    </HelmetProvider>
  );
};

export default Layout;
