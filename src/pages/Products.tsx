import { Helmet } from "react-helmet-async";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="container py-12">
      <Helmet>
        <title>Products | Pure Botanica</title>
        <meta
          name="description"
          content="Shop natural soaps and gentle face washes — minimalist, clean skincare."
        />
        <link rel="canonical" href="/products" />
      </Helmet>
      <h1 className="font-playfair text-3xl">All Products</h1>
      <p className="mt-2 text-muted-foreground">Handcrafted soaps and gentle face washes.</p>
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
