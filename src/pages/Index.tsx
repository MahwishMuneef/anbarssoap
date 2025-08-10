import Hero from "@/components/home/Hero";
import ProductCard from "@/components/products/ProductCard";
import { soaps, faceWashes } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-background">
      <Helmet>
        <title>Pure Botanica — Natural Skincare</title>
        <meta name="description" content="Handcrafted soaps and gentle face washes. Clean ingredients, minimalist design." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Pure Botanica — Natural Skincare" />
        <meta property="og:description" content="Handcrafted soaps and gentle face washes." />
      </Helmet>
      <Hero />
      <section className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="font-playfair text-2xl">Featured Soaps</h2>
          <Link className="story-link text-sm" to="/products/soaps">View all</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {soaps.slice(0,3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="font-playfair text-2xl">Gentle Face Washes</h2>
          <Link className="story-link text-sm" to="/products/face-washes">View all</Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {faceWashes.slice(0,3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
