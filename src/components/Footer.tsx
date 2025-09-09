import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/8c44db37-13fe-4814-8a1b-94c7b9e78769.png" 
                alt="AgroFlowTech Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              AgroFlowTech – Growing Smarter, Living Better.<br />
              Sustainable aquaponics solutions for Africa and beyond.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Stay updated on sustainable farming innovation</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Solutions</Link></li>
              <li><Link to="/impact" className="hover:text-accent transition-colors">Impact</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.instagram.com/agroflowtech" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/agroflowtech" className="hover:text-accent transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/60">
            © 2024 AgroFlowTech. All rights reserved.
          </p>
          <p className="text-sm text-background/60 mt-2 md:mt-0">
            Made with 💚 for sustainable farming
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;