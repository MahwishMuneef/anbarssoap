import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function formatCurrency(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

const CartSheet = ({ children }: { children: React.ReactNode }) => {
  const { state, remove, setQty, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {state.items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          ) : (
            state.items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{formatCurrency(item.price)}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <label htmlFor={`qty-${item.id}`} className="text-xs text-muted-foreground">Qty</label>
                    <input id={`qty-${item.id}`} type="number" min={1} value={item.qty} onChange={(e) => setQty(item.id, Math.max(1, Number(e.target.value)))} className="h-8 w-16 rounded border bg-background px-2 text-sm" />
                    <Button variant="ghost" onClick={() => remove(item.id)}>Remove</Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Subtotal</div>
          <div className="font-semibold">{formatCurrency(total)}</div>
        </div>
        <div className="mt-4">
          <Button asChild className="w-full" variant="hero">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
