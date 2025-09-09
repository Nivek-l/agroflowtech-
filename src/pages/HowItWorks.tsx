import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const cycleSteps = [
    { step: "Fish", icon: "🐟", description: "Fish produce nutrient-rich waste in water tanks" },
    { step: "Waste", icon: "♻️", description: "Fish waste contains ammonia and organic matter" },
    { step: "Bacteria", icon: "🦠", description: "Beneficial bacteria convert waste into plant nutrients" },
    { step: "Plants", icon: "🌱", description: "Plants absorb nutrients and purify the water" },
    { step: "Clean Water", icon: "💧", description: "Purified water returns to fish tanks" },
    { step: "Back to Fish", icon: "🔄", description: "The cycle continues sustainably" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How <span className="bg-gradient-primary bg-clip-text text-transparent">Aquaponics</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nature's perfect loop, powered by technology
          </p>
        </div>

        {/* The Aquaponics Cycle */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">The Aquaponics Cycle</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {cycleSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  {index < cycleSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-16 h-0.5 bg-gradient-primary"></div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Aquaponics Comparison */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Aquaponics?</h2>
          
          <div className="max-w-4xl mx-auto bg-card rounded-xl border border-border shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Traditional Farming */}
              <div className="p-8 border-r border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Traditional Farming</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✕</span>
                    </span>
                    <span className="text-muted-foreground">Seasonal only</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✕</span>
                    </span>
                    <span className="text-muted-foreground">High water use</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✕</span>
                    </span>
                    <span className="text-muted-foreground">Chemical pesticides</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✕</span>
                    </span>
                    <span className="text-muted-foreground">Land intensive</span>
                  </li>
                </ul>
              </div>
              
              {/* AgroFlowTech Aquaponics */}
              <div className="p-8 bg-gradient-to-b from-muted/50 to-background">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">AgroFlowTech Aquaponics</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground font-medium">Year-round harvests</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground font-medium">90% less water</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground font-medium">Organic & natural</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground font-medium">Compact & scalable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech & Innovation */}
        <section>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Tech & Innovation</h2>
            <div className="bg-gradient-primary rounded-xl p-12 text-white">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Smart Farm Integration Coming Soon</h3>
              <p className="text-lg text-white/90 mb-6">
                We're developing IoT sensors, automated monitoring systems, and mobile apps 
                to make aquaponics farming even more efficient and accessible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">📱</div>
                  <p className="font-medium">Mobile Monitoring</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌡️</div>
                  <p className="font-medium">Smart Sensors</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="font-medium">Automation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;