import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const values = [
    {
      icon: <span className="text-white text-2xl">🌾</span>,
      title: "Year-Round Harvests",
      description: "Break free from seasonal limitations with continuous crop production regardless of weather conditions."
    },
    {
      icon: <span className="text-white text-2xl">💧</span>,
      title: "90% Water Savings",
      description: "Revolutionary water conservation compared to traditional farming methods through closed-loop systems."
    },
    {
      icon: <span className="text-white text-2xl">🌱</span>,
      title: "Pesticide-Free",
      description: "Produce healthy, organic crops naturally without harmful chemicals or synthetic pesticides."
    },
    {
      icon: <span className="text-white text-2xl">🏘️</span>,
      title: "Community Impact",
      description: "Affordable and scalable systems designed to empower local communities and food security."
    }
  ];

  const impactStats = [
    { number: "10,000+", label: "farmers empowered by 2030" },
    { number: "90%", label: "water saved per system" },
    { number: "100%", label: "pesticide-free produce" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <main>
        {/* Who We Are */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Who We Are
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    AgroFlowTech is a Nigerian startup reimagining agriculture through aquaponics—a 
                    fusion of fish farming and hydroponics. Our mission is to solve the challenges 
                    of seasonal farming, water management, and pest control while building sustainable 
                    food systems for Africa and beyond.
                  </p>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">Learn Our Story</Link>
                  </Button>
                </div>
                <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
                  <div className="text-6xl mb-4">🐟🌱</div>
                  <h3 className="text-2xl font-bold mb-4">Aquaponics Innovation</h3>
                  <p className="text-white/90">
                    Combining the best of aquaculture and hydroponics for sustainable, 
                    efficient food production systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Nature's perfect loop, powered by technology
            </p>
            
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: "🐟", label: "Fish" },
                  { icon: "♻️", label: "Waste" }, 
                  { icon: "🦠", label: "Bacteria" },
                  { icon: "🌱", label: "Plants" },
                  { icon: "💧", label: "Clean Water" },
                  { icon: "🔄", label: "Back to Fish" }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-3 shadow-glow">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{step.label}</span>
                    {index < 5 && (
                      <div className="hidden lg:block w-8 h-0.5 bg-gradient-primary mt-8 ml-16"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/how-it-works">Explore the Process</Link>
            </Button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose AgroFlowTech?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionary advantages that transform traditional farming
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              AgroFlowTech is more than a farm—it's a movement aligned with the United Nations 
              Sustainable Development Goals. From Zero Hunger (SDG 2) to Climate Action (SDG 13), 
              we are building systems that feed people, save water, and protect our planet.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-8 shadow-soft">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/impact">See Our Full Impact</Link>
            </Button>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Be Part of the Future of Farming
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in revolutionizing agriculture through sustainable aquaponics. 
              Together, we can create food security and fight climate change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/get-involved">Partner with Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/solutions">Support Our Mission</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;