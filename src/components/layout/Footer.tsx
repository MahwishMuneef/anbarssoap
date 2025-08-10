const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-playfair text-lg">Pure Botanica</h4>
          <p className="text-sm text-muted-foreground mt-2">Thoughtful skincare, handcrafted in small batches.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Explore</h5>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li><a className="story-link" href="/products/soaps">Soaps</a></li>
            <li><a className="story-link" href="/products/face-washes">Face Washes</a></li>
            <li><a className="story-link" href="/about">About</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Newsletter</h5>
          <p className="text-sm text-muted-foreground">Occasional notes on gentle skincare.</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Pure Botanica. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
