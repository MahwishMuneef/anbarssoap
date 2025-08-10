import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="container py-12">
      <Helmet>
        <title>About Us | Pure Botanica</title>
        <meta name="description" content="Our philosophy: thoughtful, minimal formulations that respect skin and planet." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1 className="font-playfair text-3xl">Our Story</h1>
      <div className="max-w-2xl mt-6 space-y-4 text-foreground/80 leading-relaxed">
        <p>
          Pure Botanica began with a simple belief: skincare should be gentle, honest, and beautiful. We craft small batches using
          clean, plant-powered ingredients—no noise, no shortcuts.
        </p>
        <p>
          Our minimalist approach celebrates fewer, better essentials. Each bar and wash is made to calm, nourish, and support your
          skin barrier. Thoughtful sourcing, recyclable packaging, and mindful production guide everything we do.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
