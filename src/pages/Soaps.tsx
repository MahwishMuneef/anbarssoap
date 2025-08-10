import { Helmet } from "react-helmet-async";
import ProductCard from "@/components/products/ProductCard";
import { soaps } from "@/data/products";

const SoapsPage = () => {
  return (
    <div className="container py-12">
      <Helmet>
        <title>Artisanal Soaps | Pure Botanica</title>
        <meta name="description" content="Discover our handcrafted soap bars made with nourishing, natural ingredients." />
        <link rel="canonical" href="/products/soaps" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProductCollection',
          name: 'Artisanal Soaps',
          brand: 'Pure Botanica',
        })}</script>
      </Helmet>
      <h1 className="font-playfair text-3xl">Artisanal Soaps</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {soaps.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SoapsPage;
