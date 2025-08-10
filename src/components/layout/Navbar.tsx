import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSheet from "@/components/cart/CartSheet";

const Navbar = () => {
  const { state } = useCart();
  const count = state.items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-playfair text-xl tracking-tight">Pure Botanica</Link>
        <div className="flex items-center gap-6">
          <NavLink to="/products" className={({isActive}) => isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}>Products</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}>About</NavLink>
          <CartSheet>
            <button aria-label="Open cart" className="relative inline-flex items-center justify-center">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] leading-none text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
          </CartSheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
