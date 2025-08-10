import { Helmet } from "react-helmet-async";
import ProductCard from "@/components/products/ProductCard";
import { faceWashes } from "@/data/products";

const FaceWashesPage = () => {
  return (
    <div className="container py-12">
      <Helmet>
        <title>Gentle Face Washes | Pure Botanica</title>
        <meta name="description" content="Cleanse with care. Explore our gentle face washes formulated for everyday balance." />
        <link rel="canonical" href="/products/face-washes" />
      </Helmet>
      <h1 className="font-playfair text-3xl">Gentle Face Washes</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {faceWashes.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default FaceWashesPage;
