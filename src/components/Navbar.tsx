import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className={`font-display text-xl font-semibold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Dil Travel
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg shadow-card mt-2 p-4 animate-fade-up">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
