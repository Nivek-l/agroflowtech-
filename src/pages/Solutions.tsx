import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "Community Systems",
      icon: "🏘️",
      description: "Small, affordable aquaponics setups designed for villages and schools",
      features: ["10-50 plant capacity", "2-5 fish tanks", "Educational materials", "Community training"],
      price: "Starting from ₦500,000"
    },
    {
      title: "Industrial Systems", 
      icon: "🏭",
      description: "Larger-scale models for agribusiness and cooperatives",
      features: ["500+ plant capacity", "Multiple fish species", "Advanced monitoring", "Business support"],
      price: "Starting from ₦3,000,000"
    },
    {
      title: "Educational Models",
      icon: "🎓", 
      description: "Training and demo units for schools, universities, and skill centers",
      features: ["Research capabilities", "Curriculum support", "Student projects", "Training programs"],
      price: "Starting from ₦300,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable aquaponics systems designed for every need and budget
          </p>
        </div>

        {/* Solutions Grid */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-lg font-semibold text-primary mb-4">{solution.price}</p>
                  <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="bg-gradient-primary rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every farming operation is unique. Let's work together to design the perfect 
            aquaponics system for your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;