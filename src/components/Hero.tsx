import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-aquaponics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Farming.{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Sustainable Future.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            AgroFlowTech merges aquaculture and hydroponics to create food security, 
            fight climate change, and power the farms of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow px-8 py-3 text-lg font-semibold"
            >
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
            >
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;