import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

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
          alt="Beautiful Santorini Greece travel destination"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 hidden lg:block animate-float">
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-hover">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-foreground">4.9</span>
          </div>
          <p className="text-sm text-muted-foreground">500+ Reviews</p>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-10 hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-hover">
          <p className="font-semibold text-foreground">200+</p>
          <p className="text-sm text-muted-foreground">Destinations</p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-card font-medium">
              Your Journey Starts Here
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
            Explore the World with{" "}
            <span className="text-primary">Dil Travel</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover unforgettable destinations, create lasting memories, and experience
            personalized travel adventures crafted just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-hover transition-all duration-300 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-card/20 backdrop-blur-sm border-2 border-card/40 text-card hover:bg-card/30 text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
