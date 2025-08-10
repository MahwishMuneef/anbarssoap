import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductData } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

function formatCurrency(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="text-sm text-foreground/70">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</div>
);

const ProductCard = ({ product }: { product: ProductData }) => {
  const { add } = useCart();
  const navigate = useNavigate();

  return (
    <Card className="hover-scale">
      <CardHeader>
        <CardTitle className="font-medium">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={`${product.name} product image`} className="w-full h-48 object-cover rounded-md" loading="lazy" />
        <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-3 font-semibold">{formatCurrency(product.price)}</div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Button
          variant="hero"
          onClick={() => {
            add(product);
            navigate("/checkout");
          }}
          aria-label={`Buy ${product.name} now`}
        >
          Buy Now
        </Button>
        <Button variant="secondary" onClick={() => add(product)} aria-label={`Add ${product.name} to cart`}>Add to cart</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-playfair">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-3">
              <img src={product.image} alt={`${product.name} large image`} className="w-full h-56 object-cover rounded-md" />
              <p className="text-sm text-foreground/80">{product.description}</p>
              <div>
                <h4 className="font-medium mb-1">Ingredients</h4>
                <ul className="list-disc pl-5 text-sm text-foreground/80">
                  {product.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">Customer Reviews</h4>
                <div className="space-y-2">
                  {product.reviews.map((r, idx) => (
                    <div key={idx} className="text-sm">
                      <Stars rating={r.rating} />
                      <div className="text-foreground/80">{r.comment}</div>
                      <div className="text-muted-foreground">— {r.author}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
