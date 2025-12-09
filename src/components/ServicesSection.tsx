import { Plane, Hotel, Globe, Map, Camera, Compass } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "International Packages",
    description: "Explore exotic destinations across the globe with our carefully curated international tour packages.",
    features: ["Visa Assistance", "Travel Insurance", "Local Guides"],
  },
  {
    icon: Map,
    title: "Domestic Tours",
    description: "Discover the hidden gems and popular destinations within your own country.",
    features: ["Weekend Getaways", "Family Packages", "Group Tours"],
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Premium hotel reservations at the best rates, from luxury resorts to cozy boutique stays.",
    features: ["Best Price Guarantee", "24/7 Support", "Free Cancellation"],
  },
  {
    icon: Plane,
    title: "Flight Assistance",
    description: "Hassle-free flight bookings and assistance for domestic and international travel.",
    features: ["Multi-city Bookings", "Seat Selection", "Meal Preferences"],
  },
  {
    icon: Camera,
    title: "Adventure Tours",
    description: "Thrilling adventure experiences for the adrenaline seekers and nature lovers.",
    features: ["Hiking & Trekking", "Water Sports", "Safari Tours"],
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    description: "Tailor-made travel plans designed specifically for your preferences and budget.",
    features: ["Personalized Routes", "Flexible Dates", "Private Tours"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Travel Services We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From planning to execution, we handle every detail of your journey to ensure a seamless and memorable travel experience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-hover hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
