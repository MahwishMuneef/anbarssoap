import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartSheet from "@/components/cart/CartSheet";

const Navbar = () => {
  const { state } = useCart();
  const count = state.items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container grid grid-cols-3 items-center h-16">
        <div className="justify-self-start">
          <Link to="/" className="font-playfair text-xl tracking-tight">Pure Botanica</Link>
        </div>
        <div className="justify-self-center">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink to="/" end className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground"}>About</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground/80 hover:text-foreground"}>Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="justify-self-end">
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
