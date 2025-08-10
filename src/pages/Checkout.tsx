import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

function formatCurrency(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

type FormValues = {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postal: string;
};

const CheckoutPage = () => {
  const { state, total, clear } = useCart();
  const { register, handleSubmit, formState } = useForm<FormValues>({ mode: "onChange" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (data: FormValues) => {
    toast({ title: "Order placed", description: "Thank you for your purchase." });
    clear();
    navigate("/success");
  };

  return (
    <div className="container py-12 grid gap-10 md:grid-cols-2">
      <Helmet>
        <title>Checkout | Pure Botanica</title>
        <meta name="description" content="Secure, simple checkout for your Pure Botanica order." />
        <link rel="canonical" href="/checkout" />
      </Helmet>
      <div>
        <h1 className="font-playfair text-3xl">Checkout</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-full rounded border bg-background p-3" placeholder="Full name" {...register("name", { required: true })} />
          <input className="w-full rounded border bg-background p-3" placeholder="Email" type="email" {...register("email", { required: true })} />
          <input className="w-full rounded border bg-background p-3" placeholder="Address" {...register("address", { required: true })} />
          <div className="grid grid-cols-2 gap-3">
            <input className="rounded border bg-background p-3" placeholder="City" {...register("city", { required: true })} />
            <input className="rounded border bg-background p-3" placeholder="Country" {...register("country", { required: true })} />
          </div>
          <input className="w-40 rounded border bg-background p-3" placeholder="Postal code" {...register("postal", { required: true })} />
          <Button type="submit" variant="hero" disabled={!formState.isValid}>
            Place Order
          </Button>
          <p className="text-xs text-muted-foreground">Demo checkout — no payment is processed.</p>
        </form>
      </div>
      <div>
        <h2 className="font-medium">Order Summary</h2>
        <div className="mt-4 space-y-4">
          {state.items.map((i) => (
            <div key={i.id} className="flex items-center gap-3">
              <img src={i.image} alt={i.name} className="h-16 w-16 rounded object-cover" />
              <div className="flex-1">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-muted-foreground">Qty {i.qty}</div>
              </div>
              <div className="font-medium">{formatCurrency(i.price * i.qty)}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t pt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Total</div>
          <div className="font-semibold">{formatCurrency(total)}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
