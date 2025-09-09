import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const ways = [
    {
      title: "Partner With Us",
      icon: "🤝",
      description: "Join us as an NGO, business, or government partner",
      actions: ["Strategic partnerships", "Funding opportunities", "Resource sharing", "Joint initiatives"],
      cta: "Explore Partnership"
    },
    {
      title: "Support Our Mission", 
      icon: "💚",
      description: "Help us scale through donations, sponsorship, or volunteering",
      actions: ["Financial support", "Equipment donations", "Volunteer programs", "Advocacy"],
      cta: "Support Now"
    },
    {
      title: "Join the Movement",
      icon: "🌱",
      description: "Be part of our community and stay updated on our progress",
      actions: ["Newsletter updates", "Community events", "Training programs", "Beta testing"],
      cta: "Join Community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get <span className="bg-gradient-primary bg-clip-text text-transparent">Involved</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the future of farming. Together, we can create sustainable food systems for everyone.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ways.map((way, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-8 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{way.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{way.title}</h3>
                  <p className="text-muted-foreground">{way.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {way.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center space-x-3">
                      <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-sm text-muted-foreground">{action}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                  <Link to="/contact">{way.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-20">
          <div className="bg-gradient-primary rounded-xl p-12 text-white text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest updates on sustainable farming innovation, success stories, and opportunities to get involved.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Let's Talk</h2>
              <p className="text-muted-foreground">
                Have questions or want to discuss a specific opportunity? We'd love to hear from you.
              </p>
            </div>
            
            <form className="bg-card rounded-xl border border-border p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Organization (Optional)</label>
                <Input placeholder="Your organization or company" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">How would you like to get involved?</label>
                <Textarea 
                  placeholder="Tell us about your interest in sustainable farming, partnership ideas, or how you'd like to support our mission..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;