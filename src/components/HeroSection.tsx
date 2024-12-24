import { Shield } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 bg-[length:200%_200%] animate-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <Shield className="w-20 h-20 mb-8 mx-auto text-white" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            AGI ShieldNet
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
            Empowering AGI Safety, Ethics, and Trust through advanced protection and governance
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-white/90 transition-all text-lg px-8"
          >
            Explore Features
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 transition-all text-lg px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};