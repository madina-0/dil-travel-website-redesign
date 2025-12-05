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
    { name: "Packages", href: "#packages" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-soft">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className={`font-display text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-card"}`}>
              Dil Travel
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-primary/10 ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-card hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#packages")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${isScrolled ? "text-foreground bg-secondary" : "text-card bg-card/20"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card/98 backdrop-blur-xl rounded-2xl shadow-hover mt-4 p-6 animate-fade-in border border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary rounded-xl transition-all duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#packages")}
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
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
