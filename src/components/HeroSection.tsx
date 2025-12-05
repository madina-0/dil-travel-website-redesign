import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground font-medium">
              Your Journey Starts Here
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Explore the World with{" "}
            <span className="text-accent">Dil Travel</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover unforgettable destinations, create lasting memories, and experience
            personalized travel adventures crafted just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-hover"
            >
              Book a Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/30 text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
