import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessPage = () => {
  return (
    <div className="container py-20 text-center">
      <Helmet>
        <title>Order Confirmed | Pure Botanica</title>
        <meta name="description" content="Your order was placed successfully." />
        <link rel="canonical" href="/success" />
      </Helmet>
      <h1 className="font-playfair text-3xl">Thank You</h1>
      <p className="mt-2 text-muted-foreground">Your order has been placed. A confirmation email will follow shortly.</p>
      <div className="mt-6">
        <Button asChild variant="hero"><Link to="/">Back to Home</Link></Button>
      </div>
    </div>
  );
};

export default SuccessPage;
