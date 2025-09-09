import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Impact = () => {
  const sdgs = [
    {
      number: "2",
      title: "Zero Hunger",
      description: "Empowering farmers with sustainable food production systems that work year-round",
      icon: "🌾"
    },
    {
      number: "3", 
      title: "Good Health & Well-Being",
      description: "Producing pesticide-free, nutrient-rich crops for healthier communities",
      icon: "🏥"
    },
    {
      number: "13",
      title: "Climate Action", 
      description: "Reducing water usage by 90% and minimizing agricultural carbon footprints",
      icon: "🌍"
    }
  ];

  const targets = [
    { number: "10,000+", label: "Farmers Empowered", description: "By 2030" },
    { number: "100+", label: "Communities Reached", description: "Across Africa" },
    { number: "Millions", label: "Liters of Water Saved", description: "Through efficient systems" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgroFlowTech is more than a farm—it's a movement aligned with the United Nations 
            Sustainable Development Goals
          </p>
        </div>

        {/* SDGs We Serve */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Sustainable Development Goals We Serve
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sdgs.map((sdg, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8 text-center shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">SDG {sdg.number}</span>
                </div>
                <div className="text-4xl mb-4">{sdg.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{sdg.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{sdg.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Targets */}
        <section className="mb-20">
          <div className="bg-gradient-primary rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Our Targets by 2030</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {targets.map((target, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{target.number}</div>
                  <div className="text-xl font-semibold mb-2">{target.label}</div>
                  <div className="text-white/80">{target.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Areas of Impact</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "💧", title: "Water Conservation", description: "90% reduction in water usage compared to traditional farming" },
              { icon: "🌱", title: "Food Security", description: "Year-round crop production independent of weather" },
              { icon: "👨‍🌾", title: "Farmer Empowerment", description: "Training and supporting farmers with new technology" },
              { icon: "🌍", title: "Environmental Protection", description: "Zero pesticides and reduced carbon footprint" }
            ].map((area, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-soft transition-all duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories of Change */}
        <section>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Stories of Change</h2>
            <div className="bg-muted rounded-xl p-12">
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're documenting the inspiring stories of farmers and communities who are 
                transforming their lives through sustainable aquaponics. These case studies 
                will showcase real impact and inspire others to join the movement.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;