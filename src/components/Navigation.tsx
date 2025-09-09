import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Solutions", path: "/solutions" },
    { label: "Impact", path: "/impact" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8c44db37-13fe-4814-8a1b-94c7b9e78769.png" 
              alt="AgroFlowTech Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-gradient-primary hover:opacity-90">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
          
          {/* Mobile menu button - simplified for MVP */}
          <div className="md:hidden">
            <Button asChild variant="outline" size="sm">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;