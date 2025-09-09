import React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="group p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;