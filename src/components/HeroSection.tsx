import { Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 bg-[length:200%_200%] animate-gradient text-white px-4">
      <Shield className="w-16 h-16 mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        AGI ShieldNet
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
        Empowering AGI Safety, Ethics, and Trust
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
        Learn More
      </button>
    </div>
  );
};