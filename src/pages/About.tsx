import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">AgroFlowTech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're reimagining agriculture through sustainable innovation
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                AgroFlowTech was born from witnessing the harsh realities of seasonal farming in Nigeria. 
                Farmers struggling with unpredictable weather, water scarcity, and pest infestations that 
                devastated entire harvests. We knew there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed">
                Our founders, driven by a passion for sustainable innovation, discovered aquaponics—a 
                revolutionary approach that combines fish farming with hydroponics. This ancient yet 
                modern technique creates a closed-loop ecosystem where fish waste nourishes plants, 
                and plants purify water for fish, resulting in year-round harvests with 90% less water usage.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To merge aquaculture and hydroponics into affordable systems that empower farmers, 
                save water, and secure Africa's food future through sustainable technology.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-soft">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every community thrives on sustainable farming practices, where food 
                security is guaranteed, and where agriculture works in harmony with nature.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate innovators driving sustainable agriculture forward
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              { name: "Kevin Iseh-Ntah", role: "Founder & CEO" },
              { name: "Susanna Oguaba", role: "Co-founder and Operations Manager" },
              { name: "Benita Okon", role: "Co-founder Agricultural Expert" },
              { name: "Tersoo James", role: "Chief Technical Officer" },
              { name: "Wilfred Chinwuba", role: "Media and Communication" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-primary mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Partners & Supporters</h2>
            <p className="text-muted-foreground mb-8">
              We're building partnerships with organizations that share our vision
            </p>
            <div className="bg-muted rounded-xl p-12">
              <p className="text-muted-foreground italic">Partnership opportunities coming soon...</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;