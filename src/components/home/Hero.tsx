import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-skincare.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img src={hero} alt="Minimalist natural skincare flat-lay" className="w-full h-[50vh] md:h-[70vh] object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-background/0" />
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="max-w-xl animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl leading-tight">Gentle, Natural Skincare</h1>
            <p className="mt-4 text-foreground/70 text-lg">Thoughtfully crafted soaps and face washes for calm, healthy skin.</p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="hero">
                <Link to="/products/soaps">Shop Soaps</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products/face-washes">Face Washes</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
