import { Heart, Shield, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe travel, bringing enthusiasm to every journey we plan.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Your safety and satisfaction are our top priorities on every adventure.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every trip is tailored to your unique preferences and travel style.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Deep knowledge of destinations worldwide to guide your perfect getaway.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Travel Partner
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At Dil Travel, we believe that every journey should be extraordinary. With years of experience and a passion for exploration, we craft personalized travel experiences that turn dreams into reality.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dil Travel is dedicated to making travel accessible, enjoyable, and memorable for everyone. We specialize in creating personalized travel experiences that cater to your unique preferences, budget, and dreams.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're seeking a relaxing beach getaway, an adventurous mountain expedition, or a cultural city tour, our expert team is here to design the perfect itinerary just for you.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-primary/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
                  <span className="font-display text-2xl font-bold">10+</span>
                  <span className="text-sm ml-2">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
