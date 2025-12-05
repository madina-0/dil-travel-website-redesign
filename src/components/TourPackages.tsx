import { Calendar, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import baliImg from "@/assets/destination-bali.jpg";
import parisImg from "@/assets/destination-paris.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import swissImg from "@/assets/destination-swiss.jpg";
import santoriniImg from "@/assets/hero-santorini.jpg";

const packages = [
  {
    id: 1,
    image: maldivesImg,
    title: "Maldives Paradise",
    location: "Maldives",
    duration: "7 Days",
    groupSize: "2-6",
    rating: 4.9,
    price: 2499,
    originalPrice: 2999,
    featured: true,
  },
  {
    id: 2,
    image: parisImg,
    title: "Romantic Paris",
    location: "France",
    duration: "5 Days",
    groupSize: "2-8",
    rating: 4.8,
    price: 1899,
    originalPrice: 2299,
    featured: false,
  },
  {
    id: 3,
    image: baliImg,
    title: "Bali Adventure",
    location: "Indonesia",
    duration: "8 Days",
    groupSize: "4-12",
    rating: 4.9,
    price: 1599,
    originalPrice: 1999,
    featured: true,
  },
  {
    id: 4,
    image: dubaiImg,
    title: "Dubai Luxury",
    location: "UAE",
    duration: "6 Days",
    groupSize: "2-10",
    rating: 4.7,
    price: 2199,
    originalPrice: 2699,
    featured: false,
  },
  {
    id: 5,
    image: swissImg,
    title: "Swiss Alps Explorer",
    location: "Switzerland",
    duration: "7 Days",
    groupSize: "4-8",
    rating: 4.9,
    price: 2799,
    originalPrice: 3299,
    featured: true,
  },
  {
    id: 6,
    image: santoriniImg,
    title: "Greek Islands",
    location: "Greece",
    duration: "9 Days",
    groupSize: "2-10",
    rating: 4.8,
    price: 2399,
    originalPrice: 2899,
    featured: false,
  },
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
              Popular Packages
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Discover Our Tour Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked destinations with all-inclusive packages designed for unforgettable experiences.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  
                  {/* Badge */}
                  {pkg.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-foreground">{pkg.rating}</span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-card text-sm font-medium">{pkg.location}</p>
                    <h3 className="font-display text-xl font-bold text-card">{pkg.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{pkg.groupSize} People</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground line-through">${pkg.originalPrice}</p>
                      <p className="text-2xl font-bold text-foreground">
                        ${pkg.price}
                        <span className="text-sm font-normal text-muted-foreground">/person</span>
                      </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group-hover:scale-105 transition-transform">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 transition-all duration-300"
            >
              View All Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
