const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gradient-hero">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-lg">
            <span className="italic text-gradient">ElenzerVisuals</span>
          </p>

          <p className="font-body text-sm text-muted-foreground text-center">
            © {currentYear} All Rights Reserved. Made with love for
            ducen29@gmail.com.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
