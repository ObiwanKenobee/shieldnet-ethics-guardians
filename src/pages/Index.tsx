import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ChallengesSection } from "@/components/ChallengesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ChallengesSection />
    </div>
  );
};

export default Index;